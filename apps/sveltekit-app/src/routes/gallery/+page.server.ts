import type { PageLoad } from './$types';

export const prerender = true;
// 4100 - 979
export const load = (async () => {
  let memes = [
    {
      "id": "000",  // Unique ID
      "title": "Surprised Doge",  // Title of the meme
      "url": "images/doge/download.jpeg",  // URL of the meme image
      "description": "A startled Doge reacts to an unexpected event.",  // Description of the meme
      "category": "Dog",  // Category the meme belongs to
      "tags": ["Doge", "Surprised", "Funny"],  // Array of relevant tags
      "created_at": "2023-01-01T00:00:00Z",  // Timestamp when the meme was created
      "updated_at": "2023-01-01T00:00:00Z",  // Timestamp when the meme was last updated
      "creator": "John Doe"  // Creator of the meme
    },
    {
      "id": "001",
      "title": "Happy Doge",
      "url": "images/doge/doge2.avif",
      "description": "A very happy Doge enjoying a sunny day.",
      "category": "Dog",
      "tags": ["Doge", "Happy", "Funny"],
      "created_at": "2023-01-01T00:00:00Z",
      "updated_at": "2023-01-01T00:00:00Z",
      "creator": "John Doe"
    },
    {
      "id": "002",
      "title": "Surprised Doge",
      "url": "images/doge/doge3.webp",
      "description": "Doge with a surprised face.",
      "category": "Dog",
      "tags": ["Doge", "Surprised", "Funny"],
      "created_at": "2023-02-01T00:00:00Z",
      "updated_at": "2023-02-01T00:00:00Z",
      "creator": "John Doe"
    },
    {
      "id": "007",
      "title": "Skeptical Doge",
      "url": "images/doge/doge6.webp",
      "description": "Doge giving a skeptical look.",
      "category": "Dog",
      "tags": ["Doge", "Skeptical", "Funny"],
      "created_at": "2023-07-01T00:00:00Z",
      "updated_at": "2023-07-01T00:00:00Z",
      "creator": "John Doe"
    },
    {
      "id": "003",
      "title": "Grumpy Cat",
      "url": "images/grumpy-cat/grumpy1.jpg",
      "description": "Grumpy cat looking not pleased with the situation.",
      "category": "Cat",
      "tags": ["Grumpy Cat", "Grumpy", "Funny"],
      "created_at": "2023-03-01T00:00:00Z",
      "updated_at": "2023-03-01T00:00:00Z",
      "creator": "Jane Doe"
    },
    {
      "id": "004",
      "title": "Grumpy Cat 2",
      "url": "images/grumpy-cat/grumpy2.jpeg",
      "description": "Grumpy cat being grumpy again.",
      "category": "Cat",
      "tags": ["Grumpy Cat", "Grumpy", "Funny"],
      "created_at": "2023-04-01T00:00:00Z",
      "updated_at": "2023-04-01T00:00:00Z",
      "creator": "Jane Doe"
    },
    {
      "id": "005",
      "title": "Grumpy Cat 3",
      "url": "images/grumpy-cat/grumpy3.webp",
      "description": "Grumpy cat looking surprisingly not so grumpy.",
      "category": "Cat",
      "tags": ["Grumpy Cat", "Happy", "Funny"],
      "created_at": "2023-05-01T00:00:00Z",
      "updated_at": "2023-05-01T00:00:00Z",
      "creator": "Jane Doe"
    },
    {
      "id": "006",
      "title": "Dramatic Look Gopher",
      "url": "images/random/gopher.jpeg",
      "description": "A dramatic looking gopher.",
      "category": "Gopher",
      "tags": ["Gopher", "Dramatic", "Funny"],
      "created_at": "2023-06-01T00:00:00Z",
      "updated_at": "2023-06-01T00:00:00Z",
      "creator": "Alex Doe"
    },
    {
      "id": "007",
      "title": "Pillow-Eating Pooch",
      "url": "images/random/dog-couch.jpg",
      "description": "This dog just couldn't resist the temptation of the fluffy couch pillows.",
      "category": "Dog",
      "tags": ["Dog", "Funny", "Pillow", "Couch"],
      "created_at": "2023-08-01T00:00:00Z",
      "updated_at": "2023-08-01T00:00:00Z",
      "creator": "John Doe"
    },
    {
      "id": "008",
      "title": "Woke Llama",
      "url": "images/random/lama.jpeg",
      "description": "A llama that seems to know more than you'd expect.",
      "category": "Llama",
      "tags": ["Llama", "Funny", "Woke"],
      "created_at": "2023-09-01T00:00:00Z",
      "updated_at": "2023-09-01T00:00:00Z",
      "creator": "Jane Doe"
    },
    {
      "id": "09",
      "title": "Scared Pug",
      "url": "images/random/pug.jpg",
      "description": "A pug showing a priceless scared expression.",
      "category": "Dog",
      "tags": ["Pug", "Funny", "Scared"],
      "created_at": "2023-10-01T00:00:00Z",
      "updated_at": "2023-10-01T00:00:00Z",
      "creator": "John Doe"
    }
  ];
  // 6.69 apr - 8475.88
  //  photo id,

  async function fetchMemeOfTheDay() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(memes);
      }, 2000); // 2000 ms delay
    });
  }

  memes = await fetchMemeOfTheDay();
  console.log(memes);
  return { memes };
}) satisfies PageLoad;
