<script setup lang="ts">
const { contacts } = usePortfolioData();
</script>

<template>
  <section id="contacts" class="py-24">
    <h2 class="section-title">Контакты</h2>
    <div class="flex flex-wrap gap-6">
      <a
        v-for="c in contacts"
        :key="c.label"
        :href="c.url"
        target="_blank"
        class="group relative px-5 py-3 rounded-xl border border-white/5 bg-base-soft/50 hover:border-accent/60 transition flex items-center gap-3"
      >
        <span class="w-2 h-2 rounded-full bg-accent group-hover:shadow-glow" />
        <span class="text-gray-300 group-hover:text-white">{{ c.label }}</span>
      </a>
    </div>
  </section>
</template>
