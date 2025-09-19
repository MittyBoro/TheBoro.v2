<script setup lang="ts">
const stack = [
  {
    category: 'Frontend',
    items: [
      { name: 'Vue.js', icon: 'logos:vue' },
      { name: 'Nuxt.js', icon: 'logos:nuxt-icon' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'Tailwind', icon: 'logos:tailwindcss-icon' },
      { name: 'Sass / SCSS', icon: 'logos:sass' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Laravel', icon: 'logos:laravel' },
      { name: 'PHP', icon: 'logos:php' },
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'MySQL', icon: 'logos:mysql-icon' },
      { name: 'PostgreSQL', icon: 'logos:postgresql' },
      { name: 'Redis', icon: 'logos:redis' },
    ],
  },
  {
    category: 'DevOps & Infrastructure',
    items: [
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'Docker', icon: 'logos:docker-icon' },
      { name: 'NGINX', icon: 'logos:nginx' },
      { name: 'GitHub', icon: 'mdi:github' },
      { name: 'Cloudflare', icon: 'logos:cloudflare-icon' },
      { name: 'Ubuntu', icon: 'logos:ubuntu' },
    ],
  },
  {
    category: 'AI & Tools',
    items: [
      { name: 'ChatGPT', icon: 'simple-icons:openai' },
      { name: 'Copilot', icon: 'simple-icons:githubcopilot' },
      { name: 'VS Code', icon: 'logos:visual-studio-code' },
      { name: 'Figma', icon: 'logos:figma' },
      { name: 'Obsidian', icon: 'logos:obsidian-icon' },
    ],
  },
]
</script>

<template>
  <section class="relative m-auto w-full pb-60">
    <!--  -->
    <div class="relative grid gap-10 md:grid-cols-5">
      <TitleH2 class="md:col-span-3 md:col-start-3">
        <span class="text-primary">Stack</span>
        & Tools
      </TitleH2>
    </div>

    <div class="relative grid gap-x-6 gap-y-12 md:grid-cols-5">
      <template v-for="(group, index) in stack" :key="index">
        <!-- Заголовок категории (как даты в MyWay) -->
        <div class="col-span-2 flex items-center justify-end">
          <h3
            class="text-right text-lg font-semibold tracking-wide text-gray-300 uppercase md:pr-10"
          >
            {{ group.category }}
          </h3>
        </div>

        <!-- Иконки -->
        <div class="col-span-3 grid grid-cols-5 gap-4 md:grid-cols-6">
          <div
            v-for="item in group.items"
            :key="item.name"
            class="card card-p-0 group flex aspect-square flex-col items-center justify-center"
          >
            <Icon :name="item.icon" class="mb-4 text-2xl transition group-hover:scale-110" />
            <span class="text-center text-xs text-gray-400 transition group-hover:text-white">
              {{ item.name }}
            </span>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>
