<template>
  <section class="sticky-hero" aria-label="Intro">
    <div class="inner">
      <!-- LEFT: headshot -->
      <figure class="headshot">
        <img
          src="/img/pic.jpeg"
          alt="Portrait of Agrim Sood"
          width="260"
          height="260"
          loading="eager"
          sizes="(min-width:1000px) 240px, 40vw"
        />
      </figure>

      <!-- RIGHT: headline + contacts -->
      <div class="copy">
        <h1 class="title">Hi, I’m Agrim — I build reliable ML systems and software</h1>
        <p class="tagline">
          I’ve worked on graph-based pattern detection for 10k+ engineering drawings (PCL)
          and end-to-end QA tooling & dashboards (Dotdash Meredith).
        </p>

        <div class="links">
          <a class="btn outline" href="/resume.pdf" target="_blank" rel="noopener">Resume</a>
          <a class="btn outline" href="mailto:agrim@ualberta.ca">Email</a>
          <a class="btn outline" href="https://www.linkedin.com/in/YOUR_HANDLE" target="_blank" rel="noopener">LinkedIn</a>
          <a class="btn outline" href="https://github.com/YOUR_HANDLE" target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// presentational only
</script>

<style scoped>
/* Pinned under the sticky header; remains visible while the page scrolls */
.sticky-hero {
  position: sticky;
  top: var(--header-h);
  z-index: 2;
  background: var(--fb-dark);
  border-bottom: 1px solid var(--fb-gray-2);
}

/* Layout */
.inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 18px 24px;
  display: grid;
  gap: 16px;
  align-items: center;
  grid-template-columns: 1fr;                /* mobile: stack */
}
@media (min-width: 1000px) {
  .inner { grid-template-columns: 260px minmax(0, 1fr); }  /* desktop: image left */
}

/* Headshot (left) */
.headshot { margin: 0; display: grid; place-items: center; }
.headshot img {
  width: 220px; height: 220px; object-fit: cover; border-radius: 999px;
  border: 1px solid var(--fb-gray-2);
  box-shadow: 0 12px 28px rgba(0,0,0,.35);
  background: linear-gradient(135deg, rgba(24,119,242,.15), rgba(66,183,42,.12));
}
@media (min-width: 1000px) {
  .headshot img { width: 240px; height: 240px; }
}

/* Copy (right) */
.copy { min-width: 0; } /* prevents shrink-to-fit */
.title {
  margin: 0 0 8px;
  font-size: clamp(28px, 4vw, 46px);
  line-height: 1.05;
  color: #e9ebef;
}
.tagline {
  margin: 0 0 12px;
  max-width: 70ch;
  color: rgba(228,230,235,.9);
}
.links { display: flex; flex-wrap: wrap; gap: 10px; }

/* Reduced motion safety */
@media (prefers-reduced-motion: reduce) {
  .sticky-hero { scroll-behavior: auto; }
}
</style>
