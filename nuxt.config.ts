import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['@/assets/styles/main.css'],
  app: {
    head: {
      title: 'Дмитрий Бородин | Full Stack разработчик ',
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
      ],
    },
  },
  fonts: {
    defaults: {
      weights: [400, 900],
      subsets: ['cyrillic-ext', 'cyrillic'],
    },
  },
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxt/icon'],
  vite: {
    plugins: [tailwindcss()],
  },
})
