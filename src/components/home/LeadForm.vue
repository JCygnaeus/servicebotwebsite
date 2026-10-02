<template>
  <div class="lead-form-wrap">
    <form v-if="!sent" class="lead-form" @submit.prevent="request_demo()">
      <div class="lead-form-row">
        <label :for="id + '-name'">
          {{ $t('leadForm.name') }}
          <input :id="id + '-name'" v-model="form.name" type="text" autocomplete="name" required />
        </label>
        <label :for="id + '-email'">
          {{ $t('leadForm.email') }}
          <input :id="id + '-email'" v-model="form.email" type="email" autocomplete="email" required />
        </label>
      </div>

      <div class="lead-form-row lead-form-row-compact">
        <label :for="id + '-company'">
          {{ $t('leadForm.company') }}
          <input :id="id + '-company'" v-model="form.company" type="text" autocomplete="organization" required />
        </label>
        <label :for="id + '-homes'">
          {{ $t('leadForm.homes') }}
          <select :id="id + '-homes'" v-model="form.homes" required>
            <option value="" disabled>{{ $t('leadForm.choose') }}</option>
            <!-- Values stay in English so submitted data is the same in every language -->
            <option v-for="(option, index) in homeOptions" :key="option" :value="option">
              {{ $t('leadForm.homeOptions')[index] }}
            </option>
          </select>
        </label>
      </div>

      <button type="submit" class="btn btn-primary lead-form-submit" :disabled="sending">
        {{ sending ? $t('leadForm.sending') : $t('leadForm.submit') }}
      </button>

      <p v-if="error" class="lead-form-error">{{ $t('leadForm.error') }}</p>

      <p class="lead-form-consent">
        {{ $t('leadForm.consent') }}
        <router-link to="/privacy">{{ $t('leadForm.privacyLink') }}</router-link>.
      </p>
    </form>

    <p v-else class="lead-form-sent">{{ $t('leadForm.sent') }}</p>
  </div>
</template>

<script>
import api from '@/services/api'

export default {
  name: 'LeadForm',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        company: '',
        homes: ''
      },
      homeOptions: ['Under 100', '100–1,000', '1,000–5,000', 'Over 5,000'],
      sending: false,
      sent: false,
      error: false
    }
  },
  methods: {
    async request_demo() {
      this.sending = true
      this.error = false
      try {
        await api.post('/demo-requests', this.form)
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
.lead-form-wrap {
  width: 100%;
  max-width: 560px;
}

.lead-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.lead-form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.lead-form label {
  flex: 1 1 220px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  font-weight: 700;
}

.lead-form input,
.lead-form select {
  min-height: 50px;
  padding: 0 16px;
  border-radius: 12px;
  border: 1.5px solid var(--color-ink);
  background-color: #fff;
  color: var(--color-ink);
  font: inherit;
  font-weight: 400;
}

.lead-form-submit {
  min-height: 56px;
  font-size: 17px;
}

.lead-form-error {
  color: #8a1c1c;
  font-weight: 500;
}

.lead-form-consent {
  font-size: 13px;
  color: var(--color-subtle);
}

.lead-form-consent a {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .lead-form,
  .lead-form-row {
    gap: 10px;
  }

  .lead-form input,
  .lead-form select {
    min-height: 46px;
  }

  .lead-form-row-compact label {
    flex-basis: 140px;
    min-width: 0;
  }
}

.lead-form-sent {
  font-size: 18px;
  font-weight: 700;
}
</style>
