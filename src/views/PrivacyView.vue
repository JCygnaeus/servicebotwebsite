<template>
  <div class="privacy">
    <h1>Privacy policy</h1>

    <!-- TODO: replace with the real privacy policy before launch -->
    <p>
      When you request a demo we collect your name, work email, company and the number of homes you
      manage. We use these details only to schedule and follow up on your demo.
    </p>

    <p>
      To ask about, correct or delete your data, contact us via the
      <router-link to="/contact">contact page</router-link>.
    </p>

  </div>
</template>

<script>

export default {
  name: 'PrivacyView',
  data() {
    return {

    }
  },

}
</script>

<style>
.privacy {
  max-width: 600px;
  margin: 0 auto;
  padding: 64px 24px 96px;
}

.privacy h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.privacy p {
  margin-bottom: 1rem;
}

.privacy a {
  text-decoration: underline;
}

</style>
