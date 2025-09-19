<script setup lang="ts">
const mouseX = ref(0)
const mouseY = ref(0)
</script>

<template>
  <div>
    <!-- Свечение курсора -->
    <LayersMouseLight class="z-10" v-model:mouseX="mouseX" v-model:mouseY="mouseY" />

    <!-- Сетка -->
    <div class="grid-bg"></div>

    <!-- Сетка с цветом -->
    <div
      class="grid-bg grid-bg--colored"
      :style="{ '--mouse-x': `${mouseX}px`, '--mouse-y': `${mouseY}px` }"
    ></div>
  </div>
</template>

<style lang="scss">
.grid-bg {
  --grid-color: rgb(255 255 255 / 5%);
  --grid-size: 32px;
  --light-size: 170px;
  --mouse-x: 0;
  --mouse-y: 0;

  position: fixed;
  z-index: 20;
  background-image:
    linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
    linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px);
  background-position: 50% 50%;
  background-size: var(--grid-size) var(--grid-size);
  background-attachment: fixed;
  pointer-events: none;
  mask-composite: intersect;
  inset: 0;

  &--colored {
    --grid-color: var(--color-primary);

    opacity: 0.2;
    mask-image: radial-gradient(
      circle at var(--mouse-x) var(--mouse-y),
      #000 0%,
      transparent var(--light-size)
    );
  }
}
</style>
