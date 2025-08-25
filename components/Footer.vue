<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ new Date().getFullYear() }} Agrim Sood</p>
      <div class="social">
        <a href="mailto:agrim@ualberta.ca">Email</a>
        <a href="https://linkedin.com/in/agrim-sood" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://github.com/aggi000" target="_blank" rel="noopener">GitHub</a>
        <a href="/resume.pdf" target="_blank" rel="noopener">Resume (PDF)</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default { name: 'Footer' }
</script>

<style scoped>
.footer {
  margin-top: 40px;
  padding: 24px 16px;
  background: #f8f9fa;
  border-top: 1px solid #e5e7eb;
}
.container {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
}
.social {
  margin-top: 8px;
  display: flex;
  justify-content: center;
  gap: 14px;
}
.social a {
  color: #0070f3;
  text-decoration: none;
}
.social a:hover { text-decoration: underline; }
</style>
