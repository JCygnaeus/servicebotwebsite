<template>
  <header class="site-header">
    <div class="container site-nav">
      <router-link to="/" class="site-brand">
        <span class="site-brand-mark">
          <BaseIcon name="home" :size="20" :stroke-width="2" />
        </span>
        <span class="site-brand-name">Servicebot</span>
      </router-link>

      <div class="lang-toggle" role="group" :aria-label="$t('header.language')">
        <button
          v-for="option in languages"
          :key="option.code"
          type="button"
          class="lang-toggle-option"
          :class="{ 'lang-toggle-active': localeStore.locale === option.code }"
          :lang="option.code"
          :aria-pressed="localeStore.locale === option.code"
          :title="option.name"
          @click="localeStore.setLocale(option.code)"
        >
          {{ option.label }}
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapStores } from 'pinia'
import BaseIcon from '@/components/BaseIcon.vue'
import { useLocaleStore } from '@/stores/locale'

export default {
  name: 'SiteHeader',
  components: {
    BaseIcon
  },
  data() {
    return {
      languages: [
        { code: 'en', label: 'EN', name: 'English' },
        { code: 'sv', label: 'SV', name: 'Svenska' }
      ]
    }
  },
  computed: {
    ...mapStores(useLocaleStore)
  }
}
</script>

<style>
.site-header {
  background-color: var(--color-bg);
  border-bottom: 1px solid var(--color-line);
}

.site-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: var(--header-height);
}

.site-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-ink);
}

.site-brand:hover {
  color: var(--color-ink);
}

.site-brand-mark {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background-color: var(--color-primary);
  color: var(--color-highlight);
  display: flex;
  align-items: center;
  justify-content: center;
}

.site-brand-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 21px;
}

.lang-toggle {
  display: flex;
  padding: 3px;
  border-radius: 999px;
  border: 1px solid var(--color-line);
  background-color: var(--color-surface);
}

.lang-toggle-option {
  min-width: 44px;
  min-height: 34px;
  padding: 0 12px;
  border: 0;
  border-radius: 999px;
  background-color: transparent;
  color: var(--color-muted);
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  cursor: pointer;
}

.lang-toggle-option:hover {
  color: var(--color-ink);
}

.lang-toggle-option:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.lang-toggle-active,
.lang-toggle-active:hover {
  background-color: var(--color-primary);
  color: #fff;
}
</style>
