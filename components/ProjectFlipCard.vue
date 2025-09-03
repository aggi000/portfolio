<template>
  <article
    class="card"
    :class="{
      expanded,
      flipped: expanded,
      interactive: true
    }"
    @click="toggle"
    @keydown.enter.prevent="toggle"
    @keydown.space.prevent="toggle"
    tabindex="0"
    role="button"
    :aria-pressed="expanded ? 'true' : 'false'"
    :aria-expanded="expanded ? 'true' : 'false'"
  >
    <div class="inner">
      <!-- FRONT -->
      <div class="face front">
        <header class="head">
          <h3 class="title">{{ project.title }}</h3>
          <span class="year">{{ project.year }}</span>
        </header>
        <h4 class="desc">{{ project.short }}</h4>
        <div v-if="project.tags?.length" class="tags">
          <span v-for="(t, i) in project.tags" :key="i" class="tag">{{ t }}</span>
        </div>
        <footer class="hint">
          <span>Click to see more</span>
        </footer>
      </div>

      <!-- BACK -->
      <div class="face back">
        <header class="head">
          <h3 class="title">{{ project.title }}</h3>
          <span class="year">{{ project.year }}</span>
        </header>

        <p class="detail">{{ project.details }}</p>

        <ul v-if="project.points?.length" class="bullets">
          <li v-for="(b, i) in project.points" :key="i">{{ b }}</li>
        </ul>

        <div class="stack">
          <strong>Tech:</strong>
          <span class="tech">{{ project.tech }}</span>
        </div>

        <div class="links">
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener"
            class="btn"
          >Live Demo</a>
          <a
            v-if="project.repo"
            :href="project.repo"
            target="_blank"
            rel="noopener"
            class="btn outline"
          >Source</a>
          <button class="btn ghost" @click.stop="toggle">Close</button>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  project: { type: Object, required: true },
  expanded: { type: Boolean, default: false }
})
const emit = defineEmits(['toggle'])

function toggle() {
  emit('toggle', props.project.id)
}
</script>

<style scoped>
/* Theme-aware Project Flip Card */
.card {
  background: var(--fb-gray);
  border: 1px solid var(--stroke-1);
  color: var(--text-1);
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.25);
  cursor: pointer;
  perspective: 1600px;
  transform-origin: center center;
  transition: box-shadow .25s, outline-color .2s, transform .2s;
  position: relative;
  outline: 2px solid transparent;
  outline-offset: 0;
  min-height: 240px;
}
.card:hover { box-shadow: 0 10px 26px rgba(0,0,0,0.35); transform: translateY(-2px); }
.card:focus-visible { outline-color: var(--fb-blue); }

/* Expanded highlight */
.card.expanded {
  box-shadow: 0 16px 40px rgba(24,119,242,0.35);
  outline-color: var(--fb-blue);
}

/* Flip engine */
.inner {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 240px;
  transform-style: preserve-3d;
  transition: transform .6s cubic-bezier(.2,.6,.2,1);
}
.card.flipped .inner { transform: rotateY(180deg) scale(1.02); }

.face {
  position: absolute; inset: 0; padding: 16px;
  backface-visibility: hidden;
  display: flex; flex-direction: column; gap: 10px;
}

/* FRONT uses card background; BACK uses a subtle variant that works in both themes */
.front { /* inherits .card background */ }
.back {
  /* Slightly different surface than the card, but theme-safe */
  background: var(--fb-gray); /* fallback */
  background: color-mix(in srgb, var(--fb-gray) 90%, #000 10%);
  border-radius: 14px;
  transform: rotateY(180deg);
  border: 1px solid var(--stroke-1);
}

/* Head */
.head {
  display: flex; align-items: baseline; justify-content: space-between; gap: 10px;
}
.title {
  margin: 0; font-size: 18px; color: var(--text-1); font-weight: 700;
}
.year { color: var(--text-2); font-size: 12px; }

/* Body text */
.desc { color: var(--text-2); }
.detail { color: var(--text-1); }

/* Lists */
.bullets {
  margin: 0; padding-left: 16px; display: grid; gap: 6px;
}
.bullets li { line-height: 1.4; color: var(--text-1); }

/* “Tech:” line */
.stack { margin-top: 6px; color: var(--text-1); }
.tech { margin-left: 6px; color: var(--text-1); }

/* Tags (rounded rectangles) */
.tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto; }
.tag {
  background: var(--chip-bg);
  border: 1px solid var(--stroke-1);
  color: var(--text-1);
  padding: 6px 10px;
  border-radius: 10px;
  font-size: 12px;
  line-height: 1;
  display: inline-flex; align-items: center; gap: 6px;
  box-shadow: 0 1px 0 rgba(0,0,0,.12) inset;
}
.tag::before {
  content: ""; width: 6px; height: 6px; border-radius: 50%;
  background: var(--fb-blue); opacity: .9;
}

/* Hint */
.hint { margin-top: 6px; color: var(--text-2); font-size: 12px; }

/* Buttons */
.links { margin-top: auto; display: flex; flex-wrap: wrap; gap: 8px; }
.btn {
  background: var(--fb-blue);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-weight: 600;
  transition: background .2s, transform .15s, box-shadow .2s;
  box-shadow: 0 4px 12px rgba(24,119,242,0.25);
  text-decoration: none;
}
.btn:hover { background: var(--fb-accent); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }

.btn.outline {
  background: transparent;
  color: var(--fb-blue);
  border: 1px solid var(--fb-blue);
  box-shadow: none;
}
.btn.outline:hover { color: var(--fb-accent); border-color: var(--fb-accent); }

.btn.ghost {
  background: transparent;
  border: 1px solid var(--stroke-1);
  color: var(--text-1);
  box-shadow: none;
}
.btn.ghost:hover { border-color: var(--fb-blue); color: var(--fb-blue); }

/* Expansion sizing (makes the card/box grow) */
.card.expanded { min-height: 360px; }
@media (min-width: 900px) {
  .card.expanded { grid-column: 1 / -1; min-height: 420px; }
}
</style>
