<template>
  <header class="site-header">
    <div class="container">
      <h1 class="title">Agrim Sood</h1>
      <p class="tagline">Machine Learning Researcher & Software Developer</p>

      <nav class="nav">
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/#about">About</nuxt-link></li>
          <li><nuxt-link to="/#projects">Projects</nuxt-link></li>
          <li><a href="/resume.pdf" target="_blank" rel="noopener">Resume</a></li>
        </ul>
      </nav>

      <div class="contact">
        <a href="mailto:agrim@ualberta.ca">agrim@ualberta.ca</a>
        <span class="sep">•</span>
        <a href="tel:+17806559950">+1 (780) 655-9950</a>
        <span class="sep">•</span>
        <a href="https://linkedin.com/in/agrim-sood" target="_blank" rel="noopener">LinkedIn</a>
        <span class="sep">•</span>
        <a href="https://github.com/aggi000" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  </header>
</template>

<script>
export default { name: 'Header' }
</script>

<style scoped>
.site-header {
  background: #f8f9fa;
  border-bottom: 1px solid #e5e7eb;
}
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 18px 16px;
}
.title {
  margin: 0;
  font-size: 28px;
  font-weight: 700;
}
.tagline {
  margin: 6px 0 14px;
  color: #444;
}
.nav ul {
  list-style: none;
  padding: 0;
  margin: 0 0 8px;
  display: flex;
  gap: 16px;
}
.nav a {
  text-decoration: none;
  color: #333;
}
.nav a:hover { text-decoration: underline; }
.contact {
  font-size: 14px;
  color: #555;
}
.sep { margin: 0 8px; color: #aaa; }

.section { scroll-margin-top: 80px; } /* match router top offset */
.site-header { position: sticky; top: 0; z-index: 50; }
html { scroll-behavior: smooth; } /* extra smoothness */
</style>
