<template>
  <div class="home">
    <HeroSection />
    <LogoStrip />
    <HowItWorks />
    <AudienceSection />
    <FeaturesSection />
    <DashboardPreview />
    <ResultsSection />
    <PricingSection />
    <FaqSection />
    <DemoCta />
  </div>
</template>

<script>
import HeroSection from '@/components/home/HeroSection.vue'
import LogoStrip from '@/components/home/LogoStrip.vue'
import HowItWorks from '@/components/home/HowItWorks.vue'
import AudienceSection from '@/components/home/AudienceSection.vue'
import FeaturesSection from '@/components/home/FeaturesSection.vue'
import DashboardPreview from '@/components/home/DashboardPreview.vue'
import ResultsSection from '@/components/home/ResultsSection.vue'
import PricingSection from '@/components/home/PricingSection.vue'
import FaqSection from '@/components/home/FaqSection.vue'
import DemoCta from '@/components/home/DemoCta.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    LogoStrip,
    HowItWorks,
    AudienceSection,
    FeaturesSection,
    DashboardPreview,
    ResultsSection,
    PricingSection,
    FaqSection,
    DemoCta
  }
}
</script>
