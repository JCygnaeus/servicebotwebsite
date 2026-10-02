<template>
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Features</span>
        <h2 class="section-title">Everything between the report and the repair</h2>
      </div>

      <div class="features-grid">
        <FeatureCard
          v-for="feature in features"
          :key="feature.title"
          :icon="feature.icon"
          :title="feature.title"
          :text="feature.text"
        />
      </div>
    </div>
  </section>
</template>

<script>
import FeatureCard from '@/components/FeatureCard.vue'

export default {
  name: 'FeaturesSection',
  components: {
    FeatureCard
  },
  data() {
    return {
      features: [
        { icon: 'pin', title: 'Location-aware QR codes', text: 'Generate and print codes per property, entrance, unit or room.' },
        { icon: 'photo', title: 'Photo and video capture', text: 'The AI asks for the right images so technicians arrive prepared.' },
        { icon: 'priority', title: 'Smart triage and priority', text: 'Categorises issues and flags urgent ones — water leaks, lockouts, no heating.' },
        { icon: 'route', title: 'Automatic routing', text: 'Rules send each case to the right caretaker, contractor or team.' },
        { icon: 'globe', title: 'Multilingual by default', text: 'Tenants write in their language; your team reads every case in yours.' },
        { icon: 'plug', title: 'Integrations', text: 'Sync cases with your property management system, email or your own API.' }
      ]
    }
  }
}
</script>

<style>
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1px;
  background-color: var(--color-line);
  border: 1px solid var(--color-line);
  border-radius: var(--radius-card);
  overflow: hidden;
}

@media (max-width: 480px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
