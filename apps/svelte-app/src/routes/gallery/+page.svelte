<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  import "../../app.css";
</script>

<main>
  <h2>Popular Memes</h2>

<!--  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">-->
<!--    {#each data.memes as meme}-->
<!--      <div key={meme.id}>-->
<!--        <img class="h-auto max-w-full rounded-lg" src={meme.url} alt={meme.title} />-->
<!--        <p>{meme.description}</p>-->
<!--      </div>-->
<!--    {/each}-->
<!--  </div>-->

  <section class="meme-grid">
    {#each data.memes as meme}
      <div key={meme.id}>
        <img src={meme.url} alt={meme.title} />
        <p>{meme.description}</p>
      </div>
    {/each}
  </section>
</main>
<style>
    .meme-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
        padding: 1rem;
    }

    .meme-grid div {
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .meme-grid img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    nav {
        background-color: #333;
        overflow: hidden;
        margin-bottom: 20px;
    }

    nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
    }

    nav a {
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }

    nav a:hover {
        background-color: #ddd;
        color: black;
    }

</style>
