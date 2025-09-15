<script setup lang="ts">
const avatarElement = ref<HTMLElement | null>(null)
const gridStyle = reactive({
  '--mouse-x': '0px',
  '--mouse-y': '0px',
  opacity: 0,
})

const updateLightPosition = () => {
  if (!avatarElement.value) {
    return
  }

  const rect = avatarElement.value?.getBoundingClientRect()
  if (!rect) {
    return
  }

  const x = rect.left + rect.width / 2
  const y = rect.top + rect.height / 2

  gridStyle['--mouse-x'] = `${x}px`
  gridStyle['--mouse-y'] = `${y}px`
  gridStyle.opacity = 0.4
}

onMounted(async () => {
  await nextTick()
  updateLightPosition()
  window.addEventListener('resize', updateLightPosition)
  window.addEventListener('scroll', updateLightPosition, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateLightPosition)
  window.removeEventListener('scroll', updateLightPosition)
})
</script>

<template>
  <div class="avatar-container relative flex items-center justify-center" ref="avatarElement">
    <div class="avatar-shadow"></div>
    <div class="grid-bg grid-bg--colored" :style="gridStyle"></div>
    <NuxtImg
      src="https://github.com/MittyBoro.png"
      alt="Dmitry Borodin"
      class="avatar relative z-20 rounded-full md:size-64 lg:size-72"
      priority
    />
  </div>
</template>

<style scoped lang="scss">
.avatar-container {
  --animation-duration: 2s;
}

.avatar-shadow {
  position: absolute;
  width: 20%;
  height: 20%;
  background: var(--color-primary);
  border-radius: 100% 0%;
  box-shadow: 0 0 0 110px var(--color-primary);
  opacity: 0.4;
  filter: blur(80px);
  animation: border-radius-pulse var(--animation-duration) ease-in-out infinite alternate;
}

.grid-bg {
  --light-size: 220px;

  animation: light-size var(--animation-duration) ease-in-out infinite alternate;
}

@keyframes border-radius-pulse {
  0% {
    border-radius: 0% 100%;
    transform: scale(0.85);
  }

  100% {
    border-radius: 100% 0%;
    transform: skew(-20deg, 0deg);
  }
}

@keyframes light-size {
  0% {
    opacity: 0.1;
  }

  100% {
    opacity: 0.3;
  }
}
</style>
