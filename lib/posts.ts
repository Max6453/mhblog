import fs from 'fs';
import path from 'path';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  category: string;
}

// Folders to scan for articles (adjust to your structure)
const CONTENT_DIRS = ['Tech', 'motorsport'];
const appDirectory = path.join(process.cwd(), 'app');

function scanDirectory(dir: string, category: string): BlogPost[] {
  const posts: BlogPost[] = [];

  function scan(currentPath: string, slugParts: string[]) {
    const items = fs.readdirSync(currentPath);

    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        scan(fullPath, [...slugParts, item]);
      } else if (item === 'page.tsx' || item === 'page.jsx') {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          const meta = extractMeta(content);

          if (meta) {
            const slug = slugParts.join('/');
            posts.push({
              id: slug.replace(/\//g, '-'),
              slug: `/${category}/${slug}`,
              title: meta.title ?? slugParts[slugParts.length - 1],
              excerpt: meta.excerpt ?? '',
              coverImage: meta.coverImage ?? '',
              date: meta.date ?? '',
              category,
            });
          }
        } catch (e) {
          console.error(`Error reading ${fullPath}:`, e);
        }
      }
    }
  }

  const categoryPath = path.join(appDirectory, dir);
  if (fs.existsSync(categoryPath)) {
    scan(categoryPath, []);
  }

  return posts;
}

function extractMeta(content: string): Record<string, string> | null {
  // Match: export const meta = { ... }
  const match = content.match(/export\s+const\s+meta\s*=\s*(\{[\s\S]*?\});/);
  
  if (!match) return null;

  try {
    // Simple extraction using regex (handles basic cases)
    const obj: Record<string, string> = {};
    const inner = match[1];
    
    const pairs = inner.matchAll(/(\w+)\s*:\s*["'`]([^"'`]*)["'`]/g);
    for (const pair of pairs) {
      obj[pair[1]] = pair[2];
    }
    
    return obj;
  } catch {
    return null;
  }
}

export function getAllPosts(): BlogPost[] {
  const allPosts: BlogPost[] = [];

  for (const dir of CONTENT_DIRS) {
    allPosts.push(...scanDirectory(dir, dir));
  }

  return allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}