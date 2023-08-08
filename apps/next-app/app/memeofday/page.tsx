
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

async function fetchMemeOfTheDay() {
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
    }
  })[0];
  // @ts-ignore
  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve({
  //       id: "001",
  //       title: "Happy Doge",
  //       url: "/images/doge/doge2.avif",
  //       description: "A very happy Doge enjoying a sunny day.",
  //       category: "Dog",
  //       tags: ["Doge", "Happy", "Funny"],
  //       created_at: "2023-01-01T00:00:00Z",
  //       updated_at: "2023-01-01T00:00:00Z",
  //       creator: "John Doe"
  //     });
  //   }, 2000); // 2000 ms delay
  // });
}

export default async function MemeOfTheDayPage() {
  const memeOfTheDay: Partial<Meme> = await fetchMemeOfTheDay();

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
      <button onClick={() => alert('Liked!')}></button>
    </div>
  );
}

