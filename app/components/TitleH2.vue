<template>
  <h2 class="mb-12 text-4xl font-black">
    <slot />
  </h2>
</template>

<style scoped lang="scss">
:deep(.text-primary) {
  border-bottom: 0.13em solid var(--color-primary);
}
</style>
