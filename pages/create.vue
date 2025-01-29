<template>
  <div class="container mx-auto w-1/2 py-8">
    <ul
      v-if="errors.length > 0"
      className="mb-4 list-disc list-inside text-sm text-red-600"
    >
      <li v-for="(error, index) in errors" :key="index">
        {{ error }}
      </li>
    </ul>
    <form action="#" class="space-y-6" @submit.prevent="createPost">
      <div>
        <label for="title" class="block font-semibold">Title</label>
        <input
          type="text"
          v-model="title"
          id="title"
          class="px-2 py-2 w-full shadow rounded mt-2"
        />
      </div>
      <div>
        <label for="content" class="block font-semibold">Content</label>
        <textarea
          v-model="content"
          name="content"
          id="content"
          cols="30"
          rows="10"
          class="px-2 py-2 w-full shadow rounded mt-2"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2"
        >
          Create Post
        </button>
        <span v-show="isLoading">Loading...</span>
      </div>
    </form>
  </div>
</template>

<script setup>
const title = ref("");
const content = ref("");
const isLoading = ref(false);
const errors = ref([]);
const route = useRoute();
const router = useRouter();

async function createPost() {
  const apiBaseUrl = "http://localhost:8000";
  isLoading.value = true;
  try {
    //const post = await useFetch(`${apiBaseUrl}/api/post`, {
      const post = await useNuxtApp().$apiFetch(`${apiBaseUrl}/api/post`, {
      method: "POST",
      body: {
        title: title.value,
        content: content.value,
      },
    });
    //alert(title.value+content.value)
    title.value = "";
    content.value = "";

    router.push("/");
    //alert('created post')
  } catch (err) {
    console.log(err.data);
    errors.value = Object.values(err.data.errors).flat();
    isLoading.value = false;
  }
}
</script>

<style></style>
