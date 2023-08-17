import { prisma } from "@/lib/prisma";
import Image from 'next/image';

export const revalidate = 42069;

export default async function MemeGallery() {
  const memes = await prisma.meme.findMany({
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

  console.table(memes);

  return (
    <div>
      <h1 className="text-center text-3xl my-10">Meme Gallery</h1>
      {memes.map((meme) => (
        <div key={meme.id} className="card w-96 bg-base-100 shadow-xl m-auto my-5">
          <figure className="px-10 pt-10">
            <Image src={meme.url} alt={meme.title} className="rounded-xl" layout="responsive" width={400} height={300} />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{meme.title}</h2>
            <p>{meme.description}</p>
            <div className="card-actions">
              {/* You can replace this button with relevant functionality if required */}
              <button className="btn btn-primary">Like</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
