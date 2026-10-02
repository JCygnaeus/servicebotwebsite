<template>
  <section id="top" class="hero container">
    <div class="hero-copy">
      <span class="hero-badge">AI service requests for real estate</span>
      <h1 class="hero-title">Tenants scan. AI handles the rest.</h1>
      <p class="hero-lead">
        Put a QR code in every stairwell, laundry room and apartment. Tenants scan it, land in
        WhatsApp, and an AI assistant collects the details, photos and location — then routes a
        complete work order to the right person.
      </p>
      <div class="hero-buttons">
        <router-link :to="{ path: '/', hash: '#demo' }" class="btn btn-primary">Book a demo</router-link>
        <router-link :to="{ path: '/', hash: '#how' }" class="btn btn-outline">See how it works</router-link>
      </div>
      <ul class="hero-points">
        <li v-for="point in points" :key="point">
          <BaseIcon name="check" :size="18" :stroke-width="2.2" />
          {{ point }}
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
import QrSticker from '@/components/home/QrSticker.vue'
import PhoneChat from '@/components/home/PhoneChat.vue'

export default {
  name: 'HeroSection',
  components: {
    BaseIcon,
    QrSticker,
    PhoneChat
  },
  data() {
    return {
      points: [
        'No app for tenants to install',
        'Answers 24/7, in any language',
        'Works with your property system'
      ]
    }
  }
}
</script>

<style>
.hero {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 56px;
  padding-top: 72px;
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
  font-size: clamp(2.5rem, 5.5vw, 3.75rem);
  line-height: 1.04;
  letter-spacing: -0.02em;
}

.hero-lead {
  font-size: 20px;
  color: var(--color-muted);
  max-width: 540px;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero-points {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
  font-size: 14px;
  color: var(--color-muted);
}

.hero-points li {
  display: flex;
  align-items: center;
  gap: 8px;
}

.hero-points svg {
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
  .hero {
    padding-top: 48px;
    gap: 40px;
  }

  .hero-copy,
  .hero-visual {
    flex-basis: 100%;
  }

  .hero-lead {
    font-size: 18px;
  }
}
</style>
