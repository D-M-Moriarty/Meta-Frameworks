<script lang="ts">
  export const prerender = true;
  import "../../app.css";
  import type { PageData } from './$types';

  export let data: PageData;
  const memeOfTheDay = data.memeOfTheDay;
</script>

{#if memeOfTheDay === null}
  <span class="loading loading-dots loading-lg"></span>
{:else}
  <div class="mx-auto px-6 sm:px-12 md:px-24 lg:px-32 max-w-7xl">
    <h1 class="text-4xl font-bold text-center text-white-700 my-8">Meme of the Day</h1>
    <div class="flex justify-center mb-8">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src={memeOfTheDay.url} alt={memeOfTheDay.title} width="500" height="500" /></figure>
        <div class="card-body">
          <h2 class="text-2xl font-semibold text-center text-yellow-600 mb-4">{memeOfTheDay.title}</h2>
          <h3 class="card-title">{memeOfTheDay.description}</h3>
          <p>Posted by: {memeOfTheDay.creator}</p>
          <p>Category: {memeOfTheDay.category}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">View</button>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
