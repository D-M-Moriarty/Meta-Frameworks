'use server'
import Image from 'next/image';
import { prisma } from "@/lib/prisma";

export interface Meme {
  id: string;
  title: string;
  url: string;
  description: string;
  category: string;
  tags: string[];
  created_at: string;
  updated_at: string;
  creator: string;
}

export default async function MemeOfTheDayPage() {
  const memeOfTheDay = await prisma.meme.findUnique({
    where: {
      id:'001'
    },
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
    }
  });

  return (
    <div className="mx-auto px-6 sm:px-12 md:px-24 lg:px-32 max-w-7xl">
      <h1 className="text-4xl font-bold text-center text-gray-700 my-8">Meme of the Day</h1>
      <div className="flex justify-center mb-8">
        <Image src={memeOfTheDay.url} alt={memeOfTheDay.title} width={500} height={500} />
      </div>
      <h2 className="text-2xl font-semibold text-center text-gray-600 mb-4">{memeOfTheDay.title}</h2>
      <p className="text-lg text-gray-700 mb-2">{memeOfTheDay.description}</p>
      <p className="text-gray-500">Posted by: {memeOfTheDay.creator}</p>
      <p className="text-gray-500 mb-8">Category: {memeOfTheDay.category}</p>
      {/*<button onClick={() => alert('Liked!')}></button>*/}
    </div>
  );
}

