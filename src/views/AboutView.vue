<template>
  <div class="about">
    <h1>{{ $t('about.title') }}</h1>

    <p>{{ $t('about.text') }}</p>

  </div>
</template>

<script>

export default {
  name: 'AboutView',
  data() {
    return {

    }
  },

}
</script>

<style>
.about {
  max-width: 600px;
  margin: 0 auto;
  padding: 64px 24px 96px;
}

.about h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

</style>
