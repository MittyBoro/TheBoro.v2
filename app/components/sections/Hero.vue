<script setup lang="ts">
const { socials } = useAppConfig()
</script>

<template>
  <section
    class="hero relative mb-0 grid min-h-[95vh] items-center gap-10 pt-40 pb-30 md:grid-cols-5 md:pt-30 xl:mb-30"
  >
    <!--  -->
    <div
      class="flex flex-col items-center justify-center text-center md:col-span-3 md:items-start md:text-left"
    >
      <!--  -->
      <div class="mb-6 text-xl">
        Привет, я
        <span class="text-primary">Дмитрий Бородин</span>
      </div>
      <!--  -->
      <h1 class="-mx-[2px] mb-6 text-4xl font-black md:text-6xl">
        Full Stack
        <span class="text-primary">Developer</span>
      </h1>
      <!--  -->
      <BlocksTyping
        class="mb-6 text-sm text-white/70"
        cursorClass="text-primary"
        rand
        :words="[
          'Пишу на Vue и Laravel',
          'Делаю сайты',
          'Работаю с Nuxt',
          'Доверил этот текст ChatGPT',
        ]"
      />

      <!--  -->
      <div class="mb-10 max-w-lg text-xl text-white/90">
        Создаю веб-приложения, которые помогают бизнесу и клиентам
      </div>

      <!--  -->
      <div class="flex flex-wrap justify-center gap-4 md:justify-start">
        <NuxtLink
          v-for="social in socials"
          :key="social.name"
          :to="social.link"
          class="btn"
          target="_blank"
          rel="noopener"
        >
          <Icon :name="social.icon" class="icon" />
          <span class="text">{{ social.title }}</span>
        </NuxtLink>
      </div>
    </div>

    <!--  -->
    <div class="mb-10 flex justify-center md:col-span-2 md:mb-0">
      <BlocksCodeInfo />
    </div>

    <!--  -->
    <div class="pointer-events-none absolute bottom-0 w-full">
      <BlocksScrollDown />
    </div>
  </section>
</template>
