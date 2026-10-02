<template>
  <section id="how" class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">{{ $t('how.eyebrow') }}</span>
        <h2 class="section-title">{{ $t('how.title') }}</h2>
        <p>{{ $t('how.lead') }}</p>
      </div>

      <ol class="steps">
        <li
          v-for="(step, index) in steps"
          :key="step.title"
          class="step"
          :class="{ 'step-final': index === steps.length - 1 }"
        >
          <span class="step-number">0{{ index + 1 }}</span>
          <BaseIcon :name="step.icon" :size="40" :stroke-width="1.6" />
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'

export default {
  name: 'HowItWorks',
  components: {
    BaseIcon
  },
  data() {
    return {
      icons: ['qr', 'chat', 'triage', 'calendar']
    }
  },
  computed: {
    steps() {
      return this.$t('how.steps').map((step, index) => ({ ...step, icon: this.icons[index] }))
    }
  }
}
</script>

<style>
.steps {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.step {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 28px;
  border-radius: var(--radius-card);
  background-color: var(--color-surface);
  border: 1px solid var(--color-line);
}

.step h3 {
  font-size: 22px;
}

.step p {
  font-size: 15px;
  color: var(--color-muted);
}

.step-number {
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 700;
  color: var(--color-primary);
}

.step-final {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
}

.step-final h3 {
  color: #fff;
}

.step-final p {
  color: #e4efe9;
}

.step-final .step-number,
.step-final svg {
  color: var(--color-highlight);
}
</style>
