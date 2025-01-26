<template>
  <div class="bg-blue-200 min-h-screen text-gray-900">
    
    <nav class="bg-white shadow text-lg px-6 py-6">
      <div class="container mx-auto flex items-center justify-between px-6">
        <div>
          <NuxtLink to="/"> <img src="/testcardF.jpg" width="150" alt="logo"></NuxtLink>
        </div>
        <div>
          <ul class="flex space-x-12">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/create">Create</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>
      </div>
    </nav>
    
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head'
  const title = useState('title',() => 'NuxtBlog')
  const description = 'This is a Nuxt 3 didactic example blog'
  useHead({
  title: title.value,
  meta: [{ name: 'nuxt blog example', content: description }] 

})
</script>

<style>
  .router-link-active {
    font-weight: bold;
    }
</style>