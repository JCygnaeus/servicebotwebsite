<template>
  <section id="top" class="hero container">
    <div class="hero-copy">
      <span class="hero-badge">For property managers and landlords</span>
      <h1 class="hero-title">Every tenant report arrives complete — no phone tag</h1>
      <p class="hero-lead">
        Tenants scan a QR code and report on WhatsApp in 30 seconds. Your team gets the photos,
        location and priority automatically.
      </p>
      <p class="hero-offer">
        In 20 minutes you'll see a real case go from QR scan to booked repair, and get a QR rollout
        plan for your buildings.
      </p>

      <LeadForm id="hero-demo" />

      <ul class="hero-points">
        <li v-for="point in points" :key="point.title">
          <BaseIcon name="check" :size="20" :stroke-width="2.2" />
          <span><b>{{ point.title }}</b> {{ point.text }}</span>
        </li>
      </ul>
    </div>

    <div class="hero-visual">
      <QrSticker class="hero-sticker" />
      <PhoneChat />
    </div>
  </section>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'
import LeadForm from '@/components/home/LeadForm.vue'
import QrSticker from '@/components/home/QrSticker.vue'
import PhoneChat from '@/components/home/PhoneChat.vue'

export default {
  name: 'HeroSection',
  components: {
    BaseIcon,
    LeadForm,
    QrSticker,
    PhoneChat
  },
  data() {
    return {
      points: [
        { title: 'Tenants will actually use it:', text: 'no app, no login, just the WhatsApp they already have.' },
        { title: 'No extra work for your team:', text: 'cases sync with your property system or email.' },
        { title: 'Emergencies are never missed:', text: 'water leaks, lockouts and no heating escalate to your staff instantly.' }
      ]
    }
  }
}
</script>

<style>
.hero.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 56px;
  padding-top: 56px;
  padding-bottom: 64px;
}

.hero-copy {
  flex: 1 1 460px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.hero-badge {
  align-self: flex-start;
  padding: 6px 12px;
  border-radius: 999px;
  background-color: var(--color-highlight);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.hero-title {
  font-size: clamp(2rem, 4.8vw, 3.4rem);
  line-height: 1.04;
  letter-spacing: -0.02em;
}

.hero-lead {
  font-size: 20px;
  color: var(--color-muted);
  max-width: 540px;
}

.hero-offer {
  max-width: 540px;
  font-size: 16px;
  font-weight: 500;
}

.hero-points {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 560px;
  font-size: 15px;
  color: var(--color-muted);
}

.hero-points li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.hero-points b {
  color: var(--color-ink);
}

.hero-points svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--color-primary);
}

.hero-visual {
  flex: 1 1 440px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 28px;
}

.hero-sticker {
  transform: rotate(-3deg);
}

@media (max-width: 768px) {
  .hero.container {
    padding-top: 24px;
    gap: 40px;
  }

  .hero-copy,
  .hero-visual {
    flex-basis: 100%;
  }

  .hero-copy {
    gap: 16px;
  }

  .hero-lead {
    font-size: 17px;
  }

  .hero-offer {
    font-size: 15px;
  }
}
</style>
