<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content'

const { project } = defineProps<{ project: ProjectsCollectionItem }>()
</script>

<template>
  <article
    class="card group relative flex cursor-pointer flex-col overflow-hidden"
    @click="navigateTo(project.path)"
  >
    <div class="relative">
      <ProjectsPreview :project="project" class="-m-9 opacity-80" />
    </div>

    <div class="tags absolute top-3 right-3 max-w-80 justify-end">
      <span v-for="tag in project.tags" :key="tag" class="tag --dark">
        {{ tag }}
      </span>
    </div>

    <div class="relative -mt-6">
      <div>
        <h3
          class="group-hover:text-primary mb-3 line-clamp-2 text-xl font-semibold text-white transition-colors duration-300"
        >
          <a :href="project.path">{{ project.title }}</a>
        </h3>

        <p class="text-white-60 mb-auto line-clamp-3 flex-1 text-sm">
          {{ project.description }}
        </p>
      </div>
    </div>
  </article>
</template>
