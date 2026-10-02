<template>
  <div class="home">
    <HeroSection />
    <HowItWorks />
    <DemoCta />
  </div>
</template>

<script>
import HeroSection from '@/components/home/HeroSection.vue'
import HowItWorks from '@/components/home/HowItWorks.vue'
import DemoCta from '@/components/home/DemoCta.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    HowItWorks,
    DemoCta
  }
}
</script>
