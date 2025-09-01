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
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const sections = [
  { id: 'about',          label: 'About' },
  { id: 'experience',     label: 'Experience' },
  { id: 'projects',       label: 'Projects' },
  { id: 'certifications', label: 'Certifications' }
]

const activeId = ref('about')
let observer

onMounted(() => {
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
</script>

<style scoped>
.toc {
  display: flex; flex-direction: column;
  height: 100%;
  background: var(--fb-gray);
  border: 1px solid var(--fb-gray-2);
  border-radius: 16px;
  padding: 14px;
  box-shadow: 0 10px 28px rgba(0,0,0,0.28);
}
.title {
  margin: 0 0 8px;
  font-size: 16px; color: var(--fb-light);
  letter-spacing: .2px;
}
ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 6px; }
.item {
  display: grid;
  grid-template-columns: 10px 1fr;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 10px;
  color: var(--fb-light);
  border: 1px solid var(--fb-gray-2);
  background: rgba(255,255,255,0.02);
  text-decoration: none;
  transition: border-color .2s, background .2s, color .2s, transform .15s;
}
.item:hover { border-color: rgba(255,255,255,0.14); background: rgba(255,255,255,0.04); transform: translateX(1px); }
.item.active { border-color: var(--fb-blue); box-shadow: 0 0 0 2px rgba(24,119,242,.18) inset; }
.bullet { width: 8px; height: 8px; border-radius: 999px; background: var(--fb-blue); opacity: .6; }
.item.active .bullet { opacity: 1; }
</style>
