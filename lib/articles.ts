import clientPromise, { MONGODB_DB, ARTICLES_COLLECTION } from "@/lib/mongodb";
import type { BlogPost } from "@/lib/posts";

// The blog_posts collection is shared across multiple projects, keyed by
// this field on each document.
const PROJECT_NAME = "mhblog";

export interface ArticleDocument {
  _id: unknown;
  slug: string;
  title: string;
  content?: string;
  coverImage?: string;
  category?: string;
  project_name: string;
  status: string;
  created_at: string;
  published_at?: string;
}

/**
 * Fetches published articles belonging to this project from the
 * "blog_posts" collection in MongoDB. Uses the same shape as the existing
 * static BlogPost data so it can be swapped in wherever static posts are
 * used today.
 */
export async function getArticlesFromDB(): Promise<BlogPost[]> {
  const client = await clientPromise;
  const db = client.db(MONGODB_DB);

  const documents = await db
    .collection<ArticleDocument>(ARTICLES_COLLECTION)
    .find({ project_name: PROJECT_NAME, status: "published" })
    .sort({ published_at: -1 })
    .toArray();

  return documents.map((doc) => ({
    id: String(doc._id),
    slug: doc.slug,
    title: doc.title,
    excerpt: doc.content ?? "",
    coverImage: doc.coverImage ?? "",
    date: doc.published_at ?? doc.created_at,
    category: doc.category ?? "",
  }));
}
