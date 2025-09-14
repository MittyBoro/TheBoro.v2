<script setup lang="ts"></script>

<template>
  <section ref="hero" class="grid min-h-[80vh] items-center gap-10 py-30 md:grid-cols-2">
    <div class="space-y-6">
      <div class="mb-2">
        Привет, я
        <span class="text-primary">Дмитрий Бородин</span>
      </div>
      <h1 class="m-0 -mx-[2px] text-4xl font-bold md:text-6xl">
        Full Stack
        <span class="text-primary">Developer</span>
      </h1>
      <TypingWords class="my-4" />
      <p class="max-w-md text-lg text-gray-400">
        Более 10 лет создаю веб-сервисы и приложения, которые помогают бизнесу и пользователям.
      </p>
      <div class="flex gap-4 pt-2">
        <NuxtLink to="#portfolio" class="btn btn-primary">Обо мне</NuxtLink>
        <NuxtLink to="#contacts" class="btn btn-outline">Связаться</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.size-52 {
  width: 13rem;
  height: 13rem;
}
.size-64 {
  width: 16rem;
  height: 16rem;
}
.size-40 {
  width: 10rem;
  height: 10rem;
}
.size-48 {
  width: 12rem;
  height: 12rem;
}
</style>
