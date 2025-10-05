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
        class="hover:text-primary mr-auto text-sm text-white/70 transition-colors"
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
        <Icon name="mdi:open-in-new" class="text-lg" />
        <span>Demo</span>
      </NuxtLink>

      <NuxtLink
        v-if="project.github"
        :to="project.github"
        class="btn btn-sm"
        target="_blank"
        rel="nofollow noopener"
      >
        <Icon name="mdi:github" class="text-lg" />
        <span>GitHub</span>
      </NuxtLink>
    </div>

    <!-- title -->
    <h1 class="first-letter:text-primary mt-6 text-2xl font-black md:text-4xl">
      {{ project?.title }}
    </h1>

    <!-- date -->
    <div class="mt-5 grid items-center gap-y-6 md:flex">
      <div v-if="projectDate" class="text-sm whitespace-nowrap text-white/40 capitalize">
        {{ projectDate }}
      </div>
      <div v-if="project.tags" class="tags md:ml-auto md:max-w-100 md:justify-end">
        <NuxtLink v-for="tag in project.tags" :to="`/projects?tag=${tag}`" :key="tag" class="tag">
          {{ tag }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
