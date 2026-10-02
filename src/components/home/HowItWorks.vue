<template>
  <section id="how" class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">How it works</span>
        <h2 class="section-title">From broken to booked in four steps</h2>
        <p>The code knows where the tenant is. So the AI only asks what it needs.</p>
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
      steps: [
        {
          icon: 'qr',
          title: 'Scan the QR code',
          text: 'Each code is tied to a building, unit or shared space — stairwell, garage, laundry room.'
        },
        {
          icon: 'chat',
          title: 'Chat on WhatsApp',
          text: 'WhatsApp opens and knows the spot. The AI asks a few questions and asks for photos.'
        },
        {
          icon: 'triage',
          title: 'AI sorts the report',
          text: 'The AI picks the kind of problem and how urgent it is. It writes a short note. Big problems get sent on right away.'
        },
        {
          icon: 'calendar',
          title: 'Routed and resolved',
          text: 'The work order lands with the right caretaker or contractor. The tenant gets status updates in the same chat.'
        }
      ]
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
