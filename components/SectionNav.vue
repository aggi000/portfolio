<template>
  <nav class="toc" aria-label="Page sections">
    <h2 class="title">Sections</h2>
    <ul>
      <li v-for="s in sections" :key="s.id">
        <NuxtLink
          :to="`#${s.id}`"
          class="item"
          :class="{ active: activeId === s.id }"
          :aria-current="activeId === s.id ? 'true' : 'false'"
        >
          <span class="bullet" />
          <span>{{ s.label }}</span>
        </NuxtLink>
      </li>
    </ul>
    <footer class="nav-footer">
        <button
            class="theme-toggle"
            :aria-pressed="isLight"
            :title="isLight ? 'Switch to dark' : 'Switch to light'"
            @click="toggleTheme"
        >
            <span class="icon" aria-hidden="true">{{ isLight ? '☀️' : '🌙' }}</span>
            <span class="label">{{ isLight ? 'Light' : 'Dark' }}</span>
            <span class="track" aria-hidden="true"><span class="knob" :class="{ on: isLight }"></span></span>
        </button>
    </footer>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const THEME_KEY = 'theme'
const sections = [
  { id: 'about',          label: 'About' },
  { id: 'experience',     label: 'Experience' },
  { id: 'projects',       label: 'Projects' },
  { id: 'certifications', label: 'Certifications' }
]

const activeId = ref('about')
let observer

onMounted(() => {
  let initial = 'dark'
  try {
    const stored = localStorage.getItem(THEME_KEY)
    initial =
      stored === 'light' || stored === 'dark'
        ? stored
        : (prefersDark() ? 'dark' : 'light')
  } catch {}
  theme.value = initial
  applyTheme(initial)
  const opts = { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.1 }
  observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
    if (visible?.target?.id) activeId.value = visible.target.id
  }, opts)

  sections.forEach(s => {
    const el = document.getElementById(s.id)
    if (el) observer.observe(el)
  })
})

onBeforeUnmount(() => observer?.disconnect())

const prefersDark = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches

const theme = ref('dark')                // 'dark' | 'light' (managed at runtime)
const isLight = computed(() => theme.value === 'light')

function applyTheme(v) {
  document.documentElement.setAttribute('data-theme', v)
  try { localStorage.setItem(THEME_KEY, v) } catch {}
}

function toggleTheme() {
  theme.value = isLight.value ? 'dark' : 'light'
  applyTheme(theme.value)
}
</script>
<style scoped>
/* Make the nav a 3-row grid so the footer stays at the bottom */
.toc {
  display: grid;
  grid-template-rows: auto 1fr auto;   /* title, links (fills), footer pinned */
  height: 100%;
  background: var(--fb-gray);
  border: 1px solid var(--stroke-1);
  border-radius: 0;
  padding: 14px;
  box-shadow: 0 10px 28px rgba(0,0,0,0.28);
  min-height: 0;                        /* allow grid children to shrink */
}

/* Title */
.title {
  margin: 0 0 8px;
  font-size: 16px;
  color: var(--text-1);
  letter-spacing: .2px;
}

/* Middle: section links — this is the row that stretches and can scroll */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 6px;

  /* KEY: let this area grow and scroll if it overflows */
  min-height: 0;
  overflow: auto;
}

/* Links */
.item {
  display: grid;
  grid-template-columns: 10px 1fr;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 10px;
  color: var(--text-1);
  border: 1px solid var(--stroke-1);
  background: rgba(255,255,255,0.02);
  text-decoration: none;
  transition: border-color .2s, background .2s, color .2s, transform .15s;
}
.item:hover { border-color: var(--stroke-1); background: rgba(255,255,255,0.04); transform: translateX(1px); }
.item.active { border-color: var(--fb-blue); box-shadow: 0 0 0 2px rgba(24,119,242,.18) inset; }
.bullet { width: 8px; height: 8px; border-radius: 999px; background: var(--fb-blue); opacity: .6; }
.item.active .bullet { opacity: 1; }

/* Footer pinned to bottom row */
.nav-footer {
  margin-top: 8px;
  padding-top: 10px;
  border-top: 1px solid var(--stroke-1);
}

/* Toggle button */
.theme-toggle {
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto; /* icon, text, switch */
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--stroke-1);
  border-radius: 12px;
  color: var(--text-1);
  cursor: pointer;
  transition: background .15s ease, border-color .15s ease;
}
.theme-toggle:hover {
  background: rgba(255,255,255,0.06);
  border-color: var(--fb-blue);
}
.theme-toggle .icon { font-size: 16px; line-height: 1; }
.theme-toggle .label { font-size: 13px; opacity: .9; }

/* Switch UI (track + knob) */
.theme-toggle .track {
  justify-self: end;
  position: relative;
  width: 46px; height: 26px;
  border-radius: 999px;
  background: rgba(255,255,255,0.12);
  border: 1px solid var(--stroke-1);
}
.theme-toggle .knob {
  position: absolute; top: 50%; left: 3px;
  transform: translateY(-50%);
  width: 20px; height: 20px; border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,.35);
  transition: transform .16s ease;
}
.theme-toggle .knob.on { transform: translate(20px, -50%); }
</style>