<script setup lang="ts">
const route = useRoute()

const isOpen = ref(false)

const links = reactive([
  { name: 'Главная', href: '/' },
  { name: 'Обо мне', href: '/#about' },
  { name: 'Резюме', href: '/#way' },
  { name: 'Проекты', href: '/projects' },
])

const { socials } = useAppConfig()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <!-- Header -->
  <header
    class="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xs"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <!-- Логотип -->
      <NuxtLink
        to="/"
        class="logo group relative flex -translate-y-0.5 items-baseline space-x-1 text-lg font-black text-white/80 transition-colors hover:text-white"
        @click="scrollToTop"
      >
        <span>
          <span class="text-primary">The</span>
          Boro.ru
        </span>
        <span
          class="pointer-events-none absolute top-2 opacity-70 transition group-hover:top-1.5 group-hover:opacity-10"
        >
          <span class="text-primary">The</span>
          Boro.ru
        </span>
      </NuxtLink>

      <!-- Контакты -->
      <div class="mr-4 ml-auto flex items-center gap-2 md:mr-8 md:gap-4">
        <NuxtLink
          v-for="social in socials.slice(0, 4)"
          :key="social.name"
          :to="social.link"
          target="_blank"
          rel="noopener"
          class="hover:text-primary flex items-center text-lg text-white/50 transition-colors md:text-xl"
          :title="social.title"
        >
          <Icon :name="social.icon" />
        </NuxtLink>
      </div>

      <!-- Кнопка меню (бургер -> крестик) -->
      <div
        @click="isOpen = !isOpen"
        class="hover:text-primary relative flex h-8 w-8 cursor-pointer flex-col items-center justify-center transition-colors"
        aria-label="Меню"
      >
        <span
          class="absolute h-0.5 w-6 bg-current transition-all duration-300"
          :class="isOpen ? 'translate-y-0 rotate-45' : '-translate-y-1'"
        ></span>
        <!-- <span
          class="absolute h-0.5 w-6 bg-current transition-all duration-300"
          :class="isOpen ? 'opacity-0' : 'opacity-100'"
        ></span> -->
        <span
          class="absolute h-0.5 w-6 bg-current transition-all duration-300"
          :class="isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1'"
        ></span>
      </div>
    </div>
  </header>

  <!-- Fullscreen Menu Overlay -->
  <transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/90 px-4 text-white backdrop-blur-sm"
    >
      <!-- Навигация -->
      <nav class="space-y-4 text-center text-xl font-black xl:space-y-8 xl:text-3xl">
        <NuxtLink
          v-for="link in links"
          :key="link.href"
          :to="link.href"
          class="hover:text-primary block text-white transition-colors"
          active-class="text-primary"
          @click="isOpen = false"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>

      <!-- Контакты -->
      <nav class="mt-12 flex grid-cols-4 flex-wrap justify-center gap-4 xl:mt-20 xl:grid">
        <NuxtLink
          v-for="(social, index) in socials"
          :key="social.name"
          :to="social.link"
          class="btn col-span-2"
          target="_blank"
          rel="noopener"
          :class="{ 'col-start-2': socials.length % 2 !== 0 && index === socials.length - 1 }"
        >
          <Icon :name="social.icon" class="icon" />
          <span class="text">{{ social.title }}</span>
        </NuxtLink>
      </nav>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition:
    transform 0.4s ease,
    opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.logo .text-primary {
  position: relative;

  &::after {
    position: absolute;
    bottom: -0.25em;
    left: 0;
    z-index: -1;
    width: 130%;
    height: 0.13em;
    background: var(--color-primary);
    opacity: 1;
    transition: width 0.3s ease;
    content: '';
  }
}
</style>
