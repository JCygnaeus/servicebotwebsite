<template>
  <footer class="site-footer">
    <div class="container site-footer-grid">
      <div class="site-footer-brand">
        <span class="site-footer-name">Servicebot</span>
        <span>AI service requests for real estate.</span>
      </div>
      <div v-for="column in columns" :key="column.title" class="site-footer-column">
        <span class="site-footer-heading">{{ column.title }}</span>
        <router-link v-for="link in column.links" :key="link.label" :to="link.to">
          {{ link.label }}
        </router-link>
      </div>
    </div>
    <div class="container site-footer-bottom">
      &copy; {{ year }} Servicebot. WhatsApp is a trademark of its respective owner.
    </div>
  </footer>
</template>

<script>

export default {
  name: 'SiteFooter',
  data() {
    return {
      year: new Date().getFullYear(),
      columns: [
        {
          title: 'Product',
          links: [
            { label: 'How it works', to: { path: '/', hash: '#how' } },
            { label: 'Pricing', to: { path: '/', hash: '#pricing' } },
            { label: 'FAQ', to: { path: '/', hash: '#faq' } }
          ]
        },
        {
          title: 'Company',
          links: [
            { label: 'About', to: '/about' },
            { label: 'Contact', to: '/contact' }
          ]
        }
      ]
    }
  }
}
</script>

<style>
.site-footer {
  background-color: var(--color-ink);
  color: #cfd8d3;
  font-size: 15px;
}

.site-footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 32px;
  padding-top: 56px;
  padding-bottom: 56px;
}

.site-footer-brand,
.site-footer-column {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.site-footer-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 20px;
  color: #fff;
}

.site-footer-heading {
  color: #fff;
  font-weight: 700;
}

.site-footer a {
  color: #cfd8d3;
}

.site-footer a:hover {
  color: #fff;
}

.site-footer-bottom {
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #2e3c36;
  font-size: 13px;
}
</style>
