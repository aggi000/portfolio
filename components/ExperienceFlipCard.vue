<template>
  <article
    class="exp card"
    :class="{ expanded }"
    tabindex="0"
    role="button"
    :aria-expanded="expanded ? 'true' : 'false'"
    @click="emit('toggle', item.id)"
    @keydown.enter.prevent="emit('toggle', item.id)"
    @keydown.space.prevent="emit('toggle', item.id)"

  >
    <header class="head">
      <div class="titles">
        <h3 class="role">{{ item.role }}</h3>
        <div class="sub">
          <span class="place">{{ item.company }}</span>
          <span class="dot" aria-hidden="true">•</span>
          <span class="time">{{ item.time }}</span>
        </div>
      </div>

      <button
        class="chev"
        :aria-label="expanded ? 'Collapse' : 'Expand'"
        @click.stop="emit('toggle', item.id)"
      >
        ▾
      </button>
    </header>

    <p class="summary" :class="{ clamped: !expanded }">{{ item.summary }}</p>

    <div class="chips">
      <span class="chip" v-for="(t,i) in visibleTags" :key="i">{{ t }}</span>
      <span v-if="hiddenCount > 0 && !expanded" class="chip ghost">+{{ hiddenCount }}</span>
    </div>

    <transition name="fade">
      <div v-show="expanded" class="details">
        <ul v-if="item.points?.length" class="bullets">
          <li v-for="(p,i) in item.points" :key="i">{{ p }}</li>
        </ul>
      </div>
    </transition>
  </article>
</template>

<script setup>
const props = defineProps({
  item: { type: Object, required: true },
  expanded: { type: Boolean, default: false }
})
const emit = defineEmits(['toggle'])

const visibleTags = computed(() => (props.expanded ? props.item.tags : (props.item.tags || []).slice(0, 3)))
const hiddenCount = computed(() => Math.max(0, (props.item.tags?.length || 0) - 3))
</script>

<style scoped>
.exp {
  display: block;
  width: 90%;
  margin:0 auto;
  box-sizing: border-box;
  padding: var(--space-4);
  transition: border-color .18s ease, box-shadow .2s ease, background .18s ease;
}
.exp:hover { background: var(--surface-2); }
.exp.expanded { border-color: var(--brand); box-shadow: var(--shadow-2); }

.head {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  gap: 8px;
}
.titles { display: grid; gap: 2px; }
.role { margin: 0; font-size: var(--h3); color: var(--text-1); }
.sub { display: inline-flex; gap: 8px; align-items: baseline; color: var(--text-2); font-size: 12px; }
.sub .dot { opacity: .6; }

.chev {
  align-self: center;
  background: transparent; border: 1px solid var(--stroke-1);
  color: var(--text-1); border-radius: 10px; padding: 4px 8px; cursor: pointer;
  transition: transform .16s ease, border-color .16s ease, background .16s ease;
}
.expanded .chev { transform: rotate(180deg); }
.chev:hover { border-color: var(--brand); background: rgba(24,119,242,.08); }

.summary { color: var(--text-2); margin: 8px 0 6px; }
.summary.clamped {
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
}

.chips { display: flex; gap: 8px; flex-wrap: wrap; }
.chip { font-size: 12px; }
.chip.ghost { background: transparent; border-style: dashed; color: var(--text-2); }

.details { margin-top: 8px; }
.bullets { margin: 0; padding-left: 18px; display: grid; gap: 6px; color: var(--text-2); }

/* subtle, classy motion */
.fade-enter-active, .fade-leave-active { transition: opacity .16s ease, transform .16s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(4px); }

/* motion safety */
@media (prefers-reduced-motion: reduce) {
  .chev { transition: none; }
  .fade-enter-active, .fade-leave-active { transition: none; }
}
</style>
