<script setup>
// Server Side

const { data: memes } = useFetch('/api/memes');
</script>

<template>
  <div>
    <h1 class="text-center text-3xl my-10">Meme Gallery</h1>
    <div
      v-for="meme in memes"
      :key="meme.id"
      class="card w-96 bg-base-100 shadow-xl m-auto my-5"
    >
      <figure class="px-10 pt-10">
        <!-- Assuming you're using Vue's standard <img> tag. If you're using a specific Vue component, adjust as necessary. -->
        <img :src="meme.url" :alt="meme.title" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{{ meme.title }}</h2>
        <p>{{ meme.description }}</p>
        <div class="card-actions">
          <!-- You can replace this button with relevant functionality if required -->
          <button class="btn btn-primary">Like</button>
        </div>
      </div>
    </div>
  </div>
</template>
