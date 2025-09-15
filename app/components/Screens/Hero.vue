<script setup lang="ts"></script>

<template>
  <section ref="hero" class="hero grid items-center gap-10 md:grid-cols-3">
    <!--  -->
    <div class="flex min-h-[90vh] flex-col justify-center py-54 md:col-span-2">
      <!--  -->
      <div class="mb-2 text-xl">
        Привет, я
        <span class="text-primary">Дмитрий Бородин</span>
      </div>
      <!--  -->
      <h1 class="m-0 -mx-[2px] text-4xl font-bold md:text-7xl">
        Full Stack
        <span class="text-primary">Developer</span>
      </h1>
      <!--  -->
      <TypingWords class="my-5 text-xl" />
      <!--  -->
      <div class="max-w-lg text-xl text-white/60">
        Создаю веб-сервисы и приложения, которые помогают бизнесу и пользователям.
      </div>
      <!--  -->
      <div class="flex gap-4 pt-5">
        <NuxtLink to="#portfolio" class="btn btn-primary">Обо мне</NuxtLink>
        <NuxtLink to="#contacts" class="btn btn-outline">Связаться</NuxtLink>
      </div>
    </div>

    <!--  -->
    <div class="sticky top-54 flex justify-center">
      <Avatar />
    </div>

    <!--  -->
    <div class="md:col-span-2">
      <ScreensAbout />
    </div>
    <!--  -->
    <div class="md:col-span-2">
      <ScreensWay />
    </div>
  </section>
</template>
