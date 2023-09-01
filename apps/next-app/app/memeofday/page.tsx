"use server";
import Image from "next/image";
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
      id: "001"
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
  console.warn(memeOfTheDay);
  return (
    <div className="mx-auto px-6 sm:px-12 md:px-24 lg:px-32 max-w-7xl">
      <h1 className="text-4xl font-bold text-center text-white-700 my-8">Meme of the Day</h1>
      <div className="flex justify-center mb-8">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image src={memeOfTheDay.url} alt={memeOfTheDay.title} width={500} height={500} />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-semibold text-center text-yellow-600 mb-4">{memeOfTheDay.title}</h2>
            <h3 className="card-title">{memeOfTheDay.description}</h3>
            <p>Posted by: {memeOfTheDay.creator}</p>
            <p>Category: {memeOfTheDay.category}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

