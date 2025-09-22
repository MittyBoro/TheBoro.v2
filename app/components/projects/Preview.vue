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
      class="pointer-events-none blur-[1px] transition select-none"
      :alt="`Image for ${project.title}`"
    />
  </div>
</template>
