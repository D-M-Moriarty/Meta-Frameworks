<script>
  import "../../app.css";
  let memeOfTheDay = null;

  async function fetchMemeOfTheDay() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          id: "001",
          title: "Happy Doge",
          url: "/images/doge/doge2.avif",
          description: "A very happy Doge enjoying a sunny day.",
          category: "Dog",
          tags: ["Doge", "Happy", "Funny"],
          created_at: "2023-01-01T00:00:00Z",
          updated_at: "2023-01-01T00:00:00Z",
          creator: "John Doge"
        });
      }, 2000); // 2000 ms delay
    });
  }

  fetchMemeOfTheDay().then(meme => {
    memeOfTheDay = meme;
  });
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
