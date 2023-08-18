<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div>
  <h1 class="text-center text-3xl my-10">Meme Gallery</h1>
  {#each data.memes as meme (meme.id)}
    <div class="card w-96 bg-base-100 shadow-xl m-auto my-5">
      <figure class="px-10 pt-10">
        <img src={meme.url} alt={meme.title} class="rounded-xl" width="400" height="300" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{meme.title}</h2>
        <p>{meme.description}</p>
        <div class="card-actions">
          <!-- You can replace this button with relevant functionality if required -->
          <button class="btn btn-primary">Like</button>
        </div>
      </div>
    </div>
  {/each}
</div>
