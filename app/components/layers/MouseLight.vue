<script setup lang="ts">
type Point = { x: number; y: number }

const modelMouseX = defineModel<number>('mouseX')
const modelMouseY = defineModel<number>('mouseY')

const canvasRef = ref<HTMLCanvasElement | null>(null)

const paused = ref(false)
let pauseTimeout: number | undefined

// ⚙️ Конфиг
const blur_amount = 130
const TRAIL_LENGTH = 30
const MAX_RADIUS = 100
const FOLLOW_SPEED = 0.15 // скорость следования (меньше → больше отставание)

// 📦 Переменные состояния
let width = window.innerWidth
let height = window.innerHeight
let animationId: number
let mouseX = width / 3
let mouseY = -100
let trailX = mouseX
let trailY = mouseY
const points: Point[] = Array.from({ length: TRAIL_LENGTH }, () => ({
  x: width / 2,
  y: height / 2,
}))

// ============================
// 🔧 Вспомогательные функции
// ============================

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function resizeCanvas() {
  width = window.innerWidth
  height = window.innerHeight
  if (canvasRef.value) {
    canvasRef.value.width = width
    canvasRef.value.height = height
  }
}

function onMouseMove(e: MouseEvent) {
  mouseX = e.clientX
  mouseY = e.clientY
  paused.value = false

  if (pauseTimeout) {
    clearTimeout(pauseTimeout)
  }
  pauseTimeout = window.setTimeout(() => {
    paused.value = true
  }, 3000)
}

function getPrimaryColor(): string {
  const cssColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--color-primary')
    .trim()

  if (cssColor.startsWith('#')) {
    const bigint = parseInt(cssColor.slice(1), 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return `${r},${g},${b}`
  }

  if (cssColor.startsWith('rgb')) {
    return cssColor.match(/\d+/g)!.slice(0, 3).join(',')
  }

  return '255,0,0' // fallback
}

// ============================
// 🌀 Отрисовка
// ============================

function updateTrail() {
  // плавное приближение "ведущей" точки к мыши
  trailX = lerp(trailX, mouseX, FOLLOW_SPEED)
  trailY = lerp(trailY, mouseY, FOLLOW_SPEED)

  modelMouseX.value = trailX
  modelMouseY.value = trailY

  // Добавляем новую точку
  points.unshift({ x: trailX, y: trailY })
  if (points.length > TRAIL_LENGTH) {
    points.pop()
  }
}

function drawTrail(ctx: CanvasRenderingContext2D, color: string) {
  ctx.clearRect(0, 0, width, height)

  for (let i = 0; i < points.length; i++) {
    const { x, y } = points[i]!
    const t = 1 - i / points.length
    const alpha = t * 0.6
    const radius = MAX_RADIUS * t

    ctx.beginPath()
    ctx.fillStyle = `rgba(${color}, ${alpha})`
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fill()
  }
}

function animate(ctx: CanvasRenderingContext2D, color: string) {
  updateTrail()
  drawTrail(ctx, color)
  animationId = requestAnimationFrame(() => animate(ctx, color))
}

// ============================
// 🎬 Lifecycle
// ============================

onMounted(async () => {
  await nextTick()
  const canvas = canvasRef.value
  if (!canvas) {
    return
  }

  const ctx = canvas.getContext('2d')
  if (!ctx) {
    return
  }

  const rgb = getPrimaryColor()

  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
  window.addEventListener('mousemove', onMouseMove)

  animate(ctx, rgb)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeCanvas)
  window.removeEventListener('mousemove', onMouseMove)
  cancelAnimationFrame(animationId)
})
</script>

<template>
  <canvas ref="canvasRef" class="mouse-trail" :class="{ paused: paused }"></canvas>
</template>

<style scoped lang="css">
.mouse-trail {
  position: fixed;
  opacity: 0.666;
  filter: blur(v-bind(blur_amount + 'px'));
  transition: opacity 0.5s;
  pointer-events: none;
  inset: 0;
}

.mouse-trail.paused {
  opacity: 0.444;
  transition-duration: 3s;
}
</style>
