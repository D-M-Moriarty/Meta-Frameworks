import { prisma } from "@/lib/prisma";
import Image from 'next/image';

export const revalidate = 42069;

export default async function MemeGallery() {
  const memes =  await prisma.meme.findMany({
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
  return (
    <div>
      <h1>Meme Gallery</h1>
      {memes.map((meme) => (
        <div key={meme.id}>
          <Image src={meme.url} alt={meme.title} />
          <h2>{meme.title}</h2>
          <p>{meme.description}</p>
          {/*<button onClick={() => alert('Liked!')}>Like</button>*/}
        </div>
      ))}
    </div>
  );
}
