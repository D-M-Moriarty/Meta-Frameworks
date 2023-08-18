// src/routes/+page.server.ts

import { prisma } from "../../../lib/prisma";
import type { PageServerLoad } from "../gallery/$types";

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
