<template>
  <div class="privacy">
    <h1>Privacy policy</h1>

    <!-- TODO: replace with the real privacy policy before launch -->
    <p>
      When you book a demo, we ask for your name, email, company and how many homes you run. We
      only use this to set up your demo.
    </p>

    <p>
      Want to see, fix or delete your data?
      <router-link to="/contact">Contact us</router-link>.
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
