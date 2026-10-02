<template>
  <section class="section section-band">
    <div class="container audience-grid">
      <div
        v-for="audience in audiences"
        :id="audience.id"
        :key="audience.id"
        class="audience-card"
        :class="{ 'audience-card-highlight': audience.highlight }"
      >
        <span class="eyebrow">{{ audience.eyebrow }}</span>
        <h2>{{ audience.title }}</h2>
        <ul class="audience-list">
          <li v-for="point in audience.points" :key="point">
            <BaseIcon name="check" :size="22" :stroke-width="2.2" />
            {{ point }}
          </li>
        </ul>
        <router-link
          v-if="audience.cta"
          :to="{ path: '/', hash: '#demo' }"
          class="btn btn-primary audience-cta"
        >
          {{ audience.cta }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'

export default {
  name: 'AudienceSection',
  components: {
    BaseIcon
  },
  data() {
    return {
      audiences: [
        {
          id: 'managers',
          eyebrow: 'For property managers',
          title: 'Complete cases, not phone tag',
          cta: 'Book a demo',
          points: [
            'Every report arrives with location, photos and a summary',
            'Fewer calls and emails to the service desk',
            'Duplicate reports merged automatically',
            'Insights per property: recurring issues, response times'
          ]
        },
        {
          id: 'tenants',
          eyebrow: 'For tenants',
          title: 'Report it in 30 seconds. Know what happens next.',
          highlight: true,
          points: [
            'No app, no login — just WhatsApp',
            'Write in your own language, any time of day',
            'Status updates in the same conversation',
            'Ask simple questions too: laundry booking, waste days, opening hours'
          ]
        }
      ]
    }
  }
}
</script>

<style>
.audience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
}

.audience-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  border-radius: 24px;
  background-color: var(--color-bg);
  scroll-margin-top: calc(var(--header-height) + 16px);
}

.audience-card-highlight {
  background-color: var(--color-highlight);
}

.audience-card h2 {
  font-size: clamp(1.75rem, 3vw, 2.125rem);
}

.audience-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 16px;
}

.audience-list li {
  display: flex;
  gap: 12px;
}

.audience-list svg {
  flex-shrink: 0;
  color: var(--color-primary);
}

.audience-cta {
  align-self: flex-start;
}

@media (max-width: 480px) {
  .audience-grid {
    grid-template-columns: 1fr;
  }

  .audience-card {
    padding: 28px 24px;
  }
}
</style>
