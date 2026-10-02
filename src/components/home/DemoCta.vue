<template>
  <section id="demo" class="container demo">
    <div class="demo-card">
      <div class="demo-copy">
        <h2 class="section-title">Put your first QR code up this week</h2>
        <p>
          In 20 minutes you'll see a real case go from QR scan to booked repair, and get a QR
          rollout plan for your buildings.
        </p>
      </div>

      <LeadForm id="bottom-demo" />
    </div>
  </section>
</template>

<script>
import LeadForm from '@/components/home/LeadForm.vue'

export default {
  name: 'DemoCta',
  components: {
    LeadForm
  }
}
</script>

<style>
.demo {
  margin-bottom: 96px;
}

.demo-card {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 64px 48px;
  border-radius: 28px;
  background-color: var(--color-highlight);
}

.demo-copy {
  flex: 1 1 380px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.demo-copy p {
  font-size: 18px;
  color: #2c3a34;
}

.demo-card .lead-form-wrap {
  flex: 1 1 380px;
}

.demo-card .lead-form-consent {
  color: #2c3a34;
}

@media (max-width: 768px) {
  .demo {
    margin-bottom: 64px;
  }

  .demo-card {
    padding: 40px 24px;
  }
}
</style>
