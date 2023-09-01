// src/routes/+page.server.ts
import type { PageServerLoad } from "./$types";
import { prisma } from "../../../lib/prisma";

export const load = (async () => {
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
  return { memeOfTheDay: memeOfTheDay };
}) satisfies PageServerLoad;
