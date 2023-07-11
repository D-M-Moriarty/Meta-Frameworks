export default defineEventHandler(async event => {
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
        creator: "John Doe"
      });
    }, 2000); // 2000 ms delay
  })
})
