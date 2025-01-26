<template>
    <div>
      <div>Counter: {{ count }}</div>
      <!-- <div>Plus Ten: {{ plusTen }}</div> -->
      <button @click="decrement">Decrement</button>
      <button @click="increment">Increment</button>
    </div>
  </template>

  <script setup>
  const count = ref(0)

  function decrement() {
    count.value--
  }
  function increment() {
    count.value++
  }
  </script>