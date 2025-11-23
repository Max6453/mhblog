import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/posts';

// Enable CORS for Expo app
export async function GET(request: NextRequest) {
  const response = await handleRequest(request);
  
  // Add CORS headers
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  
  return response;
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

async function handleRequest(request: NextRequest) {
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