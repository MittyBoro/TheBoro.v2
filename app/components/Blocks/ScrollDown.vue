<script setup lang="ts">
const scrollNext = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  })
}
</script>

<template>
  <svg
    class="down-arrow"
    xmlns="http://www.w3.org/2000/svg"
    width="46"
    height="46"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    @click="scrollNext"
  >
    <path d="M6 9l6 6 6-6" class="chevron chevron-1" />
    <path d="M6 15l6 6 6-6" class="chevron chevron-2" />
  </svg>
</template>

<style scoped>
.down-arrow {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  pointer-events: all;
}

.chevron {
  opacity: 0.3;
  animation: blink 1.8s infinite;
}

.chevron-1 {
  animation-delay: 0s;
}

.chevron-2 {
  animation-delay: 0.3s;
}

@keyframes blink {
  0%,
  80%,
  100% {
    transform: translateY(0);
    opacity: 0.2;
  }

  40% {
    transform: translateY(3px);
    opacity: 1;
  }
}
</style>
