<script setup lang="ts">
const { words, cursorClass, rand, typeSpeed, deleteSpeed, holdDelay, pauseBetweenWords } =
  withDefaults(
    defineProps<{
      words: string[]
      cursorClass?: string
      prefix?: string
      rand?: boolean
      typeSpeed?: number
      deleteSpeed?: number
      holdDelay?: number
      pauseBetweenWords?: number
    }>(),
    {
      cursorClass: '',
      prefix: '',
      rand: false,
      typeSpeed: 70,
      deleteSpeed: 30,
      holdDelay: 900,
      pauseBetweenWords: 300,
    },
  )

const display = ref('')
const currentWordIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)
let timer: number | undefined

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
      if (currentWordIndex.value === 0 && rand) {
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
  <div class="inline-flex items-center">
    <span>{{ prefix }}</span>
    <span>
      {{ display }}
    </span>
    <span :class="cursorClass" class="animate-cursor ml-[0.1em] scale-x-150">|</span>
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
