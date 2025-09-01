<template>
  <div class="home">
    <div class="content-grid">
      <!-- LEFT: section switcher (≥1100px) -->
      <aside class="sidebar-left">
        <SectionNav />
      </aside>

      <!-- MAIN -->
      <main>
        <!-- Hero -->
        <section class="hero fade-in">
          <StickyHero />
        </section>

        <!-- About section component (make sure it has id="about", and inside it IDs for #experience and #certifications) -->
        <AboutSection />
        <ExperienceTimeline />
        <!-- Projects Section -->
        <section id="projects" class="projects section">
          <h2>Projects</h2>
          <TransitionGroup name="reflow" tag="div" class="grid">
            <ProjectFlipCard
              v-for="p in projects"
              :key="p.id"
              :project="p"
              :expanded="activeId === p.id"
              @toggle="onToggle"
            />
          </TransitionGroup>
        </section>
        <section id="certifications" class="certs section fade-in">
          <CertificationSection />
        </section>
      </main>

      <!-- RIGHT: skills sidebar (sticky, full-height) -->
      <aside id="skills" class="sidebar-right">
        <SkillsSidebar />
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import AboutSection from '~/components/AboutSection.vue'
import ProjectFlipCard from '~/components/ProjectFlipCard.vue'
import SkillsSidebar from '~/components/SkillsSidebar.vue'
import SectionNav from '~/components/SectionNav.vue'
import CertificationSection from '~/components/CertificationSection.vue'
import ExperienceTimeline from '~/components/ExperienceTimeline.vue'
import StickyHero from '~/components/StickyHero.vue'

const originalProjects = [
  {
    id: 1,
    title: 'Social Distribution',
    year: '2024',
    short: 'Distributed social-media app with privacy controls & cross-server interactions.',
    details:
      'Built a distributed social platform with friend graph sync, private feeds, and admin tooling. Emphasis on reliability and data consistency across nodes.',
    points: [
      'Federated node sync with conflict-safe upserts',
      'Private/public post visibility & access policies',
      'Real-time dashboards for moderation and system health'
    ],
    tech: 'Vue.js, REST APIs, MongoDB',
    tags: ['Vue', 'REST', 'MongoDB']
  },
  {
    id: 2,
    title: 'Musicwiz',
    year: '2023',
    short: 'Recommendation prototype using unsupervised learning and playlists.',
    details:
      'Prototyped playlist-based similarity and basic cold-start strategies. Visualized clusters and transitions for explainability.',
    points: [
      'Feature engineering from playlists & audio features',
      'k-means / cosine similarity comparisons',
      'Interactive charts for cluster exploration'
    ],
    tech: 'Python, Spotipy, scikit-learn',
    tags: ['Python', 'ML', 'Spotify']
  },
  {
    id: 3,
    title: 'Meal Prep App',
    year: '2022',
    short: 'Android app that plans meals and manages live ingredient inventory.',
    details:
      'Automatic weekly plans with grocery suggestions and pantry sync. Unit conversions & recipe scaling for cost/time optimization.',
    points: [
      'Realtime sync with Firebase',
      'Barcode/QR for quick pantry updates',
      'JUnit/UI tests for flows & edge cases'
    ],
    tech: 'Java (Android), Firebase, JUnit',
    tags: ['Android', 'Firebase', 'Testing']
  },
  {
    id: 4,
    title: 'SQL Movie Service',
    year: '2022',
    short: 'SQLite-backed service to track watch behavior & run rec queries.',
    details:
      'Lightweight service to log watch events and compute recommendations with analytic SQL and window functions.',
    points: [
      'Normalized schema with indices for query speed',
      'Materialized views for top-k recommendations',
      'CLI & minimal UI for exploration'
    ],
    tech: 'Python, SQLite',
    tags: ['SQLite', 'Python', 'Analytics']
  }
]

const projects = ref([...originalProjects])
const activeId = ref(null)

function moveToTop(id) {
  const idx = projects.value.findIndex(p => p.id === id)
  if (idx > 0) {
    const [item] = projects.value.splice(idx, 1)
    projects.value.unshift(item)
  }
}
function restoreOriginalOrder() { projects.value = [...originalProjects] }

function onToggle(id) {
  if (activeId.value === id) {
    activeId.value = null
    restoreOriginalOrder()
    return
  }
  activeId.value = id
  moveToTop(id)
  nextTick(() => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}
</script>

<style scoped>
/* ===== 3-column responsive grid ===== */
.content-grid {
  display: grid;
  gap: 24px;
}

/* >=900px: Main + Skills (2 columns) */
@media (min-width: 900px) {
  .content-grid {
    grid-template-columns: minmax(0, 3fr) minmax(220px, 1.2fr);
    align-items: start;
  }
}

/* >=1100px: Nav + Main + Skills (3 columns) */
@media (min-width: 1100px) {
  .content-grid {
    grid-template-columns: 220px minmax(0, 1fr) 240px; /* left nav / main / right skills */
  }
  .sidebar-left { display: block; }
}

/* Hide left nav on smaller screens */
.sidebar-left { display: none; }

/* Sidebars are sticky and full height (with their own internal scrollers) */
.sidebar-left,
.sidebar-right {
  position: sticky;
  top: 0px;                          /* header height */
  height: calc(100vh - 96px - 24px);  /* viewport minus header and a bit of spacing */
  min-width: 0;
}

/* Make the sidebar cards fill their column */
.sidebar-right :deep(.skills-card),
.sidebar-left  :deep(.toc) {
  width: 100%;
}

/* Let MAIN grow inside the grid */
.content-grid > main { min-width: 0; }

/* Remove any global width clamps on sections when sidebars exist */
:deep(.hero),
:deep(.projects.section),
:deep(.about.section) {
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* Main inner spacing */
.hero { padding: 0px 0px; }
.projects.section { padding: 24px 16px; }

/* Projects grid: 1 col mobile, 2 cols desktop */
.grid {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
  align-items: stretch;
}
@media (min-width: 800px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Expanded card spans full row */

/* Motion */
.reflow-move { transition: transform .25s ease; }
.reflow-enter-active, .reflow-leave-active { transition: opacity .2s ease, transform .2s ease; }
.reflow-enter-from, .reflow-leave-to { opacity: 0; transform: translateY(8px); }

/* Typography */
h1 { font-size: 32px; color: var(--fb-light); }
.hero :deep(.cta) { display: flex; gap: 10px; flex-wrap: wrap; }

.section{margin-bottom:48px;margin-top:48px;}
</style>
