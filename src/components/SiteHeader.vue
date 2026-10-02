<template>
  <header class="site-header">
    <nav class="container site-nav" aria-label="Main">
      <router-link to="/" class="site-brand" @click="menuOpen = false">
        <span class="site-brand-mark">
          <BaseIcon name="home" :size="20" :stroke-width="2" />
        </span>
        <span class="site-brand-name">Servicebot</span>
      </router-link>

      <button
        class="site-nav-toggle"
        :aria-expanded="menuOpen ? 'true' : 'false'"
        aria-controls="site-nav-menu"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        @click="menuOpen = !menuOpen"
      >
        <BaseIcon :name="menuOpen ? 'close' : 'menu'" :stroke-width="2" />
      </button>

      <div id="site-nav-menu" class="site-nav-menu" :class="{ open: menuOpen }">
        <ul class="site-nav-links">
          <li v-for="link in links" :key="link.hash">
            <router-link :to="{ path: '/', hash: link.hash }" @click="menuOpen = false">
              {{ link.label }}
            </router-link>
          </li>
        </ul>
        <router-link
          :to="{ path: '/', hash: '#demo' }"
          class="btn btn-primary site-nav-cta"
          @click="menuOpen = false"
        >
          Book a demo
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'

export default {
  name: 'SiteHeader',
  components: {
    BaseIcon
  },
  data() {
    return {
      menuOpen: false,
      links: [
        { label: 'How it works', hash: '#how' },
        { label: 'For property managers', hash: '#managers' },
        { label: 'For tenants', hash: '#tenants' },
        { label: 'Pricing', hash: '#pricing' },
        { label: 'FAQ', hash: '#faq' }
      ]
    }
  }
}
</script>

<style>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-bg);
  border-bottom: 1px solid var(--color-line);
}

.site-nav {
  position: relative;
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

.site-nav-menu {
  display: flex;
  align-items: center;
  gap: 32px;
}

.site-nav-links {
  display: flex;
  gap: 28px;
  font-size: 15px;
  font-weight: 500;
}

.site-nav-links a {
  color: var(--color-ink);
}

.site-nav-links a:hover {
  color: var(--color-primary);
}

.site-nav-cta {
  min-height: 44px;
  font-size: 15px;
}

.site-nav-toggle {
  display: none;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: var(--color-ink);
}

@media (max-width: 960px) {
  .site-nav-toggle {
    display: flex;
  }

  .site-nav-menu {
    display: none;
    position: absolute;
    top: var(--header-height);
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
    padding: 16px 24px 24px;
    background-color: var(--color-bg);
    border-bottom: 1px solid var(--color-line);
    box-shadow: 0 12px 24px rgba(19, 32, 27, 0.08);
  }

  .site-nav-menu.open {
    display: flex;
  }

  .site-nav-links {
    flex-direction: column;
    gap: 0;
  }

  .site-nav-links a {
    display: block;
    padding: 12px 0;
    font-size: 17px;
  }
}
</style>
