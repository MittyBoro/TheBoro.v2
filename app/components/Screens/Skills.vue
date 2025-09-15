<script setup lang="ts">
const { skills } = usePortfolioData();
</script>

<template>
  <section id="skills" class="py-20">
    <h2 class="section-title">Skills & Tools</h2>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5"
    >
      <div
        v-for="s in skills"
        :key="s.name"
        class="card group flex flex-col items-center gap-2"
      >
        <div
          class="w-12 h-12 flex items-center justify-center rounded-lg bg-base-soft/50 border border-white/5 group-hover:border-accent/60 transition"
        >
          <span class="text-accent">{{ s.name.charAt(0) }}</span>
        </div>
        <p class="text-sm text-gray-400 group-hover:text-gray-200 transition">
          {{ s.name }}
        </p>
      </div>
    </div>
  </section>
</template>
