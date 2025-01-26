<template>
  <div class="container mx-auto w-1/2 py-8">
    <Title>{{ post.title }} | {{ title }}</Title>
    <h3 class="text-3xl font-bold">
      <NuxtLink :to="`/posts/${ post.id}`">{{post.title}}</NuxtLink>
    </h3>
    <div class="mt-4 post-meta flex items-center space-x-2">
      <div class="font-bold ">{{post.user.name}}</div>
      <div>&middot;</div>
      <div>{{ format(new Date(post.created_at), 'MMMM dd, yyyy') }}</div>
      
    </div>
    <div class="post-content mt-4">
     {{ post.content }}
    </div>  
 <div class="font-bold text-2xl text-indigo-400">&there4;</div>
  </div>
</template>
<script setup>
import { format } from 'date-fns'

const title = useState('title')
const route = useRoute()
const  apiBaseUrl = 'http://localhost:8000'
const { data:post }=await useFetch(`${apiBaseUrl}/api/posts/${route.params.id}`)
</script>