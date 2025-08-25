<template>
  <section id="projects" class="projects section">
    <h1>Projects</h1>
    <ul>
      <li v-for="p in projects" :key="p.id" class="card">
        <h2>{{ p.title }}</h2>
        <p class="meta">{{ p.year }}</p>
        <p>{{ p.description }}</p>
        <p class="stack"><strong>Tech:</strong> {{ p.tech }}</p>
        <a v-if="p.link" :href="p.link" target="_blank" rel="noopener">View Project</a>
      </li>
    </ul>
  </section>
</template>

<script setup>
const projects = [
  { id: 1, title: "Social Distribution", year: "2024",
    description: "Distributed social-media app with privacy controls...",
    tech: "Vue.js, REST APIs, MongoDB", link: "" },
  { id: 2, title: "Musicwiz", year: "2023",
    description: "Hackathon prototype simulating music recommendation...",
    tech: "Python, Spotipy, scikit-learn", link: "" },
  { id: 3, title: "Meal Prep App", year: "2022",
    description: "Android app that auto-creates meal plans...",
    tech: "Java (Android), Firebase, Figma, JUnit", link: "" },
  { id: 4, title: "SQL Movie Service", year: "2022",
    description: "SQLite-backed service to track watch behaviour...",
    tech: "Python, SQLite", link: "" }
]
</script>
