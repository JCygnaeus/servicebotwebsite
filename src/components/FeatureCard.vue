<template>
  <div class="feature-card">
    <BaseIcon v-if="icon" :name="icon" :size="28" />
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'

export default {
  name: 'FeatureCard',
  components: {
    BaseIcon
  },
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.feature-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 32px;
  background-color: var(--color-bg);
}

.feature-card svg {
  color: var(--color-primary);
}

.feature-card h3 {
  font-size: 20px;
}

.feature-card p {
  font-size: 15px;
  color: var(--color-muted);
}
</style>
