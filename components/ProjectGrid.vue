<script setup>
import { ref, computed, watchEffect } from "vue";

const props = defineProps({
  projects: { type: Array, default: () => [] }
});

// safe list
const list = computed(() => Array.isArray(props.projects) ? props.projects : []);

// track open cards with a Set
const open = ref(new Set());
function toggle(i) {
  const s = new Set(open.value);
  s.has(i) ? s.delete(i) : s.add(i);
  open.value = s;
}

// keep state valid if list size changes
watchEffect(() => {
  const s = new Set();
  for (const i of open.value) if (i < list.value.length) s.add(i);
  open.value = s;
});

// TEMP debug
if (process.client) console.log("ProjectsGrid list length:", list.value.length);
</script>

<template>
  <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl font-semibold tracking-tight mb-6">Projects</h2>

    <div v-if="list.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <article
        v-for="(p, i) in list"
        :key="p?.name ?? i"
        class="group relative rounded-2xl border shadow-sm transition-all duration-300 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2"
        :class="open.has(i) ? 'bg-indigo-50 border-indigo-300 scale-[1.01]' : 'bg-white hover:bg-gray-50 border-gray-200'"
        role="button"
        tabindex="0"
        :aria-expanded="open.has(i)"
        @click="toggle(i)"
        @keydown.enter.prevent="toggle(i)"
        @keydown.space.prevent="toggle(i)"
      >
        <!-- Front -->
        <div class="p-5">
          <div class="flex items-start justify-between gap-4">
            <h3 class="text-lg font-semibold leading-snug">{{ p.name }}</h3>
            <span
              v-if="p.year"
              class="shrink-0 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium"
              :class="open.has(i) ? 'bg-indigo-100 text-indigo-700 border-indigo-200' : 'text-gray-600 border-gray-200'"
            >
              {{ p.year }}
            </span>
          </div>
          <p class="mt-2 text-sm text-gray-700">{{ p.short }}</p>
        </div>

        <!-- Back -->
        <transition
          enter-active-class="transition-[max-height,opacity] duration-500 ease-out"
          enter-from-class="max-h-0 opacity-0"
          enter-to-class="max-h-[1000px] opacity-100"
          leave-active-class="transition-[max-height,opacity] duration-300 ease-in"
          leave-from-class="max-h-[1000px] opacity-100"
          leave-to-class="max-h-0 opacity-0"
        >
          <div v-show="open.has(i)" class="overflow-hidden">
            <div class="px-5 pb-5">
              <p v-if="p.description" class="text-sm text-gray-800 mb-4">{{ p.description }}</p>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div v-if="p.frameworks?.length">
                  <h4 class="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Frameworks</h4>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="f in p.frameworks" :key="f" class="rounded-full border border-indigo-200 bg-white/70 px-2.5 py-1 text-xs font-medium text-indigo-700">{{ f }}</span>
                  </div>
                </div>

                <div v-if="p.skills?.length">
                  <h4 class="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Skills</h4>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="s in p.skills" :key="s" class="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700">{{ s }}</span>
                  </div>
                </div>

                <div v-if="p.team">
                  <h4 class="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Team</h4>
                  <p class="text-sm text-gray-800">{{ p.team }}</p>
                </div>

                <div class="space-x-3">
                  <a v-if="p.repo" :href="p.repo" target="_blank" rel="noopener" class="inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-100" @click.stop>Repo</a>
                  <a v-if="p.live" :href="p.live" target="_blank" rel="noopener" class="inline-flex items-center rounded-lg border border-indigo-200 bg-indigo-600/10 px-3 py-1.5 text-sm font-medium text-indigo-700 hover:bg-indigo-100" @click.stop>Live</a>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <div class="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300" :class="open.has(i) ? 'opacity-100 ring-1 ring-inset ring-indigo-200' : ''"/>
      </article>
    </div>

    <div v-else class="text-sm text-gray-500 border rounded-xl p-6">No projects yet.</div>
  </section>
</template>
