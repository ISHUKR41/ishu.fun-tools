import { TOOLS } from './src/data/tools.data.js';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://ishu.fun';
const PRIORITY = {
  home: 1.0,
  toolsHub: 0.9,
  popularTools: 0.8,
  regularTools: 0.7,
};

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <!-- Home Page -->
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Tools Hub -->
  <url>
    <loc>${BASE_URL}/tools</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

`;

  // Add all tools
  TOOLS.forEach((tool) => {
    const priority = tool.isPopular ? PRIORITY.popularTools : PRIORITY.regularTools;
    sitemap += `  <!-- ${tool.name} -->
  <url>
    <loc>${BASE_URL}/tools/${tool.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>

`;
  });

  sitemap += `</urlset>`;

  return sitemap;
}

// Generate and save sitemap
const sitemap = generateSitemap();
const publicDir = path.join(process.cwd(), 'public');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

console.log('✅ Sitemap generated successfully!');
console.log(`📄 Total URLs: ${TOOLS.length + 2}`);
console.log(`📍 Location: public/sitemap.xml`);
