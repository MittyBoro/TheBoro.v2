<script setup lang="ts">
const slug = useRoute().params.slug

const { data: project } = await useAsyncData(`projects:${slug}`, () =>
  useProjects().getByPath(slug as string),
)

if (!project.value || (!project.value.published && !import.meta.dev)) {
  throw createError({ statusCode: 404, statusMessage: 'Not Found' })
}

useHead({
  title: `${project.value.title} | Кейсы TheBoro.ru`,
  meta: [
    {
      name: 'description',
      content: project.value.description,
    },
  ],
})
</script>

<template>
  <ProjectsSingle v-if="project" :project="project" />
</template>
