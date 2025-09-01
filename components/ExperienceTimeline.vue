<template>
  <section id="experience" class="section">
    <h2> Work Experience</h2>
    <ol class="timeline">
      <li v-for="e in items" :key="e.id" class="item">
        <div class="dot"></div>
        <ExperienceFlipCard
          :item="e"
          :expanded="openId === e.id"
          @toggle="toggle"
        />
      </li>
    </ol>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SectionHeader from '~/components/SectionHeader.vue'
import ExperienceFlipCard from '~/components/ExperienceFlipCard.vue'

const openId = ref(null)
function toggle(id){ openId.value = openId.value === id ? null : id }

const items = [
  {
    id: 1,
    role:'Machine Learning Researcher',
    company:'PCL Construction',
    time:'2024',
    location:'Edmonton, AB (Hybrid)',
    type:'Contract',
    summary:'Graph-based pattern detection across 10k+ engineering drawings.',
    points:[
      'Designed graph extraction & matching pipeline for CAD/engineering drawings',
      'Built evaluation harness with synthetic & real datasets; automated reporting',
      'Optimized matching routes for scale and stability; documented ops runbooks'
    ],
    tags:['Computer Vision','Graph','Python','OpenCV']
  },
  {
    id: 2,
    role:'Software Developer (Intern)',
    company:'Dotdash Meredith',
    time:'2023',
    location:'Remote',
    type:'Internship',
    summary:'QA tooling & reliability dashboards to speed up shipping with confidence.',
    points:[
      'Expanded Playwright E2E coverage and stabilized flaky suites',
      'Built CI health dashboard with actionable metrics and trend lines',
      'Partnered with teams to triage failures and reduce MTTR'
    ],
    tags:['Playwright','CI/CD','Node','Dashboards']
  }
]
</script>

<style scoped>
/* Timeline rail */
.timeline {
  --rail-w: 3px;                      /* rail width (desktop bumps to 4px) */
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 28px;
  position: relative;
}
.timeline::before {
  content: "";
  position: absolute;
  top: 0; bottom: 0;
  left: calc(9px - var(--rail-w) / 2);/* 18px column center = 9px */
  width: var(--rail-w);
  border-radius: 999px;
  background: rgba(255,255,255,.10);
  box-shadow:
    0 0 0 1px rgba(255,255,255,.06) inset,
    0 0 22px rgba(24,119,242,.22);
}
@media (min-width: 1100px) {
  .timeline { --rail-w: 4px; }        /* a touch thicker on wide screens */
}

.item {
  display: grid;
  grid-template-columns: 18px minmax(0, 1fr); /* rail + card */
  gap: 12px; align-items: start;
}

.dot {
  width: 15px; height: 15px; margin-top: 16px;
  border-radius: 999px;  background: var(--fb-blue);
  box-shadow: 0 0 0 3px rgba(24,119,242,.18);
  margin-left: 2px;
  opacity:1;
}
.item > * { min-width: 0; }
</style>
