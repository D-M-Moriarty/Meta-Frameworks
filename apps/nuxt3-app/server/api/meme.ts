import { prisma } from '../data/prisma';
export default defineEventHandler(async event => {
  return prisma.meme.findUnique({
    where: {
      id: '001'
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
})
