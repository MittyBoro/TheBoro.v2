<script setup lang="ts"></script>

<template>
  <main class="bg-black tracking-wide text-white">
    <!-- Фон -->
    <LayersGridBackground class="fixed inset-0 z-10" />

    <!-- Контент -->
    <div class="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col px-6">
      <slot />
    </div>
  </main>
</template>
