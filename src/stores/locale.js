import { defineStore } from 'pinia'
import messages from '@/i18n/messages'

const STORAGE_KEY = 'servicebot-locale'
export const LOCALES = ['en', 'sv']

function initial_locale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (LOCALES.includes(saved)) {
      return saved
    }
  } catch (err) {
    // Storage can be blocked; fall back to the browser language
  }
  return navigator.language && navigator.language.toLowerCase().startsWith('sv') ? 'sv' : 'en'
}

function apply_to_document(locale) {
  const meta = messages[locale].meta
  document.documentElement.lang = locale
  document.title = meta.title
  const description = document.querySelector('meta[name="description"]')
  if (description) {
    description.setAttribute('content', meta.description)
  }
}

export const useLocaleStore = defineStore('locale', {
  state: () => ({
    locale: initial_locale()
  }),
  actions: {
    init() {
      apply_to_document(this.locale)
    },
    setLocale(locale) {
      if (!LOCALES.includes(locale)) {
        return
      }
      this.locale = locale
      apply_to_document(locale)
      try {
        localStorage.setItem(STORAGE_KEY, locale)
      } catch (err) {
        // Ignore: the choice just won't be remembered
      }
    }
  }
})
