<template>
  <section id="pricing" class="section section-band">
    <div class="container">
      <div class="section-head centered">
        <span class="eyebrow">Pricing</span>
        <h2 class="section-title">Priced per home, not per report</h2>
      </div>

      <div class="pricing-grid">
        <div
          v-for="plan in plans"
          :key="plan.name"
          class="pricing-card"
          :class="{ 'pricing-card-featured': plan.featured }"
        >
          <div class="pricing-card-head">
            <h3>{{ plan.name }}</h3>
            <span v-if="plan.featured" class="pricing-badge">Most popular</span>
          </div>
          <div>
            <span class="pricing-price">{{ plan.price }}</span>
            <span v-if="plan.perHome" class="pricing-unit"> / home / month</span>
          </div>
          <p class="pricing-description">{{ plan.description }}</p>
          <ul class="pricing-list">
            <li v-for="item in plan.items" :key="item">
              <BaseIcon name="check" :size="18" :stroke-width="2.2" />
              {{ item }}
            </li>
          </ul>
          <router-link
            :to="plan.to"
            class="btn pricing-cta"
            :class="plan.featured ? 'btn-primary' : 'btn-outline'"
          >
            {{ plan.cta }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'

export default {
  name: 'PricingSection',
  components: {
    BaseIcon
  },
  data() {
    return {
      plans: [
        {
          name: 'Starter',
          price: '[PRICE]',
          perHome: true,
          description: 'For smaller landlords up to [X] homes.',
          items: ['QR codes per building', 'AI WhatsApp assistant', 'Case inbox and email alerts'],
          cta: 'Get started',
          to: { path: '/', hash: '#demo' }
        },
        {
          name: 'Professional',
          price: '[PRICE]',
          perHome: true,
          featured: true,
          description: 'For property managers with several portfolios.',
          items: ['Everything in Starter', 'QR codes per unit and room', 'Contractor routing rules', 'Insights and reports'],
          cta: 'Book a demo',
          to: { path: '/', hash: '#demo' }
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          description: 'For large real estate companies.',
          items: ['Everything in Professional', 'Property system integration', 'SSO and custom data retention', 'Dedicated onboarding'],
          cta: 'Contact sales',
          to: '/contact'
        }
      ]
    }
  }
}
</script>

<style>
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.pricing-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  border-radius: var(--radius-card);
  border: 1px solid var(--color-line);
}

.pricing-card-featured {
  border: 2px solid var(--color-primary);
  background-color: var(--color-bg);
}

.pricing-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.pricing-card-head h3 {
  font-size: 22px;
}

.pricing-badge {
  padding: 4px 10px;
  border-radius: 999px;
  background-color: var(--color-highlight);
  font-size: 12px;
  font-weight: 700;
}

.pricing-price {
  font-family: var(--font-display);
  font-size: 40px;
  font-weight: 700;
}

.pricing-unit,
.pricing-description {
  color: var(--color-muted);
}

.pricing-unit {
  white-space: nowrap;
}

.pricing-description {
  font-size: 15px;
}

.pricing-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 15px;
}

.pricing-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.pricing-list svg {
  flex-shrink: 0;
  margin-top: 3px;
  color: var(--color-primary);
}

.pricing-cta {
  margin-top: auto;
}

@media (max-width: 480px) {
  .pricing-grid {
    grid-template-columns: 1fr;
  }
}
</style>
