import { prisma } from "@/lib/prisma";
import { Meme } from "@/app/memeofday/page";
import { Props } from "next/script";

export const revalidate = 42069;

export async function generateStaticParams() {
  return await prisma.meme.findMany({
    select: {
      id: true,
      title: true,
      url: true,
      description: true,
      category: true,
      tags: true,
      created_at: true,
      updated_at: true,
      creator: true
    },
  });
  // const memes: Meme[] = [
  //   {
  //     id: "001",
  //     title: "Happy Doge",
  //     url: "/images/doge/doge2.avif",
  //     description: "A very happy Doge enjoying a sunny day.",
  //     category: "Dog",
  //     tags: ["Doge", "Happy", "Funny"],
  //     created_at: "2023-01-01T00:00:00Z",
  //     updated_at: "2023-01-01T00:00:00Z",
  //     creator: "John Doe"
  //   }
  // ];
  // return memes
}

export default function MemeGallery(memes) {
  return (
    <div>
      <h1>Meme Gallery</h1>
      {memes.map((meme) => (
        <div key={meme.id}>
          <img src={meme.url} alt={meme.title} />
          <h2>{meme.title}</h2>
          <p>{meme.description}</p>
          <button onClick={() => alert('Liked!')}>Like</button>
        </div>
      ))}
    </div>
  );
}
