import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/styles/main.css'],
  app: {
    head: {
      title: 'Дмитрий Бородин | Full Stack разработчик',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'description',
          content:
            'Более 10 лет создаю веб-сервисы и приложения, которые помогают бизнесу и пользователям.',
        },
        {
          name: 'theme-color',
          content: '#000',
        },
        { name: 'author', content: 'Dmitrii Borodin' },
      ],
    },
  },
  content: {
    experimental: { nativeSqlite: true },
  },
  fonts: {
    defaults: {
      weights: [400, 900],
      subsets: ['cyrillic-ext', 'cyrillic'],
    },
  },
  modules: ['@nuxt/content', '@nuxt/fonts', '@nuxt/image', '@nuxt/icon'],
  ssr: true,
  vite: {
    plugins: [tailwindcss()],
  },
})
