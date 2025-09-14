<script setup lang="ts">
const mouseX = ref(0)
const mouseY = ref(0)
</script>

<template>
  <div>
    <!-- Свечение курсора -->
    <MouseLight class="z-10" v-model:mouseX="mouseX" v-model:mouseY="mouseY" />

    <!-- Сетка -->
    <div class="grid-bg"></div>
    <!-- Сетка с цветом -->
    <div
      class="grid-bg grid-bg--colored"
      :style="{ '--mouse-x': `${mouseX}px`, '--mouse-y': `${mouseY}px` }"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.grid-bg {
  --grid-color: rgb(255 255 255 / 5%);
  --grid-size: 32px;
  --mouse-x: 0;
  --mouse-y: 0;

  position: absolute;
  position: fixed;
  z-index: 20;
  background-image:
    linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
    linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px);
  background-size: var(--grid-size) var(--grid-size);
  mask-composite: 'intersect';
  inset: 0;
  mask-image: radial-gradient(circle at var(--mouse-x) var(--mouse-y), transparent 0%, #000 150px);

  &--colored {
    --grid-color: var(--color-primary);

    opacity: 0.4;
    mask-image: radial-gradient(
      circle at var(--mouse-x) var(--mouse-y),
      #000 0%,
      transparent 150px
    );
  }
}
</style>
