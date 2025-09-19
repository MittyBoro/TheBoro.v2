<script setup lang="ts"></script>

<template>
  <section class="hero relative mb-30 grid min-h-[95vh] items-center gap-10 py-30 md:grid-cols-5">
    <!--  -->
    <div class="flex flex-col justify-center md:col-span-3">
      <!--  -->
      <div class="mb-5 text-xl">
        Привет, я
        <span class="text-primary">Дмитрий Бородин</span>
      </div>
      <!--  -->
      <h1 class="m-0 -mx-[2px] text-4xl font-black md:text-6xl">
        Full Stack
        <span class="text-primary">Developer</span>
      </h1>
      <!--  -->
      <TypingWords class="my-6 text-sm" />
      <!--  -->
      <div class="max-w-lg text-xl text-white/90">
        Создаю веб-приложения, которые помогают бизнесу и клиентам.
      </div>
      <!--  -->
      <div class="flex gap-4 pt-6">
        <NuxtLink to="#portfolio" class="btn btn-primary">Обо мне</NuxtLink>
        <NuxtLink to="#contacts" class="btn btn-outline">Связаться</NuxtLink>
      </div>
    </div>

    <!--  -->
    <div class="flex justify-center md:col-span-2">
      <CodeInfo />
    </div>

    <!--  -->
    <div class="pointer-events-none absolute bottom-0 w-full">
      <ScrollDown />
    </div>
  </section>
</template>
