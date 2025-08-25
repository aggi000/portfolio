<template>
  <div class="home">
    <section class="hero fade-in">
      <h1>Hi, I’m Agrim — I build reliable ML systems and software</h1>
      <p>
        I’ve worked on graph-based pattern detection for 10k+ engineering drawings (PCL)
        and end-to-end QA tooling & dashboards (Dotdash Meredith).
      </p>

      <!-- Buttons that jump to sections on THIS page -->
      <div class="cta">
        <nuxt-link to="#about" class="btn">About</nuxt-link>
        <nuxt-link to="#projects" class="btn">Projects</nuxt-link>
        <a href="/resume.pdf" class="btn outline" target="_blank" rel="noopener">Resume</a>
      </div>
    </section>

    <!-- Full scrollable sections -->
    <AboutSection />
    <ProjectsSection />
  </div>
</template>

<script setup>
import AboutSection from '~/components/AboutSection.vue'
import ProjectsSection from '~/components/ProjectsSection.vue'
</script>
