<template>
  <header class="section-head">
    <div class="lhs">
      <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
      <h2 class="title">{{ title }}</h2>
      <p v-if="subtitle" class="sub">{{ subtitle }}</p>
    </div>
    <div class="rhs">
      <slot name="actions" />
    </div>
  </header>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  eyebrow: { type: String, default: '' },
  subtitle: { type: String, default: '' }
})
</script>

<style scoped>
.section-head {
  display: grid; grid-template-columns: 1fr auto; align-items: end; gap: 12px;
  margin: 8px 0 12px;
}
.eyebrow { margin: 0; font-size: 12px; color: var(--text-2); letter-spacing: .12em; text-transform: uppercase; }
.title { margin: 0; font-size: var(--h2); color: var(--text-1); }
.sub { margin: 4px 0 0; color: var(--text-2); }
</style>
