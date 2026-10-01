<template>
  <div class="home">
    <section class="hero">
      <h1>Your customer service, on autopilot</h1>
      <p>
        Servicebot answers customer questions around the clock so your team can focus on what matters.
      </p>

      <div class="hero-buttons">
        <button @click="to_contact()" class="primary-btn">Get started</button>
        <button @click="to_about()" class="secondary-btn">Learn more</button>
      </div>
    </section>

    <section class="features">
      <FeatureCard
        v-for="feature in features"
        :key="feature.title"
        :title="feature.title"
        :text="feature.text"
      />
    </section>
  </div>
</template>

<script>
import FeatureCard from '@/components/FeatureCard.vue'

export default {
  name: 'HomeView',
  components: {
    FeatureCard
  },
  data() {
    return {
      features: [
        { title: 'Always available', text: 'Answers questions 24/7 without waiting times.' },
        { title: 'Learns your business', text: 'Trained on your own documents, FAQs and policies.' },
        { title: 'Hands over to humans', text: 'Escalates to your team when a question needs a person.' }
      ]
    }
  },
  methods: {
    to_contact() {
      this.$router.push('/contact')
    },
    to_about() {
      this.$router.push('/about')
    }
  }
}
</script>

<style>
.hero {
  text-align: center;
  padding: 4rem 1rem 3rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  max-width: 600px;
  margin: 0 auto 2rem;
  font-size: 1.1rem;
  color: #555;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.primary-btn,
.secondary-btn {
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  border: 2px solid #42b883;
}

.primary-btn {
  background-color: #42b883;
  color: #fff;
}

.primary-btn:hover {
  background-color: #369f71;
}

.secondary-btn {
  background-color: transparent;
  color: #42b883;
}

.secondary-btn:hover {
  background-color: rgba(66, 184, 131, 0.1);
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0 3rem;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 1.8rem;
  }
}
</style>
