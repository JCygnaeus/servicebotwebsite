<template>
  <div id="layout">
    <SiteHeader />

    <main class="main-content">
      <router-view />
    </main>

    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style>

html,
body,
#app {
  margin: 0;
}

#layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  width: 100%;
}
</style>
