// ===========================================
// Next.js API Route: app/api/posts/route.ts
// (For App Router - Next.js 13+)
// ===========================================

import { NextRequest, NextResponse } from 'next/server';

// Your blog post type
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  category: string;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') ?? '1');
  const limit = parseInt(searchParams.get('limit') ?? '10');

  // ===========================================
  // OPTION 1: If posts are in a database (Prisma example)
  // ===========================================
  // const posts = await prisma.post.findMany({
  //   skip: (page - 1) * limit,
  //   take: limit,
  //   orderBy: { publishedAt: 'desc' },
  //   select: {
  //     id: true,
  //     title: true,
  //     excerpt: true,
  //     coverImage: true,
  //     author: true,
  //     publishedAt: true,
  //     category: true,
  //   },
  // });
  // const total = await prisma.post.count();

  // ===========================================
  // OPTION 2: If posts are MDX/Markdown files
  // ===========================================
  // import { getAllPosts } from '@/lib/posts';
  // const allPosts = getAllPosts(); // Your existing function
  // const total = allPosts.length;
  // const posts = allPosts.slice((page - 1) * limit, page * limit);

  // ===========================================
  // OPTION 3: If using a CMS (example structure)
  // ===========================================
  // const cmsResponse = await fetchFromCMS(page, limit);
  // const posts = cmsResponse.items;
  // const total = cmsResponse.total;

  // Demo data - replace with your actual data fetching
  const allPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Getting Started with Next.js',
      excerpt: 'Learn how to build modern web apps with Next.js',
      coverImage: 'https://picsum.photos/seed/1/800/400',
      author: 'John Doe',
      publishedAt: '2024-01-15',
      category: 'Tutorial',
    },
    // ... your posts
  ];

  const total = allPosts.length;
  const posts = allPosts.slice((page - 1) * limit, page * limit);

  return NextResponse.json({
    data: posts,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      hasMore: page * limit < total,
    },
  });
}


// ===========================================
// Pages Router Alternative: pages/api/posts.ts
// (For Next.js 12 or pages directory)
// ===========================================

// import type { NextApiRequest, NextApiResponse } from 'next';
//
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const page = parseInt(req.query.page as string) || 1;
//   const limit = parseInt(req.query.limit as string) || 10;
//
//   // Fetch your posts here...
//   const posts = [];
//   const total = 0;
//
//   res.status(200).json({
//     data: posts,
//     pagination: { page, limit, total, hasMore: page * limit < total },
//   });
// }