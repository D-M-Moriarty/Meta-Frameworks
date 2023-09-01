// src/routes/+page.server.ts

import { prisma } from "../../../lib/prisma";
import type { PageServerLoad } from "./$types";
export const prerender = true;

export const load = (async () => {
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
  return { memes: memes };
}) satisfies PageServerLoad;
