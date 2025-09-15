<script setup lang="ts">
const words = [
  'Пишу на Vue и Laravel',
  'Делаю сайты',
  'Улучшаю интерфейсы',
  'Работаю с Nuxt',
  'Доверил этот текст ChatGPT',
]

const display = ref('')
const currentWordIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)
let timer: number | undefined

const typeSpeed = 70 // ms per char while typing
const deleteSpeed = 30 // ms per char while deleting
const holdDelay = 900 // ms to hold full word before deleting
const pauseBetweenWords = 300 // small pause after delete before next

function tick() {
  const word = words[currentWordIndex.value]!

  if (!isDeleting.value) {
    display.value = word.substring(0, charIndex.value + 1)
    charIndex.value++
    if (charIndex.value === word.length) {
      isDeleting.value = true
      timer = window.setTimeout(tick, holdDelay)
      return
    }
    timer = window.setTimeout(tick, typeSpeed)
  } else {
    display.value = word.substring(0, charIndex.value - 1)
    charIndex.value--
    if (charIndex.value === 0) {
      if (currentWordIndex.value === 0) {
        // shuffle
        words.sort(() => Math.random() - 0.5)
      }
      isDeleting.value = false
      currentWordIndex.value = (currentWordIndex.value + 1) % words.length
      timer = window.setTimeout(tick, pauseBetweenWords)
      return
    }
    timer = window.setTimeout(tick, deleteSpeed)
  }
}

onMounted(() => {
  tick()
})

onBeforeUnmount(() => {
  if (timer) {
    clearTimeout(timer)
  }
})
</script>

<template>
  <div class="flex items-center">
    <span class="text-white">
      {{ display }}
    </span>
    <span class="text-primary animate-cursor ml-[2px] scale-x-150">|</span>
  </div>
</template>

<style scoped>
@keyframes cursor-blink {
  0%,
  45% {
    opacity: 1;
  }

  50%,
  95% {
    opacity: 0;
  }
}

.animate-cursor {
  animation: cursor-blink 1s steps(1) infinite;
}
</style>
