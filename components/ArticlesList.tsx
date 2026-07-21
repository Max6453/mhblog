import Image from "next/image";
import Link from "next/link";
import { getArticlesFromDB } from "@/lib/articles";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

/**
 * Server component that retrieves articles directly from MongoDB
 * (db: "mhblog", collection: "articles") and renders them as a list of
 * cards. Article content generation itself is untouched for now — this
 * only wires up retrieval.
 */
export default async function ArticlesList() {
  const articles = await getArticlesFromDB();

  if (articles.length === 0) {
    return (
      <p className="text-muted-foreground text-sm">
        No articles found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <Link key={article.id} href={article.slug}>
          <Card className="h-full overflow-hidden transition-shadow hover:shadow-md">
            {article.coverImage && (
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
              <CardDescription>
                {article.category} &middot;{" "}
                {new Date(article.date).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            {article.excerpt && (
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {article.excerpt}
                </p>
              </CardContent>
            )}
          </Card>
        </Link>
      ))}
    </div>
  );
}
