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

interface PostMeta {
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
}

// Top-level folders to scan (adjust to your structure)
const CONTENT_DIRS = ['Tech', 'Motorsport', 'Reviews'];
const appDirectory = path.join(process.cwd(), 'app');

function scanDirectory(dir: string, category: string): BlogPost[] {
  const posts: BlogPost[] = [];

  function scan(currentPath: string, slugParts: string[]) {
    const items = fs.readdirSync(currentPath);

    // Check if this directory has both page.tsx and meta.json
    const hasPage = items.some(
      (item) => item === 'page.tsx' || item === 'page.jsx' || item === 'page.js'
    );
    const hasMeta = items.includes('meta.json');

    if (hasPage && hasMeta) {
      try {
        const metaPath = path.join(currentPath, 'meta.json');
        const metaContent = fs.readFileSync(metaPath, 'utf8');
        const meta: PostMeta = JSON.parse(metaContent);

        const slug = slugParts.join('/');
        posts.push({
          id: slug.replace(/\//g, '-'),
          slug: `/${category}/${slug}`,
          title: meta.title,
          excerpt: meta.excerpt ?? '',
          coverImage: meta.coverImage ?? '',
          date: meta.date,
          category,
        });
      } catch (e) {
        console.error(`Error reading meta.json at ${currentPath}:`, e);
      }
    }

    // Continue scanning subdirectories
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      
      try {
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          scan(fullPath, [...slugParts, item]);
        }
      } catch (e) {
        // Skip inaccessible directories
      }
    }
  }

  const categoryPath = path.join(appDirectory, dir);
  if (fs.existsSync(categoryPath)) {
    scan(categoryPath, []);
  }

  return posts;
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