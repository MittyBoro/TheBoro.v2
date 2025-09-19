<script setup lang="ts"></script>

<template>
  <section class="section grid items-center gap-10 md:grid-cols-5">
    <!--  -->
    <div class="md:col-span-2">
      <BlocksAvatar />
    </div>

    <!--  -->
    <div class="md:col-span-3">
      <!--  -->
      <BaseTitle>
        <span class="text-primary">About</span>
        me
      </BaseTitle>

      <!--  -->
      <div class="prose prose-invert max-w-xl text-lg">
        <p>
          Привет! Я Дмитрий, уже больше 10 лет в веб-разработке — от фронтенда на Vue и Nuxt до
          бекенда на Laravel.
        </p>
        <p>
          Мне нравится собирать из идей рабочие решения, делать интерфейсы удобными, а код — чистым
          и понятным.
        </p>
        <p>
          Сейчас сосредоточен на full stack разработке и проектах, где важны и технология, и
          удобство для пользователей.
        </p>
      </div>
    </div>
  </section>
</template>
