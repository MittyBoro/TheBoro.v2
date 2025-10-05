<script setup lang="ts">
const slug = useRoute().params.slug

const { data: project } = await useAsyncData(`projects:${slug}`, () =>
  useProjects().getByPath(slug as string),
)

if (!project.value || (!project.value.published && !import.meta.dev)) {
  throw createError({ statusCode: 404, statusMessage: 'Not Found' })
}
const similar = <any>(
  await useProjects().getSimilarByTags(project.value?.tags ?? [], project.value?.path, 6)
)
</script>

<template>
  <div class="mx-auto mt-20 max-w-4xl">
    <article v-if="project" class="group card card-xl">
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

    <!-- Similar Projects -->
    <BaseTitle class="mt-24 text-center">
      <span class="text-primary">Similar </span>
      <span>projects</span>
    </BaseTitle>
    <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      <ProjectsCard v-for="project in similar" :key="project.path" :project="project" mini />

      <NuxtLink to="/projects" class="btn col-span-full md:col-span-1 md:col-start-2">
        Все проекты
      </NuxtLink>
    </div>
  </div>
</template>
