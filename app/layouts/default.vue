<script setup lang="ts"></script>

<template>
  <main class="flex min-h-screen flex-col bg-black tracking-wide text-white">
    <!-- Фон -->
    <GridBackground class="fixed inset-0 z-10" />

    <!-- Контент -->
    <div class="relative z-20">
      <slot />
    </div>
  </main>
</template>
