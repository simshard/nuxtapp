<template>
  <div class="container mx-auto w-1/2 py-8 divide-y space-y-8 divide-red-300"> 
     <h1 class="font-bold text-gray-800 text-4xl">Home : Posts</h1>
     <PostItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script lang="ts" setup>
// const nuxtApp = useNuxtApp()
const title = useState('title', () => 'NuxtBlog Posts')
const route = useRoute('/')
//const q = useRoute().name
const  apiBaseUrl = 'http://localhost:8000'
interface Post {
  id: number;
  'title': string;
  'content': string;
  // add other properties of Post here
}

const { data:posts } = await useFetch<Post[]>(`${apiBaseUrl}/api/posts`)
//const posts = await (useNuxtApp() as any).$apiFetch('/api/posts')
</script>

<style>

</style>