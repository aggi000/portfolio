<template>
  <section id="certifications" class="certs section">
    <h2>Certifications</h2>

    <div class="grid">
      <article v-for="c in certs" :key="c.id" class="card cert">
        <header class="row">
          <span class="badge">{{ c.icon }}</span>
          <div class="meta">
            <h3>{{ c.title }}</h3>
            <p class="sub">{{ c.issuer }} • {{ c.when }}</p>
          </div>
          <a v-if="c.verify" :href="c.verify" target="_blank" rel="noopener" class="btn outline small">Verify</a>
        </header>

        <p class="summary">{{ c.summary }}</p>

        <div class="chips">
          <span v-for="(s,i) in c.skills" :key="i" class="chip">{{ s }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '~/components/SectionHeader.vue'
const certs = [
  { id:1, icon:'☁️', title:'AWS Cloud Practitioner Essentials', issuer:'Amazon Web Services', when:'2024',
    summary:'Foundational cloud, security/IAM, billing, and core services.', skills:['AWS','Security & IAM','Costing'], verify:'' },
  { id:2, icon:'📊', title:'Data Science & Statistics', issuer:'Udemy', when:'2021',
    summary:'EDA, inference, A/B testing, and ML fundamentals.', skills:['Pandas','NumPy','scikit-learn'], verify:'' },
  { id:3, icon:'🎓', title:'Innovation & Entrepreneurship', issuer:'University of Alberta', when:'2025',
    summary:'Venture discovery, MVP experiments, pitching & finance basics.', skills:['Product Thinking','Experimentation'], verify:'' },
]
</script>

<style scoped>
.certs { padding: 10px; }
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
