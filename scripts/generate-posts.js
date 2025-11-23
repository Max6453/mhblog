const fs = require('fs');
const path = require('path');

const CONTENT_DIRS = ['Motorsport', 'Reviews', 'Tech']; // adjust to your folders
const appDirectory = path.join(process.cwd(), 'app');
const outputPath = path.join(process.cwd(), 'public', 'posts.json');

function scanDirectory(dir, category) {
  const posts = [];

  function scan(currentPath, slugParts) {
    const items = fs.readdirSync(currentPath);
    const hasPage = items.some(item => 
      item === 'page.tsx' || item === 'page.jsx' || item === 'page.js'
    );
    const hasMeta = items.includes('meta.json');

    if (hasPage && hasMeta) {
      try {
        const metaPath = path.join(currentPath, 'meta.json');
        const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
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

    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      try {
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          scan(fullPath, [...slugParts, item]);
        }
      } catch (e) {
        // Skip
      }
    }
  }

  const categoryPath = path.join(appDirectory, dir);
  if (fs.existsSync(categoryPath)) {
    scan(categoryPath, []);
  }

  return posts;
}

function generatePosts() {
  const allPosts = [];

  for (const dir of CONTENT_DIRS) {
    allPosts.push(...scanDirectory(dir, dir));
  }

  const sorted = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Ensure public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(outputPath, JSON.stringify(sorted, null, 2));
  console.log(`✅ Generated ${sorted.length} posts to public/posts.json`);
}

generatePosts();