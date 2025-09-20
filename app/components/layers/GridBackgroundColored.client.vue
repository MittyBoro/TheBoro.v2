<script setup lang="ts">
const gridElement = ref<HTMLElement | null>(null)
const gridStyle = reactive({
  '--mouse-x': '0px',
  '--mouse-y': '0px',
  opacity: 0,
})

const props = defineProps<{
  opacity?: number
}>()

const updateLightPosition = () => {
  if (!gridElement.value) {
    return
  }

  const rect = gridElement.value?.getBoundingClientRect()
  if (!rect) {
    return
  }

  const x = rect.left + rect.width / 2
  const y = rect.top + rect.height / 2

  gridStyle['--mouse-x'] = `${x}px`
  gridStyle['--mouse-y'] = `${y}px`
  gridStyle.opacity = 0.3
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
  <div class="grid-container relative flex items-center justify-center" ref="gridElement">
    <div class="absolute flex items-center justify-center" :style="{ opacity: props.opacity || 1 }">
      <div class="grid-shadow"></div>
      <div class="grid-bg grid-bg--colored" :style="gridStyle"></div>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.grid-container {
  --animation-duration: 2s;
}

.grid-shadow {
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

  animation: light-pulse var(--animation-duration) ease-in-out infinite alternate;
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

@keyframes light-pulse {
  0% {
    opacity: 0.1;
  }

  100% {
    opacity: 0.3;
  }
}
</style>
