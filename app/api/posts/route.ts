import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/posts';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') ?? '1');
  const limit = parseInt(searchParams.get('limit') ?? '10');
  const category = searchParams.get('category'); // optional filter

  let allPosts = getAllPosts();

  // Filter by category if provided
  if (category) {
    allPosts = allPosts.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  const total = allPosts.length;
  const startIndex = (page - 1) * limit;
  const posts = allPosts.slice(startIndex, startIndex + limit);

  return NextResponse.json({
    data: posts,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      hasMore: startIndex + limit < total,
    },
  });
}