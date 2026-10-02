<template>
  <header class="site-header">
    <div class="container site-nav">
      <router-link to="/" class="site-brand">
        <span class="site-brand-mark">
          <BaseIcon name="home" :size="20" :stroke-width="2" />
        </span>
        <span class="site-brand-name">Servicebot</span>
      </router-link>
    </div>
  </header>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'

export default {
  name: 'SiteHeader',
  components: {
    BaseIcon
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
</style>
