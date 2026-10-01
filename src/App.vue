<template>
  <div id="layout">

    <nav class="navbar">
      <div class="navbar-brand">Servicebot</div>

      <button
        class="navbar-toggle"
        aria-label="Toggle navigation menu"
        @click="menuOpen = !menuOpen"
      >
        ☰
      </button>

      <ul class="navbar-links" :class="{ open: menuOpen }">
        <li><router-link to="/" @click="menuOpen = false">Home</router-link></li>
        <li><router-link to="/about" @click="menuOpen = false">About</router-link></li>
        <li><router-link to="/contact" @click="menuOpen = false">Contact</router-link></li>
      </ul>
    </nav>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="footer">
      <p>&copy; {{ year }} Servicebot. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      menuOpen: false,
      year: new Date().getFullYear()
    }
  }
}
</script>

<style>

html,
body,
#app {
  height: 100%;
  margin: 0;
}

#layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 60px;
  background-color: #2c3e50;
  color: #fff;
}

.navbar-brand {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.navbar-toggle {
  display: none;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  line-height: 1;
  padding: 0.25rem 0.5rem;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.navbar-links a {
  color: #ecf0f1;
  text-decoration: none;
  font-size: 0.95rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.navbar-links a:hover,
.navbar-links a.router-link-active {
  background-color: rgba(255, 255, 255, 0.15);
}

@media (max-width: 768px) {
  .navbar {
    padding: 0 1rem;
  }

  .navbar-toggle {
    display: block;
  }

  .navbar-links {
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background-color: #2c3e50;
    padding: 0.5rem 0;
    z-index: 1000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .navbar-links.open {
    display: flex;
  }

  .navbar-links li {
    width: 100%;
  }

  .navbar-links a {
    display: block;
    padding: 0.75rem 1.5rem;
    border-radius: 0;
  }
}

.main-content {
  flex: 1;
  padding: 1rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

.footer {
  width: 100%;
  text-align: center;
  padding: 1rem;
  background-color: #f1f1f1;
  color: #666;
  font-size: 0.85rem;
}
</style>
