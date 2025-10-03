<script setup lang="ts">
const slug = useRoute().params.slug

const { data: project } = await useAsyncData(`projects:${slug}`, () =>
  useProjectByPath(slug as string),
)

if (!project.value || (!project.value.published && !import.meta.dev)) {
  throw createError({ statusCode: 404, statusMessage: 'Not Found' })
}
</script>

<template>
  <article v-if="project" class="group card card-xl mx-auto mt-20 max-w-4xl overflow-hidden">
    <!-- Preview -->
    <ProjectsPreview :project="project" class="-m-12" />

    <!-- Content -->
    <div class="relative" :class="project.preview ? '-mt-20' : 'mt-0'">
      <!-- Title -->
      <ProjectsTitle :project="project" />
      <!-- Content -->
      <ContentRenderer class="prose prose-invert" :value="project" />
    </div>
  </article>
</template>
