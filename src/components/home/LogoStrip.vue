<template>
  <section class="logo-strip" aria-label="Customers">
    <div class="container logo-strip-inner">
      <span class="logo-strip-label">Trusted by property owners managing [X] homes</span>
      <ul class="logo-strip-list">
        <li v-for="n in 5" :key="n" class="logo-strip-placeholder">[Logo]</li>
      </ul>
    </div>
  </section>
</template>

<script>

export default {
  name: 'LogoStrip'
}
</script>

<style>
.logo-strip {
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-line);
  border-bottom: 1px solid var(--color-line);
}

.logo-strip-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-top: 28px;
  padding-bottom: 28px;
}

.logo-strip-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-muted);
}

.logo-strip-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.logo-strip-placeholder {
  width: 120px;
  height: 40px;
  border-radius: 8px;
  border: 1.5px dashed #bdb8ac;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: var(--color-subtle);
}
</style>
