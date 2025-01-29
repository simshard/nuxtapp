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
            <li><NuxtLink to="/login">Login</NuxtLink></li>
            <li><NuxtLink to="/register">Register</NuxtLink></li>
            <li><NuxtLink to="/my-info">My Info</NuxtLink></li>
            <li><NuxtLink to="/create">Create</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            <li><a href="#" @click.prevent="logout">Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
    
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head'
import { useRouter } from 'vue-router'
  const title = useState('title',() => 'NuxtBlog')
  const description = 'This is a Nuxt 3 didactic example blog'
  const router = useRouter()
  useHead({
  title: title.value,
  meta: [{ name: 'nuxt blog example', content: description }] 
})
const { $apiFetch } = useNuxtApp() as any
async function logout() {
  try {
    await $apiFetch('/logout', {
      method: 'POST',
    })
  } catch (err:any) {
    console.log(err.data)  
  } finally {
    window.location.pathname = '/'
  }
}
</script>

<style>
  .router-link-active {
    font-weight: bold;
    }
</style>