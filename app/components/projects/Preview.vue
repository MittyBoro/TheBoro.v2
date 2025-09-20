<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content'

const { project } = defineProps<{ project: ProjectsCollectionItem }>()
</script>

<template>
  <div
    v-if="project.preview"
    class="relative mask-b-from-white mask-b-from-50% mask-b-to-black mask-luminance transition"
  >
    <NuxtImg
      :src="project.preview"
      class="pointer-events-none transition select-none"
      :alt="`Image for ${project.title}`"
    />
    <NuxtImg
      :src="project.preview"
      class="absolute top-2.5 opacity-20 blur-[1px] transition-opacity group-hover:opacity-5"
      :alt="`Image for ${project.title}`"
    />
  </div>
</template>
