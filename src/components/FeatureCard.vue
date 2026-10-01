<template>
  <div class="feature-card">
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
  </div>
</template>

<script>

export default {
  name: 'FeatureCard',
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.feature-card {
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 1.5rem;
}

.feature-card h3 {
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: #555;
}
</style>
