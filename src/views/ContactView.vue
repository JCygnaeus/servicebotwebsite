<template>
  <div class="contact">
    <h1>Contact</h1>

    <form v-if="!sent" class="contact-form" @submit.prevent="send_message()">
      <label>
        Name
        <input v-model="form.name" type="text" required />
      </label>

      <label>
        Email
        <input v-model="form.email" type="email" required />
      </label>

      <label>
        Message
        <textarea v-model="form.message" rows="5" required></textarea>
      </label>

      <p v-if="error" class="contact-error">{{ error }}</p>

      <button type="submit" class="btn btn-primary" :disabled="sending">
        {{ sending ? 'Sending...' : 'Send' }}
      </button>
    </form>

    <p v-else>Thanks! We will get back to you soon.</p>
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
      error: ''
    }
  },
  methods: {
    async send_message() {
      this.sending = true
      this.error = ''
      try {
        await api.post('/contact', this.form)
        this.sent = true
      } catch (err) {
        this.error = 'Could not send the message. Please try again.'
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
