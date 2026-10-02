<template>
  <div class="privacy">
    <h1>{{ $t('privacy.title') }}</h1>

    <!-- TODO: replace with the real privacy policy before launch -->
    <p>{{ $t('privacy.text') }}</p>

    <p>
      {{ $t('privacy.question') }}
      <router-link to="/contact">{{ $t('privacy.contactLink') }}</router-link>.
    </p>

  </div>
</template>

<script>

export default {
  name: 'PrivacyView',
  data() {
    return {

    }
  },

}
</script>

<style>
.privacy {
  max-width: 600px;
  margin: 0 auto;
  padding: 64px 24px 96px;
}

.privacy h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.privacy p {
  margin-bottom: 1rem;
}

.privacy a {
  text-decoration: underline;
}

</style>
