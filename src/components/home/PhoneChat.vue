<template>
  <div class="phone" role="img" aria-label="Example WhatsApp conversation between a tenant and the AI assistant">
    <div class="phone-screen">
      <div class="phone-chat-header">
        <span class="phone-avatar">AI</span>
        <div class="phone-chat-title">
          <span class="phone-chat-name">Elm Properties Service</span>
          <span class="phone-chat-status">AI assistant · replies instantly</span>
        </div>
      </div>

      <div class="phone-messages">
        <template v-for="(message, index) in messages" :key="index">
          <div v-if="message.photo" class="phone-bubble phone-bubble-out phone-photo">Photo</div>
          <div v-else class="phone-bubble" :class="message.from === 'tenant' ? 'phone-bubble-out' : 'phone-bubble-in'">
            {{ message.text }}
          </div>
        </template>
      </div>

      <div class="phone-composer">
        <span class="phone-input">Message</span>
        <span class="phone-send"></span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PhoneChat',
  data() {
    return {
      messages: [
        { from: 'tenant', text: 'Hi! Report from QR: Laundry room, Elm Court 12' },
        { from: 'bot', text: "Thanks! I can see you're in the laundry room at Elm Court 12. What's the problem?" },
        { from: 'tenant', text: 'Washing machine 2 is leaking water on the floor' },
        { from: 'bot', text: 'Sorry about that. Could you send a photo? And is the water still running?' },
        { from: 'tenant', photo: true },
        { from: 'bot', text: "Case #1042 created — priority High. Maintenance has been notified. I'll message you when it's booked." }
      ]
    }
  }
}
</script>

<style>
.phone {
  width: 300px;
  height: 600px;
  border-radius: 44px;
  background-color: var(--color-ink);
  padding: 12px;
  box-shadow: 0 24px 50px rgba(19, 32, 27, 0.18);
  flex-shrink: 0;
}

.phone-screen {
  width: 100%;
  height: 100%;
  border-radius: 34px;
  overflow: hidden;
  background-color: #ece7dd;
  display: flex;
  flex-direction: column;
}

.phone-chat-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 22px 16px 12px;
  background-color: var(--color-primary);
  color: #fff;
}

.phone-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: var(--color-highlight);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
}

.phone-chat-title {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.phone-chat-name {
  font-weight: 700;
  font-size: 14px;
}

.phone-chat-status {
  font-size: 11px;
  color: var(--color-on-primary-muted);
}

.phone-messages {
  flex: 1;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 12.5px;
  line-height: 1.4;
}

.phone-bubble {
  max-width: 85%;
  padding: 8px 10px;
}

.phone-bubble-out {
  align-self: flex-end;
  background-color: #dcf5c8;
  border-radius: 10px 10px 2px 10px;
}

.phone-bubble-in {
  align-self: flex-start;
  background-color: #fff;
  border-radius: 10px 10px 10px 2px;
}

.phone-photo {
  width: 130px;
  height: 84px;
  background-color: #c9c3b6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: var(--color-muted);
}

.phone-composer {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
}

.phone-input {
  flex: 1;
  background-color: #fff;
  border-radius: 999px;
  padding: 9px 14px;
  font-size: 12px;
  color: var(--color-subtle);
}

.phone-send {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--color-primary);
}
</style>
