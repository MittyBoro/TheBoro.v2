<script setup lang="ts">
// Можно позже вынести данные в отдельный JSON, если захочешь
const timeline = [
  {
    period: '2024 — настоящее время',
    place: ' Сеть автосалонов и технических центров',
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
</script>

<template>
  <section class="relative py-20">
    <TitleH2>
      My
      <span class="text-primary">way</span>
    </TitleH2>

    <div class="relative mx-auto max-w-4xl">
      <!-- Вертикальная линия -->
      <div
        class="from-primary/70 to-primary/0 absolute top-3 bottom-3 left-4 w-0.5 bg-gradient-to-b"
      ></div>

      <ul class="space-y-12">
        <li v-for="(block, index) in timeline" :key="index" class="group relative pl-12">
          <!-- Точка на линии -->
          <span
            class="bg-primary/50 group-hover:bg-primary/90 shadow-3xl absolute top-2.5 left-[0.7em] block h-3 w-3 rounded-full backdrop-blur-xs transition group-hover:scale-125 group-hover:blur-[2px]"
          ></span>
          <!-- Контент -->

          <h3 class="mb-2 text-xl font-bold text-white/90">
            {{ block.place }}
          </h3>
          <h4 class="mb-4 text-xs">
            <span class="text-primary">{{ block.period }}</span>
          </h4>
          <ul class="list-disc space-y-1 pl-5 text-gray-300">
            <li v-for="(item, i) in block.items" :key="i">{{ item }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>
