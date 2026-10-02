import messages from './messages'
import { useLocaleStore } from '@/stores/locale'

// Looks up a dot-separated key, e.g. $t('hero.title'). Falls back to English, then the key itself.
export default {
  install(app) {
    const store = useLocaleStore()
    store.init()

    const lookup = (locale, key) =>
      key.split('.').reduce((node, part) => (node == null ? undefined : node[part]), messages[locale])

    app.config.globalProperties.$t = (key) => {
      const value = lookup(store.locale, key)
      return value === undefined ? lookup('en', key) ?? key : value
    }
  }
}
