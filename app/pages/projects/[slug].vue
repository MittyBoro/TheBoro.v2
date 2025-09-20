<script setup lang="ts">
const slug = useRoute().params.slug

const { data: post } = await useAsyncData(`projects-${slug}`, () => {
  return queryCollection('projects').path(`/projects/${slug}`).first()
})

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Not Found' })
}
</script>

<template>
  <article v-if="post" class="card card-xl mx-auto max-w-4xl">
    <div class="mt-16"></div>
    <!-- назад -->
    <NuxtLink to="/#works" class="hover:text-primary text-sm text-white/40 transition-colors">
      ← Все работы
    </NuxtLink>

    <!-- title -->
    <h1 class="first-letter:text-primary mt-4 text-4xl font-bold">{{ post?.title }}</h1>
    <!-- date -->
    <div class="mt-2 text-sm text-white/40">
      {{
        new Date(post?.date).toLocaleDateString('ru-RU', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      }}
    </div>
    <!--  -->
    <ContentRenderer class="prose prose-invert mt-10" :value="post" />
  </article>
</template>
