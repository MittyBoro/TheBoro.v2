<script setup lang="ts">
const THEME_COUNT = 6
const cookie = useCookie<number>('theme-index', {
  default: () => Math.floor(Math.random() * THEME_COUNT) + 1,
})

// вычисляем следующий индекс
if (import.meta.server) {
  cookie.value = (cookie.value % THEME_COUNT) + 1
}

// применяем класс к <html>
useHead({
  htmlAttrs: {
    // class: `theme-${cookie.value}`,
  },
})
</script>

<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>
