<template>
  <section id="volunteer" class="volunteers section">
    <h2>Volunteer Experience</h2>

    <div class="grid">
      <article v-for="c in volunteers" :key="c.id" class="card cert">
        <header class="row">
          <span class="badge">{{ c.icon }}</span>
          <div class="meta">
            <h3>{{ c.title }}</h3>
            <p class="sub">{{ c.issuer }} • {{ c.when }}</p>
          </div>
        </header>

        <p class="summary">{{ c.summary }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '~/components/SectionHeader.vue'
const volunteers = [
  { id:1, icon:'💁‍♂️', title:'External Relations Coordinator', issuer:'International Students Association, University of Alberta', when:'2022 Sep-2023 Apr',
    summary:'Built external partnerships, secured sponsorships/discounts, and allocated $4K+ to international student groups while organizing events to expand ISA’s campus reach.'},
  { id:2, icon:'💡', title:'Coordinator Events', issuer:'Entrepreneurship Club, University of Alberta', when:'2023 Sep - 2024 April',
    summary:'Planned and executed Entrepreneurship Club events—workshops, speaker panels, and hack nights—managing logistics, marketing, and campus partnerships..' },
]
</script>

<style scoped>
.volunteers { padding: 10px; }
.grid { display: grid; gap: 14px; grid-template-columns: 1fr; }
@media (min-width: 900px) { .grid { grid-template-columns: repeat(2, minmax(0,1fr)); } }

.cert { padding: var(--space-4); }
.row { display: grid; grid-template-columns: auto 1fr auto; gap: 12px; align-items: center; }
.badge { width: 36px; height: 36px; display: grid; place-items: center; border-radius: var(--r-sm);
  background: var(--surface-2); border: 1px solid var(--stroke-1); font-size: 18px; }
.meta h3 { margin: 0; font-size: var(--h3); }
.meta .sub { margin: 2px 0 0; font-size: 12px; color: var(--text-2); }
.summary { margin: 10px 0 6px; color: var(--text-2); }
.chips { display: flex; flex-wrap: wrap; gap: 8px; }
.btn.small { padding: 6px 10px; font-size: 12px; }
</style>
