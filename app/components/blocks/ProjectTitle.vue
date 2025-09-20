<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content'

const { post } = defineProps<{ post: ProjectsCollectionItem }>()
</script>

<template>
  <div class="mb-10">
    <div class="flex items-center gap-2">
      <!-- назад -->
      <NuxtLink
        to="/#works"
        class="hover:text-primary mr-auto text-sm text-white/40 transition-colors"
      >
        ← Все работы
      </NuxtLink>

      <NuxtLink v-if="post.demo" :to="post.demo" target="_blank" class="btn btn-sm">
        <Icon name="mdi:open-in-new" class="mr-2 text-lg" />
        <span>Demo</span>
      </NuxtLink>

      <NuxtLink v-if="post.github" :to="post.github" target="_blank" class="btn btn-sm">
        <Icon name="mdi:github" class="mr-2 text-lg" />
        <span>GitHub</span>
      </NuxtLink>
    </div>

    <!-- title -->
    <h1 class="first-letter:text-primary mt-6 text-4xl font-black">{{ post?.title }}</h1>

    <!-- date -->
    <div class="mt-5 flex items-center">
      <div class="text-sm text-white/40">
        {{
          new Date(post?.date).toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        }}
      </div>
      <div v-if="post.tags" class="ml-auto flex space-x-2">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="rounded-full bg-white/10 px-3 py-1 text-xs text-white/40"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>
