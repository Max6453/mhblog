const fs = require("fs");
const path = require("path");

const SITE_URL = "https://mhblog-xi.vercel.app"; // 🔴 CHANGE THIS
const CONTENT_DIRS = ["Motorsport", "Reviews", "Tech"];
const appDirectory = path.join(process.cwd(), "app");
const outputPath = path.join(process.cwd(), "public", "rss.xml");

function scanDirectory(dir, category) {
  const posts = [];

  function scan(currentPath, slugParts) {
    const items = fs.readdirSync(currentPath);

    const hasPage = items.some(item =>
      ["page.tsx", "page.jsx", "page.js"].includes(item)
    );

    if (hasPage && items.includes("meta.json")) {
      try {
        const metaPath = path.join(currentPath, "meta.json");
        const meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));

        const slug = slugParts.join("/");
        posts.push({
          title: meta.title,
          description: meta.excerpt || "",
          link: `${SITE_URL}/${category}/${slug}`,
          pubDate: new Date(meta.date).toUTCString(),
          image: meta.coverImage
            ? `${SITE_URL}${meta.coverImage}`
            : null
        });
      } catch (err) {
        console.error(`❌ Invalid meta.json at ${currentPath}`);
      }
    }

    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      if (fs.statSync(fullPath).isDirectory()) {
        scan(fullPath, [...slugParts, item]);
      }
    }
  }

  const categoryPath = path.join(appDirectory, dir);
  if (fs.existsSync(categoryPath)) scan(categoryPath, []);

  return posts;
}

function generateRSS(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:media="http://search.yahoo.com/mrss/">
<channel>
  <title>My Blog</title>
  <link>${SITE_URL}</link>
  <description>Latest articles</description>
  <language>en</language>

${posts.map(post => `
  <item>
    <title><![CDATA[${post.title}]]></title>
    <link>${post.link}</link>
    <guid>${post.link}</guid>
    <pubDate>${post.pubDate}</pubDate>
    <description><![CDATA[${post.description}]]></description>
    ${post.image ? `
    <enclosure url="${post.image}" type="image/jpeg" />
    <media:content url="${post.image}" medium="image" />
    ` : ""}
  </item>
`).join("")}

</channel>
</rss>`;
}

function generate() {
  let allPosts = [];
  CONTENT_DIRS.forEach(dir => {
    allPosts.push(...scanDirectory(dir, dir));
  });

  allPosts.sort(
    (a, b) => new Date(b.pubDate) - new Date(a.pubDate)
  );

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, generateRSS(allPosts));

  console.log(`✅ RSS generated with ${allPosts.length} items`);
}

generate();
