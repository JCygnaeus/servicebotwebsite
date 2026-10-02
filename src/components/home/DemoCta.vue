<template>
  <section id="demo" class="container demo">
    <div class="demo-card">
      <div class="demo-copy">
        <h2 class="section-title">Put your first QR code up this week</h2>
        <p>See the full flow — from scan to resolved case — in a 20-minute demo.</p>
      </div>

      <form v-if="!sent" class="demo-form" @submit.prevent="request_demo()">
        <label for="demo-email" class="visually-hidden">Work email</label>
        <input id="demo-email" v-model="email" type="email" placeholder="Work email" required />
        <button type="submit" class="btn btn-primary" :disabled="sending">
          {{ sending ? 'Sending...' : 'Book a demo' }}
        </button>
        <p v-if="error" class="demo-error">{{ error }}</p>
      </form>

      <p v-else class="demo-sent">Thanks! We'll be in touch to schedule your demo.</p>
    </div>
  </section>
</template>

<script>
import api from '@/services/api'

export default {
  name: 'DemoCta',
  data() {
    return {
      email: '',
      sending: false,
      sent: false,
      error: ''
    }
  },
  methods: {
    async request_demo() {
      this.sending = true
      this.error = ''
      try {
        await api.post('/demo-requests', { email: this.email })
        this.sent = true
      } catch (err) {
        this.error = 'Could not send the request. Please try again.'
      } finally {
        this.sending = false
      }
    }
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
  flex: 1 1 420px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.demo-copy p {
  font-size: 18px;
  color: #2c3a34;
}

.demo-form {
  flex: 1 1 380px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.demo-form input {
  flex: 1 1 220px;
  min-height: 52px;
  padding: 0 20px;
  border-radius: 999px;
  border: 1.5px solid var(--color-ink);
  background-color: #fff;
  font: inherit;
}

.demo-form .btn {
  min-height: 52px;
}

.demo-error {
  flex-basis: 100%;
  color: #8a1c1c;
  font-weight: 500;
}

.demo-sent {
  flex: 1 1 380px;
  font-size: 18px;
  font-weight: 700;
}

@media (max-width: 768px) {
  .demo {
    margin-bottom: 64px;
  }

  .demo-card {
    padding: 40px 24px;
  }

  .demo-copy,
  .demo-form {
    flex-basis: 100%;
  }
}
</style>
