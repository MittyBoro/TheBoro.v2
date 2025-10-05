<script setup lang="ts">
useHead({
  title: 'Проекты | TheBoro.ru',
  meta: [
    {
      name: 'description',
      content:
        'Список проектов, над которыми я работал. Веб-сервисы и приложения для бизнеса и пользователей.',
    },
  ],
})
</script>

<template>
  <SectionsProjects loadMore />
</template>
