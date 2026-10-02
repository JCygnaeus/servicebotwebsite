<template>
  <section class="section">
    <div class="container results-grid">
      <div v-for="result in results" :key="result.label" class="result">
        <span class="result-value">{{ result.value }}</span>
        <span class="result-label">{{ result.label }}</span>
      </div>

      <figure class="testimonial">
        <blockquote>
          “[Customer quote about how Servicebot changed their tenant communication.]”
        </blockquote>
        <figcaption>
          <span class="testimonial-avatar"></span>
          <span class="testimonial-person">
            <b>[Name]</b>
            <span>[Title], [Real estate company]</span>
          </span>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script>

export default {
  name: 'ResultsSection',
  data() {
    return {
      results: [
        { value: '[XX%]', label: 'fewer calls to the service desk' },
        { value: '[X min]', label: 'average time to a complete work order' },
        { value: '[XX]', label: 'languages understood out of the box' }
      ]
    }
  }
}
</script>

<style>
.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 32px;
}

.result {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 20px;
  border-top: 2px solid var(--color-ink);
}

.result-value {
  font-family: var(--font-display);
  font-size: 52px;
  font-weight: 700;
  line-height: 1;
}

.result-label {
  color: var(--color-muted);
}

.testimonial {
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
  padding: 36px;
  border-radius: var(--radius-card);
  background-color: var(--color-surface);
  border: 1px solid var(--color-line);
}

.testimonial blockquote {
  flex: 1 1 480px;
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 2.5vw, 1.625rem);
  line-height: 1.3;
}

.testimonial figcaption {
  display: flex;
  align-items: center;
  gap: 14px;
}

.testimonial-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: #e6e3da;
}

.testimonial-person {
  display: flex;
  flex-direction: column;
  font-size: 15px;
}

.testimonial-person span {
  color: var(--color-muted);
}
</style>
