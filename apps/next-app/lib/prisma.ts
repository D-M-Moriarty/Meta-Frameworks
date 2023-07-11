import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient()
// async function main() {
//   const posts = Array.from({ length: 50 }, (_, i) => ({
//     title: `Post Title ${i + 1}`,
//     date: new Date().toISOString(),
//     slug: `post-title-${i + 1}`,
//     summary: `This is the summary for post ${i + 1}.`,
//   }));
//
//   for (let post of posts) {
//     await prisma.post.create({
//       data: post
//     });
//   }
// }
//
// main()
//   .catch(e => {
//     throw e
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })

//
// export default async function Post() {
//   const exchangeRates = await prisma.post.findFirst({
//     select: {
//       id: true,
//       title: true,
//       date: true,
//       slug: true,
//       summary: true
//     })
//   }
