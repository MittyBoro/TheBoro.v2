<script setup lang="ts">
const slug = useRoute().params.slug

const { data: post } = await useAsyncData(`projects-${slug}`, () => {
  return queryCollection('projects').path(`/projects/${slug}`).first()
})

if (!post.value || (post.value.draft && !import.meta.dev)) {
  throw createError({ statusCode: 404, statusMessage: 'Not Found' })
}
</script>

<template>
  <article v-if="post" class="group card card-xl mx-auto mt-20 max-w-4xl overflow-hidden">
    <div
      v-if="post.image"
      class="relative -m-12 mask-b-from-white mask-b-from-50% mask-b-to-black mask-luminance"
    >
      <NuxtImg
        :src="post.image"
        class="pointer-events-none transition select-none"
        :alt="`Image for ${post.title}`"
      />
      <NuxtImg
        :src="post.image"
        class="absolute top-2.5 opacity-20 blur-[1px] transition-opacity group-hover:opacity-5"
        :alt="`Image for ${post.title}`"
      />
    </div>
    <div class="relative" :class="post.image ? '-mt-20' : 'mt-0'">
      <!-- Title -->
      <BlocksProjectTitle :post="post" />
      <!-- Content -->
      <ContentRenderer class="prose prose-invert" :value="post" />
    </div>
  </article>
</template>
