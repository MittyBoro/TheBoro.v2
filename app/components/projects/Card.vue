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
    @click="navigateTo(project.path)"
  >
    <div class="relative">
      <ProjectsPreview
        :project="project"
        class="-m-9 opacity-50 blur-[2px] transition group-hover:opacity-80 group-hover:blur-[1px]"
      />
    </div>

    <div v-if="!mini" class="tags absolute top-3 right-3 max-w-80 justify-end">
      <span v-for="tag in project.tags?.slice(0, 3)" :key="tag" class="tag --dark">
        {{ tag }}
      </span>
    </div>

    <div class="relative" :class="!mini ? '-mt-10' : 'mt-auto'">
      <div>
        <h3
          class="group-hover:text-primary line-clamp-2 leading-tight font-semibold text-white transition-colors duration-300"
          :class="mini ? 'text-md' : 'text-xl'"
        >
          <a :href="project.path">{{ project.title }}</a>
        </h3>

        <p
          v-if="!mini"
          class="text-white-60 mb-auto line-clamp-3 flex-1 pt-3 text-sm text-white/80"
        >
          {{ project.description }}
        </p>
      </div>
    </div>
  </article>
</template>
