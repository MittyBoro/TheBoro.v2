<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content'

const { project, mini = false } = defineProps<{
  project: ProjectsCollectionItem
  mini?: boolean
}>()
</script>

<template>
  <article
    class="card group relative flex cursor-pointer flex-col overflow-hidden"
    :class="{ 'card-sm': mini }"
    @click="navigateTo(project.path)"
  >
    <NuxtLink :to="project.path" class="relative">
      <ProjectsPreview
        :project="project"
        class="-m-9 opacity-50 blur-[2px] transition group-hover:opacity-80 group-hover:blur-[1px]"
      />
    </NuxtLink>

    <div class="tags absolute top-3 right-3 max-w-80 justify-end">
      <span v-for="tag in project.tags?.slice(0, mini ? 2 : 3)" :key="tag" class="tag --dark">
        {{ tag }}
      </span>
    </div>

    <div class="relative" :class="!mini ? '-mt-10' : 'mt-auto'">
      <h3
        class="group-hover:text-primary line-clamp-2 leading-tight font-semibold text-white transition-colors duration-300"
        :class="mini ? 'text-md' : 'text-xl'"
      >
        <NuxtLink :to="project.path">{{ project.title }}</NuxtLink>
      </h3>

      <NuxtLink
        :to="project.path"
        v-if="!mini"
        class="text-white-60 mb-auto line-clamp-3 flex-1 pt-3 text-sm text-white/80"
      >
        {{ project.description }}
      </NuxtLink>
    </div>
  </article>
</template>
