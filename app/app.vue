<template>
  <main class="flex min-h-screen flex-col bg-black tracking-wide text-white">
    <div
      class="fixed inset-0 z-10 bg-[linear-gradient(to_right,#777_1px,transparent_1px),linear-gradient(to_bottom,#777_1px,transparent_1px)] bg-[size:18px_18px] opacity-10"
    ></div>
    <div class="relative z-20">
      <NuxtPage />
    </div>
  </main>
</template>

<style scoped lang="scss">
/* ========= General ========= */
::selection {
  @apply bg-primary-600 text-white;
}
</style>
