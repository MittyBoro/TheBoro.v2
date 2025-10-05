<script setup lang="ts">
const { socials } = useAppConfig()
</script>

<template>
  <footer class="pt-16 pb-16 text-center text-xs text-white/70 lg:pt-24">
    <!--  -->
    <div class="mb-12 flex flex-wrap justify-center gap-4">
      <NuxtLink
        v-for="social in socials"
        :key="social.name"
        :to="social.link"
        class="btn btn-square"
        target="_blank"
        rel="noopener"
      >
        <Icon :name="social.icon" class="icon" />
      </NuxtLink>
    </div>
    <div class="text-center text-xs">
      <div>TheBoro.ru © 2025. All rights reserved.</div>
      <div class="mt-2">Made by Dima Boro with ❤️</div>
    </div>
  </footer>
</template>
