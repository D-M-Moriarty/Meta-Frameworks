import Link from 'next/link';
import {prisma} from "@/lib/prisma";
import { format } from 'date-fns';

export default async function Blog() {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      date: true,
      slug: true,
      summary: true
    }
  });
  return (
    <>
      <ul>
        {posts.map((elt) => (
          <li key={elt.slug} className="mb-3 flex justify-between">
            <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
              <a>
                <h2>{elt.title}</h2>
              </a>
            </Link>

            <div className="text-right">
              {format(new Date(elt.date), 'LLL d, yyyy')}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
