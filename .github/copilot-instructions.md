## Руководство для AI‑ассистента по этому репозиторию

Назначение: Портфолио / витрина проектов на Nuxt 4 + @nuxt/content + Tailwind v4 (`@tailwindcss/vite`). Акцент: статическая генерация с динамической фильтрацией проектов из контента. Изменения держать компактными, типобезопасными и согласованными с существующими composable и компонентными паттернами.

### Стек и сборка

- Framework: Nuxt 4 (Vue 3, `<script setup>` + TypeScript). Контент через `@nuxt/content` (query builder, experimental SQLite `nativeSqlite`).
- Стили: Tailwind CSS v4 (`app/assets/styles/main.css`) + дизайн‑токены в блоке `@theme`.
- Скрипты:
  - Dev: `npm run dev` (горячая перезагрузка)
  - Статическая генерация: `npm run generate`
  - Сборка (SSR / адаптер готов): `npm run build`
  - Предварительный просмотр: `npm run preview`
- Postinstall: `nuxt prepare` (не удалять — поддерживает типы и сгенерированный контент).

### Архитектура контента

- Файлы проектов: `content/projects/YYYYMM.slug.md`. Доступ по `path` (часть после `/projects/`).
- Схема (`content.config.ts`): `title`, `description`, `date` (приведение типа), `published`, `hidden`, `tags[]`, `preview` (медиа), опционально `demo`, `github`.
- Любые запросы — только через `useProjects` (не копировать `queryCollection`).

### Composable `useProjects`

Файл: `app/composables/useProjects.ts`.

- База: `where('published','=',true)`.
- Скрытые: если cookie `show_hidden_projects` !== 2 → допускаем только `hidden IS NULL` или `hidden = false` (логика через `orWhere`).
- Теги: query `?tag=...` → `LIKE` по `tags` (флаг `checkTag`).
- Методы: `getList(limit, tag?)`, `getByPath(path)`, `getCount()`, `getAllTags()` (теги >2 вхождений), `getSimilarByTags(tags, excludePath, limit)`. Новые варианты — строить от `listQuery()` (единый select + сортировка DESC по `date`).

### Страницы / маршруты

- Главная: `pages/index.vue` — просто сборка секций из `components/sections/`.
- Проект: `pages/projects/[slug].vue` → `useAsyncData` + `getByPath`; 404 если нет или не опубликован в проде (`!import.meta.dev`).
- Листинг / фильтр: `components/sections/Projects.vue` (повторное использование на `/projects`). Расширения встраивать в существующий `limit` + reactive deps.

### Асинхронность

- Использовать `useAsyncData` с неймспейс‑ключами (`projects:list:<limit>`, `projects:tags`, `projects:count`).
- `watch` массивы включают: `limit`, cookie `show_hidden_projects`, вычисляемый `currentTag`.
- Анимация списков: `TransitionGroup` + `freezeLeaving` (не писать уникальные хаки).

### UI и стили

- Семантические классы: `btn`, `card`, `tag` (см. `main.css`). Варианты — модификаторы (`btn-outline`, `card-sm`).
- Анимационные классы списка: префикс `list-*`, поддержка `prefers-reduced-motion` обязательна (пример в `Projects.vue`).
- Токены темы: расширять в `@theme` (не хардкодить цвета/шрифты напрямую).

### Организация компонентов

- Директории: `base/`, `blocks/`, `layers/`, `sections/`, `projects/` — соблюдать назначение.
- Именование: PascalCase, `<script setup lang="ts">`, строго типизировать props.

### Ошибки и доступ

- Использовать `createError({ statusCode, statusMessage })` для 404.
- Не раскрывать скрытые/черновые проекты в продакшене без cookie‑override.

### Производительность

- Пошаговая подгрузка: `limit` старт 6, увеличивается по 6. Текущее пересчитывание полного списка приемлемо.
- Избегать N+1 запросов — добавлять методы в `useProjects`.

### Добавление проекта

1. Создать `content/projects/YYYYMM.slug.md`.
2. Заполнить фронтматтер (минимум: `title`, `description`, `date`, `published: true`).
3. При необходимости: `tags`, `preview` (из `public/content/projects/`), `demo`, `github`.

### Медиа

- Превью изображения: `public/content/projects/` → поле `preview`.
- Возможное улучшение: перейти на `<NuxtImg>` (сейчас — обычный вывод).

### Расширения (примеры)

- Фильтр по году: добавить параметр `year` → условие `.where('date','LIKE','2024%')` в `query()`; чипы в `Projects.vue` + добавить ref в `watch`.
- Похожие проекты: `getSimilarByTags(tags, currentPath)` + новый компонент в `projects/`.

### Do / Avoid

- DO: централизовать запросы через `useProjects`.
- DO: следовать единому неймингу анимаций (`list-*`).
- AVOID: произвольные задержки — использовать `calc(var(--i) * 60ms)`.
- AVOID: внешние глобальные стейт‑менеджеры.

### Если не уверены

Перед рефакторингом посмотреть существующие паттерны (`ProjectsCard`, `Projects.vue`) и повторить стиль.

---

Нужны дополнительные разделы (деплой, тесты, оптимизация изображений) — дайте знать.
