<!-- components/UnlockHiddenProjectsPopover.vue -->
<script setup lang="ts">
const cookie = useCookie<number | null>('show_hidden_projects', {
  default: () => 0,
  maxAge: 30 * 24 * 60 * 60,
  path: '/',
})

function unlock() {
  const newVal = (cookie.value ?? -1) + 1

  cookie.value = newVal >= 3 ? 0 : newVal
}

const icon = computed(() => {
  switch (cookie.value) {
    case 1:
      return 'mdi:lock-open-outline'
    case 2:
      return 'mdi:lock-open-variant-outline'
    default:
      return 'mdi:lock-outline'
  }
})
</script>

<template>
  <div type="button" class="btn btn-square" @click="unlock">
    <Icon :name="icon" class="icon" />
  </div>
</template>
