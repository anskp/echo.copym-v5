import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://copym.xyz';

// Static pages with fixed priorities
const staticPages = [
  { loc: '/', changefreq: 'daily', priority: '1.0' },
  { loc: '/about', changefreq: 'monthly', priority: '0.7' },
  { loc: '/tokenization', changefreq: 'monthly', priority: '0.8' },
  { loc: '/marketplace', changefreq: 'monthly', priority: '0.8' },
  { loc: '/launchkit', changefreq: 'monthly', priority: '0.7' },
  { loc: '/zerogas', changefreq: 'monthly', priority: '0.6' },
  { loc: '/privacy-ai', changefreq: 'monthly', priority: '0.6' },
  { loc: '/terms-of-services', changefreq: 'yearly', priority: '0.5' },
  { loc: '/blog', changefreq: 'daily', priority: '0.8' },
  { loc: '/glossary', changefreq: 'weekly', priority: '0.7' },
];

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildUrlEntry(loc, changefreq, priority, lastmod = null) {
  let xml = '  <url>\n';
  xml += `    <loc>${BASE_URL}${loc}</loc>\n`;
  if (lastmod) {
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
  }
  xml += `    <changefreq>${changefreq}</changefreq>\n`;
  xml += `    <priority>${priority}</priority>\n`;
  xml += '  </url>\n';
  return xml;
}

async function fetchApiPosts() {
  const apiUrl = process.env.VITE_API_URL || 'http://localhost:5000';
  try {
    console.log(`Fetching posts from ${apiUrl}/api/blog-posts...`);
    const response = await fetch(`${apiUrl}/api/blog-posts?limit=1000`);
    const result = await response.json();

    if (!result.success || !result.data) {
      console.warn('API returned no posts or error, continuing with static posts only');
      return [];
    }

    // API returns { success: true, data: [...] } where data is array of posts
    const posts = Array.isArray(result.data) ? result.data : (result.data.posts || []);

    return posts.map(post => {
      const category = (post.category || 'insights').toLowerCase().replace(/\s+/g, '-');
      return {
        slug: post.slug,
        category: category,
        updatedAt: post.updatedAt || post.publishedAt || null,
      };
    });
  } catch (error) {
    console.warn(`Failed to fetch API posts: ${error.message}. Continuing with static posts only.`);
    return [];
  }
}

async function getStaticBlogPosts() {
  try {
    // Dynamic import to handle ESM in Node.js
    const { blogPosts } = await import('../src/data/blogPosts.js');

    return blogPosts.map(post => ({
      slug: post.slug,
      category: (post.category || 'insights').toLowerCase().replace(/\s+/g, '-'),
      updatedDate: post.updatedDate || post.date || null,
    }));
  } catch (error) {
    console.warn(`Failed to load static blog posts: ${error.message}`);
    return [];
  }
}

function parseDateToISO(dateStr) {
  if (!dateStr) return null;
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return null;
    return date.toISOString().split('T')[0]; // YYYY-MM-DD
  } catch {
    return null;
  }
}

function deduplicatePosts(apiPosts, staticPosts) {
  const apiSlugs = new Set(apiPosts.map(p => p.slug));
  const uniqueStaticPosts = staticPosts.filter(p => !apiSlugs.has(p.slug));
  return [...apiPosts, ...uniqueStaticPosts];
}

async function generateSitemap() {
  console.log('Generating dynamic sitemap...');

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">\n\n';

  // Add static pages
  for (const page of staticPages) {
    xml += buildUrlEntry(page.loc, page.changefreq, page.priority);
  }

  xml += '\n';

  // Fetch and add blog posts
  const apiPosts = await fetchApiPosts();
  const staticPosts = await getStaticBlogPosts();
  const allPosts = deduplicatePosts(apiPosts, staticPosts);

  console.log(`Found ${apiPosts.length} API posts, ${staticPosts.length} static posts, ${allPosts.length} total (after dedup)`);

  for (const post of allPosts) {
    const category = post.category;
    const slug = post.slug;
    const loc = `/blog/${category}/${slug}`;
    const lastmod = parseDateToISO(post.updatedAt || post.updatedDate);

    xml += buildUrlEntry(loc, 'monthly', '0.7', lastmod);
  }

  xml += '\n';

  // Add glossary terms by parsing the JSX file as text (can't import .jsx in Node.js)
  try {
    const glossaryPath = path.resolve(__dirname, '../src/pages/Blog/Glossary.jsx');
    const glossaryContent = fs.readFileSync(glossaryPath, 'utf8');

    // Extract slugs from the glossaryTerms array using regex
    const slugRegex = /slug:\s*"([^"]+)"/g;
    const slugs = [];
    let match;
    while ((match = slugRegex.exec(glossaryContent)) !== null) {
      slugs.push(match[1]);
    }

    for (const slug of slugs) {
      const loc = `/glossary/${slug}`;
      xml += buildUrlEntry(loc, 'monthly', '0.6');
    }

    console.log(`Added ${slugs.length} glossary terms`);
  } catch (error) {
    console.warn(`Failed to load glossary terms: ${error.message}`);
  }

  xml += '</urlset>\n';

  // Write to public/sitemap.xml
  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf8');
  console.log(`Sitemap written to ${outputPath}`);
}

// Run the generator
generateSitemap().catch(err => {
  console.error('Sitemap generation failed:', err);
  process.exit(1);
});
