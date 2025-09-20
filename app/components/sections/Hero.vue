<script setup lang="ts">
const { socials } = useAppConfig()
</script>

<template>
  <section class="hero relative mb-30 grid min-h-[95vh] items-center gap-10 py-30 md:grid-cols-5">
    <!--  -->
    <div class="flex flex-col justify-center md:col-span-3">
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
        Создаю веб-приложения, которые помогают бизнесу и клиентам.
      </div>

      <!--  -->
      <div class="flex flex-wrap gap-4">
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
    <div class="flex justify-center md:col-span-2">
      <BlocksCodeInfo />
    </div>

    <!--  -->
    <div class="pointer-events-none absolute bottom-0 w-full">
      <BlocksScrollDown />
    </div>

    <BlocksTyping
      class="fixed bottom-[5vw] left-1/2 -z-1 w-[2em] -translate-x-1/2 text-[10rem] font-black text-black uppercase opacity-30 blur-sm"
      prefix="›:"
      :words="['4', '8', '15', '16', '23', '42']"
      :typeSpeed="150"
      :deleteSpeed="80"
      :holdDelay="1200"
    />
  </section>
</template>
