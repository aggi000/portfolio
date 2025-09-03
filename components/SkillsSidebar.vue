<template>
  <aside class="skills-card" aria-labelledby="skills-heading">
    <header class="head">
      <h2 id="skills-heading">Skills</h2>
      <p class="muted">Most-used stacks & tools</p>
    </header>

    <div class="scroll">
      <div class="pins" role="list">
        <span v-for="s in pins" :key="s.name" class="pill" role="listitem" :title="s.name">
          <span class="i">{{ s.icon }}</span>
          <span class="t">{{ s.name }}</span>
        </span>
      </div>

      <div class="divider" role="separator" aria-hidden="true"></div>

      <div class="accordions">
        <section v-for="g in groups" :key="g.title" class="group">
          <button
            class="acc"
            :aria-expanded="open[g.title] ? 'true' : 'false'"
            :aria-controls="idFor(g.title)"
            @click="toggle(g.title)"
          >
            <span class="label">{{ g.title }}</span>
            <span class="count" aria-hidden="true">{{ g.items.length }}</span>
            <span class="chev" :class="{ open: open[g.title] }">▾</span>
          </button>

          <div :id="idFor(g.title)" class="panel" v-show="open[g.title]">
            <div class="chips">
              <span v-for="it in g.items" :key="it" class="chip">{{ it }}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { reactive } from 'vue'

const pins = [
  { icon: '🐍', name: 'Python' },
  { icon: '🟩', name: 'Vue 3' },
  { icon: '🧠', name: 'PyTorch' },
  { icon: '🧪', name: 'Playwright' },
  { icon: '🍃', name: 'MongoDB' },
  { icon: '☁️', name: 'AWS' },
  { icon: '🗃️', name: 'SQL' },
  { icon: '🦆', name: 'DuckDB' },
  { icon: '📊', name: 'Pandas' },
  { icon: '🔢', name: 'NumPy' },
  { icon: '🚀', name: 'CI/CD' }
]

const groups = [
  { title: 'Languages', items: ['Python','JavaScript/TypeScript','Java','C/C++','MATLAB','HTML/CSS'] },
  { title: 'Frameworks', items: ['Vue 3','Playwright','PyTorch','TensorFlow','OpenCV','Streamlit'] },
  { title: 'Data & ML', items: ['Pandas','NumPy','scikit-learn','Matplotlib','DuckDB'] },
  { title: 'Backend & Cloud', items: ['Node.js','GraphQL','AWS','S3','MongoDB/DocumentDB','SQL','Docker','CI/CD','WebSockets'] },
  { title: 'Tools', items: ['Git & GitHub','Android Studio','Power BI','Tableau'] }
]

const open = reactive({
  Languages: true,
  Frameworks: true,
  'Data & ML': false,
  'Backend & Cloud': false,
  Tools: false
})

function toggle(title) { open[title] = !open[title] }
function idFor(title) { return 'acc-' + title.toLowerCase().replace(/\s+/g, '-') }
</script>

<style scoped>
.skills-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--fb-gray);
  color: var(--fb-light);
  border: 1px solid var(--fb-gray-2);
  border-radius: 0px;
  padding: 16px;
  box-shadow: 0 10px 28px rgba(0,0,0,0.28);
  overflow: hidden;
}

.head { display: grid; gap: 4px; margin-bottom: 0px; flex: 0 0 auto; }
h2 { margin: 0; font-size: 18px; letter-spacing: .2px; color: var(--fb-light); }
.muted { margin: 0; font-size: 12px; color: rgba(228,230,235,.7); }

/* Internal scroll */
.scroll {
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1 1 auto;
  padding-right: 2px;
}

/* Pins */
.pins { display: flex; margin-top:12px;flex-wrap: wrap; gap: 8px; margin-bottom: 12px; }
.pill {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 6px 10px; border-radius: 999px;
  background: var(--fb-gray-2); border: 1px solid rgba(255,255,255,0.06);
  color: var(--fb-light); font-size: 12px;
}
.pill .i { width: 1.2em; text-align: center; }
.pill:hover { border-color: var(--fb-blue); }

/* Divider */
.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.08), transparent);
  margin: 4px 0 10px;
}

/* Accordions */
.accordions { display: grid; gap: 8px; }
.acc {
  width: 100%;
  display: grid; grid-template-columns: 1fr auto auto;
  align-items: center; gap: 8px;
  padding: 10px; border-radius: 10px;
  border: 1px solid var(--fb-gray-2);
  background: rgba(255,255,255,0.02); color: var(--fb-light);
  text-align: left; cursor: pointer;
  transition: border-color .2s, background .2s;
}
.acc:hover { border-color: rgba(255,255,255,0.14); background: rgba(255,255,255,0.04); }
.label { font-size: 13px; font-weight: 600; letter-spacing: .2px; }
.count {
  font-size: 11px; color: rgba(228,230,235,.75);
  padding: 2px 6px; border: 1px solid var(--fb-gray-2); border-radius: 999px;
}
.chev { font-size: 12px; transition: transform .18s ease; }
.chev.open { transform: rotate(180deg); }

.panel { padding: 8px 4px 2px 4px; }
.chips { display: flex; flex-wrap: wrap; gap: 6px; }
.chip {
  background: transparent; border: 1px dashed rgba(255,255,255,0.14);
  color: var(--fb-light); padding: 6px 10px; border-radius: 999px; font-size: 12px;
  transition: border-color .2s, color .2s, transform .15s;
}
.chip:hover { border-color: var(--fb-blue); color: var(--fb-blue); transform: translateY(-1px); }
</style>
