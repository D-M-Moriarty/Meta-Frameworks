<script setup>
// Server Side

const { data: memeOfTheDay } = useFetch('/api/meme');
</script>

<template>
  <div>
    <div class="mx-auto px-6 sm:px-12 md:px-24 lg:px-32 max-w-7xl">
      <h1 class="text-4xl font-bold text-center text-gray-700 my-8">Meme of the Day</h1>
      <div class="flex justify-center mb-8">
        <img :src="memeOfTheDay.url" :alt="memeOfTheDay.title" width="500" height="500" />
      </div>
      <h2 class="text-2xl font-semibold text-center text-gray-600 mb-4">{{memeOfTheDay.title}}</h2>
      <p class="text-lg text-gray-700 mb-2">{{memeOfTheDay.description}}</p>
      <p class="text-gray-500">Posted by: {{memeOfTheDay.creator}}</p>
      <p class="text-gray-500 mb-8">Category: {{memeOfTheDay.category}}</p>
    </div>
  </div>
</template>
