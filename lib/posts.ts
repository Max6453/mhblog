import postsData from '@/public/posts.json';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  category: string;
}

export function getAllPosts(): BlogPost[] {
  return postsData as BlogPost[];
}