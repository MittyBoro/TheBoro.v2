<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content'

const { project } = defineProps<{ project: ProjectsCollectionItem }>()
</script>

<template>
  <div
    v-if="project.preview"
    class="relative mask-b-from-white mask-b-from-30% mask-b-to-black mask-luminance transition"
  >
    <NuxtImg
      :src="project.preview"
      class="pointer-events-none transition select-none"
      :alt="`Image for ${project.title}`"
    />
    <div class="absolute inset-0 bg-black/10 mix-blend-hue"></div>
    <div class="bg-primary/30 absolute inset-0 mix-blend-hue"></div>
  </div>
</template>
