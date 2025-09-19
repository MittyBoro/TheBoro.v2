<script setup lang="ts">
const timeline = [
  {
    period: '2024 — н.в.',
    place: 'Автомобильная компания',
    items: [
      'Развитие и поддержка корпоративного веб-сайта.',
      'Интеграция с CRM и внешними API для автоматизации бизнес-процессов.',
      'Оптимизация производительности, адаптивности и SEO под высокую посещаемость.',
      'Внедрение новых пользовательских сценариев и функционала для клиентов.',
    ],
  },
  {
    period: '2022 — 2024',
    place: 'Cinema Streaming Service',
    items: [
      'Создание платформы видеостриминга с масштабируемой архитектурой.',
      'Разработка фронтенда на Nuxt 3 и бэкенда на Laravel.',
      'Внедрение системы обработки медиаконтента на базе FFmpeg.',
      'Организация хранения и доставки видео с использованием Minio S3.',
      'Обеспечение стабильной работы в условиях большого трафика и медиапотока.',
    ],
  },
  {
    period: '2014 — 2022',
    place: 'Фриланс',
    items: [
      'Реализация интернет-магазинов, новостных порталов и медиа-платформ.',
      'Разработка кастомных решений: боты, парсеры, интерактивные виджеты.',
      'Подготовка сайтов для высокой посещаемости и интеграции со сторонними сервисами.',
      'Проектирование и вёрстка сложных интерфейсов, включая pixel-perfect и UX/UI дизайн.',
    ],
  },
  {
    period: '2010 — 2014',
    place: 'Начало пути',
    items: [
      'Первые коммерческие проекты: сайты-визитки и лендинги.',
      'Работа с HTML, CSS, PHP и MySQL.',
      'Постепенный переход от вёрстки к полноценной веб-разработке.',
    ],
  },
]

const opacityByIndex = (index: number) => {
  return 1 - Math.min(index * 0.01, 0.5)
}
</script>

<template>
  <section class="section">
    <!--  -->
    <div
      class="absolute left-20 mb-10 text-[8.5rem] font-black text-black uppercase opacity-30 blur-xs"
      style="writing-mode: vertical-rl"
    >
      experience
    </div>
    <!--  -->
    <div class="relative grid gap-10 md:grid-cols-5">
      <BaseTitle class="md:col-span-3 md:col-start-3">
        My
        <span class="text-primary">way</span>
      </BaseTitle>
    </div>
    <ul class="relative space-y-10">
      <li
        v-for="(block, index) in timeline"
        :key="index"
        class="group relative grid gap-10 md:grid-cols-5"
        :style="{ opacity: opacityByIndex(index) }"
      >
        <div class="relative mt-1 md:col-span-2">
          <div class="flex items-center justify-end gap-10">
            <!-- Период -->
            <span class="text-white/50 transition-colors group-hover:text-white">
              {{ block.period }}
            </span>

            <!-- Точка -->
            <span
              class="bg-primary/70 group-hover:bg-primary/90 shadow-3xl relative z-3 h-3 w-3 rounded-full backdrop-blur transition group-hover:scale-125 group-hover:blur-[2px]"
            ></span>
          </div>
          <!-- Линия -->
          <span
            v-if="index < timeline.length - 1"
            class="from-primary/30 to-primary/20 absolute top-3 right-[5px] -bottom-14 w-0.5 bg-gradient-to-b"
          ></span>
        </div>

        <!-- Контент -->
        <div class="relative md:col-span-3">
          <h3 class="mb-4 text-xl font-black text-white/90">
            {{ block.place }}
          </h3>
          <ul class="list-disc space-y-1 pl-5 text-gray-300">
            <li v-for="(item, i) in block.items" :key="i">{{ item }}</li>
          </ul>
        </div>
      </li>
    </ul>
  </section>
</template>
