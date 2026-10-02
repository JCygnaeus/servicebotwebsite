<template>
  <footer class="site-footer">
    <div class="container site-footer-bottom">
      <span>&copy; {{ year }} {{ $t('footer.trademark') }}</span>
      <router-link to="/privacy">{{ $t('footer.privacy') }}</router-link>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'SiteFooter',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style>
.site-footer {
  background-color: var(--color-ink);
  color: #cfd8d3;
}

.site-footer a {
  color: #cfd8d3;
  text-decoration: underline;
}

.site-footer a:hover {
  color: #fff;
}

.site-footer-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 24px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 13px;
}
</style>
