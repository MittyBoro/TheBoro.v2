<script setup lang="ts">
const birthday = '1996-07-10'
const experienceStart = '2010-08-31'
</script>

<template>
  <GridBackgroundColored :opacity="0.7">
    <div class="card card-sm font-mono">
      <div class="text-gray-400">// Software Engineer</div>
      <div>
        <span class="text-gray-500">{</span>
      </div>
      <div class="pl-6">
        <span class="text-primary">"name"</span>
        <span class="mr-1 text-gray-500">:</span>
        <span class="text-gray-200">"Dmitrii Borodin"</span>
        <span class="text-gray-500">,</span>
      </div>
      <div class="pl-6">
        <span class="text-primary">"age"</span>
        <span class="mr-1 text-gray-500">:</span>
        <span class="text-gray-200">"{{ yearsWithEmoji(birthday, 'years old') }}"</span>
        <span class="text-gray-500">,</span>
      </div>
      <div class="pl-6">
        <span class="text-primary">"experience"</span>
        <span class="mr-1 text-gray-500">:</span>
        <span class="text-gray-200">"{{ yearsWithEmoji(experienceStart, 'years') }}"</span>
        <span class="text-gray-500">,</span>
      </div>
      <div class="pl-6">
        <span class="text-primary">"stack"</span>
        <span class="mr-1 text-gray-500">:</span>
        <span class="text-gray-500">[</span>
        <span class="text-gray-200">"Vue"</span>
        <span class="mr-1 text-gray-500">,</span>
        <span class="text-gray-200">"Nuxt"</span>
        <span class="mr-1 text-gray-500">,</span>
        <span class="text-gray-200">"Laravel"</span>
        <span class="text-gray-500">]</span>
        <span class="text-gray-500">,</span>
      </div>
      <div class="pl-6">
        <span class="text-primary">"hobbies"</span>
        <span class="mr-1 text-gray-500">:</span>
        <span class="text-gray-500">[</span>
        <span class="text-gray-200">"Travel"</span>
        <span class="mr-1 text-gray-500">,</span>
        <span class="text-gray-200">"Photo"</span>
        <span class="mr-1 text-gray-500">,</span>
        <span class="text-gray-200">"Games"</span>
        <span class="text-gray-500">]</span>
        <span class="text-gray-500">,</span>
      </div>
      <div class="pl-6">
        <span class="text-primary">"learning"</span>
        <span class="mr-1 text-gray-500">:</span>
        <span class="text-gray-200">"Always"</span>
      </div>
      <div>
        <span class="text-gray-500">}</span>
      </div>
    </div>
  </GridBackgroundColored>
</template>
