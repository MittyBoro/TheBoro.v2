<template>
  <h2 class="group/title section__title mb-12 text-4xl font-black">
    <div class="relative">
      <div class="opacity-90">
        <slot />
      </div>
      <div
        class="pointer-events-none absolute top-3 right-0 left-0 opacity-50 transition group-hover/title:top-1.5 group-hover/title:opacity-10"
      >
        <slot />
      </div>
    </div>
  </h2>
</template>

<style lang="scss">
.section {
  &__title .text-primary {
    position: relative;

    &::after {
      position: absolute;
      bottom: -0.25em;
      z-index: -1;
      width: 30%;
      height: 0.13em;
      background: var(--color-primary);
      opacity: 1;
      transition: width 0.3s ease;
      content: '';
    }

    &:first-child {
      &::after {
        left: 0;
      }
    }

    &:last-child {
      &::after {
        right: 0;
      }
    }
  }

  &:hover .section__title .text-primary::after {
    width: 130%;
  }
}
</style>
