<template>
  <div class="contact">
    <h1>{{ $t('contact.title') }}</h1>

    <form v-if="!sent" class="contact-form" @submit.prevent="send_message()">
      <label>
        {{ $t('contact.name') }}
        <input v-model="form.name" type="text" required />
      </label>

      <label>
        {{ $t('contact.email') }}
        <input v-model="form.email" type="email" required />
      </label>

      <label>
        {{ $t('contact.message') }}
        <textarea v-model="form.message" rows="5" required></textarea>
      </label>

      <p v-if="error" class="contact-error">{{ $t('contact.error') }}</p>

      <button type="submit" class="btn btn-primary" :disabled="sending">
        {{ sending ? $t('contact.sending') : $t('contact.send') }}
      </button>
    </form>

    <p v-else>{{ $t('contact.sent') }}</p>
  </div>
</template>

<script>
import api from '@/services/api'

export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      sending: false,
      sent: false,
      error: false
    }
  },
  methods: {
    async send_message() {
      this.sending = true
      this.error = false
      try {
        await api.post('/contact', this.form)
        this.sent = true
      } catch (err) {
        this.error = true
      } finally {
        this.sending = false
      }
    }
  }
}
</script>

<style>
.contact {
  max-width: 600px;
  margin: 0 auto;
  padding: 64px 24px 96px;
}

.contact h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-weight: 600;
  color: var(--color-ink);
}

.contact-form input,
.contact-form textarea {
  padding: 0.6rem;
  border: 1.5px solid var(--color-line);
  border-radius: 10px;
  background-color: var(--color-surface);
  font: inherit;
}

.contact-form button {
  align-self: flex-start;
}

.contact-error {
  color: #c0392b;
}
</style>
