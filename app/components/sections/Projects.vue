<script setup lang="ts">
const { loadMore = false } = defineProps<{
  loadMore?: boolean
}>()

const { data: allProjects } = await useAsyncData('projects', () =>
  queryCollection('projects').where('published', '=', true).order('date', 'DESC').all(),
)

const limit = ref(6)

const projects = computed(() => allProjects.value?.slice(0, limit.value) ?? [])
</script>

<template>
  <section id="projects" class="section">
    <div class="relative text-center">
      <BaseTitle class="md:col-span-3 md:col-start-3">
        <span class="text-primary">My </span>
        <span>projects</span>
      </BaseTitle>
    </div>

    <div v-if="projects.length" class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="project in projects"
        :key="project.path"
        class="card group flex cursor-pointer flex-col overflow-hidden"
        @click="navigateTo(project.path)"
      >
        <ProjectsPreview :project="project" class="-m-9 opacity-80" />

        <div class="relative -mt-6 flex h-full flex-col">
          <h3
            class="group-hover:text-primary mb-3 text-xl font-semibold text-white transition-colors duration-300"
          >
            <a :href="project.path">{{ project.title }}</a>
          </h3>

          <p class="text-white-60 mb-auto flex-1 text-sm">
            {{ project.description }}
          </p>

          <div class="tags mt-4">
            <span v-for="tag in project.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </article>

      <div v-if="(allProjects?.length ?? 0) > limit" class="col-span-full text-center">
        <template v-if="limit < (allProjects?.length ?? 0)">
          <NuxtLink v-if="!loadMore" to="/projects" class="btn">Все проекты</NuxtLink>
          <button v-else @click="limit += 6" class="btn">Показать еще</button>
        </template>
      </div>
    </div>

    <p v-else class="text-white/50">Проекты пока не добавлены.</p>
  </section>
</template>
