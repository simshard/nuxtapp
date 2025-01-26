<template>
 <div class="container mx-auto w-1/2 py-8"> 
<p class="font-bold text-gray-700 text-lg">Contact : {{ title }}</p>
   <p>Contact us by this Contact form, by email or telephone and on our social media </p>
   <div class="block" >
   <input type="text" name="contactName" id="contactName" placeholder="Name" class="w-full mt-2">
   <input class="w-full mt-2" type="text" name="contactEmail" id="contactEmail" placeholder="Email">
   <textarea class="w-full mt-2" name="message" id="message" cols="30" rows="5" placeholder="Message"></textarea>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Send</button>
 </div> 
 </div>
</template>

<script lang="ts" setup>
const title = useState('title')
</script>

<style>

</style>