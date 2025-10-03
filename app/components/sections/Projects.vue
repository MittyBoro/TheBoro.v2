<script setup lang="ts">
const { loadMore = false } = defineProps<{
  loadMore?: boolean
}>()

const limit = ref(6)
const showHiddenProjects = useCookie<number | null>('show_hidden_projects')

const { data: projects } = await useAsyncData<any>(
  () => `projects:list:${limit.value}`,
  () => useProjectList(limit.value),
  { watch: [limit, showHiddenProjects] },
)

const { data: projectsCount } = await useAsyncData<number>('projects:count', () =>
  useProjectCount(),
)

// «заморозить» геометрию карточки перед удалением
const freezeLeaving = (el: Element) => {
  const node = el as HTMLElement
  // размеры и позиция до того, как DOM начнёт схлопываться
  const { width, height } = node.getBoundingClientRect()
  const left = node.offsetLeft
  const top = node.offsetTop

  // фиксируем, чтобы элемент не влиял на перестройку grid
  node.style.position = 'absolute'
  node.style.width = `${width}px`
  node.style.height = `${height}px`
  node.style.left = `${left}px`
  node.style.top = `${top}px`
  node.style.zIndex = '1'
  node.style.pointerEvents = 'none'
}
</script>

<template>
  <section id="projects" class="section">
    <div class="grid gap-10 md:grid-cols-5">
      <div class="md:col-span-3 md:col-start-3">
        <div class="relative flex items-baseline gap-3">
          <BaseTitle class="">
            <span class="text-primary">My </span>
            <span>projects</span>
          </BaseTitle>
          <ProjectsUnlockAll />
        </div>
      </div>
    </div>

    <TransitionGroup
      v-if="projects?.length"
      name="list"
      tag="div"
      class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      @before-leave="freezeLeaving"
    >
      <ProjectsCard v-for="project in projects" :key="project.path" :project="project" />

      <div v-if="(projectsCount ?? 0) > limit" class="col-span-full text-center">
        <NuxtLink v-if="!loadMore" to="/projects" class="btn">Все проекты</NuxtLink>
        <button v-else @click="limit += 6" class="btn">Показать еще</button>
      </div>
    </TransitionGroup>

    <p v-else class="text-center text-white/50">Проекты пока не добавлены.</p>
  </section>
</template>

<style scoped>
/* перемещения соседей при добавлении/удалении */
.list-move {
  transition: transform 520ms cubic-bezier(0.22, 1, 0.36, 1);
}

/* ===== ENTER (оставляем красивым каскадом) ===== */
.list-enter-active {
  transform-style: preserve-3d;
  transition:
    transform 640ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 640ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 640ms cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: calc(var(--i) * 60ms);
  will-change: transform, opacity, filter;
}

.list-enter-from {
  transform: perspective(1000px) translateY(16px) translateZ(-24px) rotateX(6deg) scale(0.96);
  opacity: 0;
  filter: blur(8px);
}

.list-enter-to {
  transform: none;
  opacity: 1;
  filter: blur(0);
}

/* ===== LEAVE (упрощаем и делаем стабильным) ===== */
.list-leave-active {
  /* важно: без задержек, чтобы не «спотыкалось» */
  transition:
    transform 360ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 360ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0ms;
  will-change: transform, opacity;
}

.list-leave-from {
  transform: none;
  opacity: 1;
}

.list-leave-to {
  /* лёгкое сжатие и сдвиг — без blur/3D для стабильности */
  transform: translateY(-6px) scale(0.9);
  opacity: 0;
}

/* обёртка карточки */
.list-item {
  backface-visibility: hidden;

  /* чуть улучшает композицию в некоторых браузерах */
  contain: layout paint;
}

@media (prefers-reduced-motion: reduce) {
  .list-enter-active,
  .list-leave-active,
  .list-move {
    transition: none !important;
  }

  .list-enter-from,
  .list-leave-to {
    transform: none !important;
    opacity: 1 !important;
    filter: none !important;
  }
}
</style>
