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

            <figcaption class="contact">
                <a href="mailto:agrim@ualberta.ca" class="contact-item">
                <span aria-hidden="true">📧</span><span>agrim@ualberta.ca</span>
                </a>
                <a href="tel:+17806559950" class="contact-item">
                <span aria-hidden="true">📞</span><span>+1 (780) 655-9950</span>
                </a>
            </figcaption>
        </figure>

      <!-- RIGHT: headline + contacts -->
      <div class="copy">
        <h1 class="title">
          <span>Hi, I’m Agrim.</span>
          <span> I build reliable <span class="nowrap">ML systems</span> & <span class="nowrap">software</span>.</span>
        </h1>
        <p class="tagline">
            Reliable models, <span class="nowrap">useful tools</span>, and <span class="nowrap">code that lasts</span>.
        </p>

        <div class="links">
          <a class="btn outline" :href="resumeUrl" target="_blank" rel="noopener">Resume</a>
          <a class="btn outline" href="mailto:agrim@ualberta.ca">Email</a>
          <a class="btn outline" href="https://www.linkedin.com/in/agrim-sood" target="_blank" rel="noopener">LinkedIn</a>
          <a class="btn outline" href="https://github.com/aggi000" target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import resumeUrl from '../assets/resume.pdf?url'
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

.nowrap { white-space: nowrap; }
/* Headshot (left) */
.headshot { margin: 0; display: grid; justify-items: center; gap: 10px; }
.headshot img {
  width: 220px; height: 220px; object-fit: cover; border-radius: 999px;
  border: 1px solid var(--fb-gray-2);
  box-shadow: 0 12px 28px rgba(0,0,0,.35);
  background: linear-gradient(135deg, rgba(24,119,242,.15), rgba(66,183,42,.12));
}
@media (min-width: 1000px) { .headshot img { width: 240px; height: 240px; } }

/* Contact under photo */
.headshot .contact {
  display: grid;
  gap: 6px;
  text-align: center;
  font-size: 14px;
  color: var(--text-2, rgba(228,230,235,.85));   /* theme-aware fallback */
}
.headshot .contact .contact-item {
  display: inline-grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.14);
  text-decoration: none;
  color: var(--text-1, var(--fb-light));
  transition: border-color .15s ease, background .15s ease, transform .12s ease;
}
html[data-theme="light"] .headshot .contact .contact-item {
  background: rgba(0,0,0,0.04);
  border-color: rgba(17,17,17,0.16);
  color: #111;
}
.headshot .contact .contact-item:hover {
  border-color: var(--fb-blue);
  background: rgba(24,119,242,0.10);
  transform: translateY(-1px);
}
.headshot .contact .contact-item span[aria-hidden="true"] {
  opacity: .9;
}
</style>
