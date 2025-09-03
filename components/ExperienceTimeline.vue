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
    role: 'Machine Learning Researcher',
    company: 'PCL Construction',
    time: 'May 2025 - Aug 2025',
    summary: 'Graph- and vision-based pattern detection on engineering drawings; shipped evaluation, data, and deployment tooling.',
    points: [
        'Led research on graph-based pattern detection across 10k+ drawings; benchmarked MLP, k-NN, GNNs, and Bayesian NNs with active learning, optimizing F2-score on spatially clustered text.',
        'Built FCN-ResNet-50 / U-Net / YOLO pipeline for symbol segmentation & detection; recall at parity with non-vision baselines.',
        'Generated high-precision training data using FCN instrument segmentation (pseudo-labels + synthetic crops), expanding datasets and boosting recognition accuracy on long-tail symbols.',
        'Converted PDFs to graph objects (PyTorch) and iteratively refined labels; +25% tagging precision vs. baselines.',
        'Packaged models into a Streamlit app backed by DuckDB; sub-second queries for enterprise deployment.',
        'Refactored a 10k-line Python 3.11 codebase into plug-in modules; -40% onboarding time and faster CI/CD.',
        'Automated PDF quantity take-off with span-aware text extraction and regex; ~80% reduction in manual effort.'
    ],
    tags: ['Computer Vision','Graph ML','PyTorch','FCN','U-Net','YOLO','Active Learning','DuckDB','Streamlit','CI/CD']
    },
  {
    id: 2,
    role:'Software Developer',
    company:'Dotdash Meredith',
    time:'Sep 2023 - Apr 2025',
    location:'Remote',
    type:'Internship',
    summary:
    'Built testing tools and a multi-page QA dashboard used across teams; owned backend/frontend, CI/CD, and data workflows to make shipping faster and more reliable.',
    points: [
        'Led end-to-end development of a company-wide, multi-page testing dashboard (HTML, Vue.js) with real-time results and better accessibility for QA engineers.',
        'Engineered a Playwright-based testing framework in JavaScript, reducing manual testing time by ~30% and enabling scalable regression suites.',
        'Streamlined data-cleaning with Python and Excel to deliver actionable QA insights and reduce debugging time.',
        'Integrated AWS DocumentDB (MongoDB-compatible); maintained the dev DB, optimized queries, and applied migrations to support app development and deployment.',
        'Deployed testing tools and dashboards via CI/CD pipelines, improving deployment efficiency and reliability.',
        'Collaborated in Agile/Scrum—led ceremonies, refined backlog items, and used team metrics to guide development.',
        'Drove design/code reviews to align standards, pre-empt bugs, and eliminate code smells.',
        'Leveraged LLMs to accelerate debugging, code generation, and learning, improving developer throughput.'
    ],
    tags: [
        'Vue.js','Playwright','JavaScript','Python',
        'AWS DocumentDB','MongoDB','CI/CD','Agile','LLMs'
    ]
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
