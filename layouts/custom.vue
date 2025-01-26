<template>
  <div>
    <nav>
  <ul>
    <li><NuxtLink to="/">home</NuxtLink></li>
    <li><NuxtLink to="/about">about</NuxtLink></li>
    <li><NuxtLink to="/posts">blog</NuxtLink></li>
    <li><NuxtLink to="/blog">!blog</NuxtLink></li>
  </ul>
  </nav>
    <slot />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({ layout:'custom'} )
</script>

<style>

</style>