<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content'

const { project } = defineProps<{ project: ProjectsCollectionItem }>()

const projectDate = project?.date
  ? new Date(project.date).toLocaleString('ru-RU', {
      year: 'numeric',
      month: 'long',
    })
  : null
</script>

<template>
  <div class="mb-10">
    <div class="flex items-center gap-2">
      <!-- назад -->
      <NuxtLink
        to="/projects"
        class="hover:text-primary mr-auto text-sm text-white/40 transition-colors"
      >
        ← Все проекты
      </NuxtLink>

      <NuxtLink
        v-if="project.demo"
        :to="project.demo"
        class="btn btn-sm"
        target="_blank"
        rel="nofollow noopener"
      >
        <Icon name="mdi:open-in-new" class="mr-2 text-lg" />
        <span>Demo</span>
      </NuxtLink>

      <NuxtLink
        v-if="project.github"
        :to="project.github"
        class="btn btn-sm"
        target="_blank"
        rel="nofollow noopener"
      >
        <Icon name="mdi:github" class="mr-2 text-lg" />
        <span>GitHub</span>
      </NuxtLink>
    </div>

    <!-- title -->
    <h1 class="first-letter:text-primary mt-6 text-4xl font-black">{{ project?.title }}</h1>

    <!-- date -->
    <div class="mt-5 flex items-center">
      <div v-if="projectDate" class="text-sm text-white/40 capitalize">
        {{ projectDate }}
      </div>
      <div v-if="project.tags" class="tags ml-auto">
        <span v-for="tag in project.tags" :key="tag" class="tag">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>
