<template>
  <section id="faq" class="section faq">
    <div class="container faq-inner">
      <h2 class="section-title faq-title">Questions</h2>
      <div class="faq-list">
        <details v-for="(item, index) in faqs" :key="item.question" class="faq-item" :open="index === 0">
          <summary>{{ item.question }}</summary>
          <p>{{ item.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'FaqSection',
  data() {
    return {
      faqs: [
        {
          question: 'Do tenants need to download anything?',
          answer: 'No. Scanning the QR code opens WhatsApp, which most tenants already use. [Fallback for tenants without WhatsApp: SMS / web chat.]'
        },
        {
          question: 'What happens with emergencies?',
          answer: '[Escalation flow: on-call number, instant alert to staff.]'
        },
        {
          question: 'How is tenant data handled?',
          answer: '[GDPR, data storage location, retention.]'
        },
        {
          question: 'Can our staff take over a conversation?',
          answer: 'Yes. Anyone on your team can step into a chat from the dashboard and reply to the tenant directly.'
        },
        {
          question: 'How long does it take to get started?',
          answer: '[Onboarding timeline.]'
        }
      ]
    }
  }
}
</script>

<style>
.faq-inner {
  max-width: 880px;
}

.faq-title {
  text-align: center;
  margin-bottom: 32px;
}

.faq-list {
  border-top: 1px solid var(--color-line);
}

.faq-item {
  border-bottom: 1px solid var(--color-line);
  padding: 20px 4px;
}

.faq-item summary {
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
}

.faq-item p {
  margin-top: 12px;
  color: var(--color-muted);
}
</style>
