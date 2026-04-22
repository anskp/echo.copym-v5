import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve('./dist');
const SITE_URL = 'https://copym.xyz';
const DEFAULT_IMAGE = SITE_URL + '/assets/copym/png/Copym-01-1.png';

const STATIC_PAGES = [
  { route: '/', name: 'index', title: 'CopyM - Complete Tokenization Platform for Real-World Assets', description: 'CopyM is the complete tokenization platform for real-world assets. Secure, compliant, and accessible digital asset marketplace for RWA tokenization.', type: 'website' },
  { route: '/about', name: 'about', title: 'About Us - CopyM Team & Mission', description: 'Learn about CopyM - the complete tokenization platform for real-world assets. Discover our mission, team, and vision for democratizing investments.', type: 'website' },
  { route: '/marketplace', name: 'marketplace', title: 'Digital Asset Marketplace - Buy & Sell Tokenized Assets', description: 'Browse and trade tokenized real-world assets on CopyM marketplace. Access secure, compliant digital asset investments with low fees.', type: 'website' },
  { route: '/tokenization', name: 'tokenization', title: 'Tokenization Platform - Tokenize Real-World Assets', description: 'Tokenize real-world assets with CopyM. Secure, compliant, and accessible platform for digital asset issuance, management, and trading.', type: 'website' },
  { route: '/zerogas', name: 'zerogas', title: 'ZeroGas - Gasless Token Transactions', description: 'Experience gasless transactions on CopyM platform. Trade tokenized assets without worrying about gas fees. ZeroGas makes DeFi accessible to everyone.', type: 'website' },
  { route: '/privacy-ai', name: 'privacy-ai', title: 'Privacy AI - AI-Powered Compliance', description: 'AI-powered privacy and compliance solutions for tokenized assets. Secure, compliant, and intelligent automated monitoring and reporting.', type: 'website' },
  { route: '/launchkit', name: 'launchkit', title: 'LaunchKit - Launch Your Tokenized Asset', description: 'Everything you need to launch your tokenized asset. From legal compliance to marketplace listing and investor onboarding.', type: 'website' },
  { route: '/glossary', name: 'glossary', title: 'Glossary - RWA Tokenization Terms', description: 'Learn about RWA tokenization terms and concepts. Comprehensive glossary for blockchain, DeFi, and digital asset terminology.', type: 'website' },
  { route: '/blog', name: 'blog', title: 'Blog - Insights, Education & Updates on RWA Tokenization', description: 'Explore the latest insights, education, news, and product updates on real-world asset tokenization, blockchain technology, and digital investments.', type: 'website' },
  { route: '/terms-of-services', name: 'terms-of-services', title: 'Terms of Services', description: 'CopyM terms of services. Read our terms and conditions for using the platform.', type: 'website' },
];

async function fetchApiPosts() {
  const apiUrl = process.env.VITE_API_URL || 'http://localhost:5000';
  try {
    console.log(`Fetching API posts from ${apiUrl}/api/blog-posts...`);
    const response = await fetch(`${apiUrl}/api/blog-posts?limit=1000`);
    const result = await response.json();

    if (!result.success || !result.data) {
      console.warn('API returned no posts, using static only');
      return [];
    }

    const posts = Array.isArray(result.data) ? result.data : (result.data.posts || []);
    
    return posts.map(post => ({
      route: `/blog/${(post.category || 'insights').toLowerCase().replace(/\s+/g, '-')}/${post.slug}`,
      name: `blog_${(post.category || 'insights').toLowerCase().replace(/\s+/g, '-')}_${post.slug}`,
      title: post.title,
      description: post.excerpt || post.title,
      type: 'article'
    }));
  } catch (error) {
    console.warn(`Failed to fetch API posts: ${error.message}`);
    return [];
  }
}

async function getStaticBlogPosts() {
  try {
    const { blogPosts } = await import('../src/data/blogPosts.js');
    return blogPosts.map(post => ({
      route: `/blog/${(post.category || 'insights').toLowerCase().replace(/\s+/g, '-')}/${post.slug}`,
      name: `blog_${(post.category || 'insights').toLowerCase().replace(/\s+/g, '-')}_${post.slug}`,
      title: post.title,
      description: post.excerpt || post.title,
      type: 'article'
    }));
  } catch (error) {
    console.warn(`Failed to load static blog posts: ${error.message}`);
    return [];
  }
}

function getGlossaryTerms() {
  try {
    const glossaryPath = path.resolve(__dirname, '../src/pages/Blog/Glossary.jsx');
    const content = fs.readFileSync(glossaryPath, 'utf8');
    
    const termRegex = /\{\s*term:\s*"([^"]+)",\s*slug:\s*"([^"]+)"/g;
    const terms = [];
    let match;
    
    while ((match = termRegex.exec(content)) !== null) {
      terms.push({
        route: `/glossary/${match[2]}`,
        name: `glossary_${match[2]}`,
        title: `${match[1]} - Definition & Explanation | CopyM Glossary`,
        description: `Learn about ${match[1]} and its meaning in blockchain, tokenization, and digital assets.`,
        type: 'article'
      });
    }
    return terms;
  } catch (error) {
    console.warn(`Failed to load glossary: ${error.message}`);
    return [];
  }
}

function deduplicatePosts(apiPosts, staticPosts) {
  const apiRoutes = new Set(apiPosts.map(p => p.route));
  const uniqueStatic = staticPosts.filter(p => !apiRoutes.has(p.route));
  return [...apiPosts, ...uniqueStatic];
}

function buildStaticPages(allPages) {
  console.log('Building static SEO pages...');
  
  const indexPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.log('Dist directory not found! Run "npm run build" first.');
    process.exit(1);
  }

  let indexHtml = fs.readFileSync(indexPath, 'utf-8');
  
  if (!indexHtml.includes('og:image')) {
    indexHtml = indexHtml.replace('</head>', 
      `<meta property="og:image" content="${DEFAULT_IMAGE}" />
<meta name="twitter:image" content="${DEFAULT_IMAGE}" />
</head>`);
  }
  
  console.log(`Generating ${allPages.length} pages...`);

  allPages.forEach(page => {
    const fileName = page.name === 'index' ? 'index.html' : `${page.name}.html`;
    const filePath = path.join(DIST_DIR, fileName);
    let modifiedHtml = indexHtml;
    
    modifiedHtml = modifiedHtml.replace(/<title>.*?<\/title>/s, `<title>${page.title}</title>`);
    modifiedHtml = modifiedHtml.replace(/<meta name="description"\s+content="[^"]*"/, `<meta name="description" content="${page.description}"`);
    modifiedHtml = modifiedHtml.replace(/<meta name='description'\s+content='[^']*'/, `<meta name="description" content="${page.description}"`);
    modifiedHtml = modifiedHtml.replace(/<meta property="og:title"\s+content="[^"]*"/, `<meta property="og:title" content="${page.title}"`);
    modifiedHtml = modifiedHtml.replace(/<meta property='og:title'\s+content='[^']*'/, `<meta property="og:title" content="${page.title}"`);
    modifiedHtml = modifiedHtml.replace(/<meta property="og:description"\s+content="[^"]*"/, `<meta property="og:description" content="${page.description}"`);
    modifiedHtml = modifiedHtml.replace(/<meta property='og:description'\s+content='[^']*'/, `<meta property="og:description" content="${page.description}"`);
    modifiedHtml = modifiedHtml.replace(/<meta name="twitter:title"\s+content="[^"]*"/, `<meta name="twitter:title" content="${page.title}"`);
    modifiedHtml = modifiedHtml.replace(/<meta name='twitter:title'\s+content='[^']*'/, `<meta name="twitter:title" content="${page.title}"`);
    modifiedHtml = modifiedHtml.replace(/<meta name="twitter:description"\s+content="[^"]*"/, `<meta name="twitter:description" content="${page.description}"`);
    modifiedHtml = modifiedHtml.replace(/<meta name='twitter:description'\s+content='[^']*'/, `<meta name="twitter:description" content="${page.description}"`);
    modifiedHtml = modifiedHtml.replace(/<link rel="canonical"\s+href="[^"]*"/, `<link rel="canonical" href="${SITE_URL}${page.route}"`);
    modifiedHtml = modifiedHtml.replace(/<link rel='canonical'\s+href='[^']*'/, `<link rel="canonical" href="${SITE_URL}${page.route}"`);
    modifiedHtml = modifiedHtml.replace(/<meta property="og:url"\s+content="[^"]*"/, `<meta property="og:url" content="${SITE_URL}${page.route}"`);
    modifiedHtml = modifiedHtml.replace(/<meta property='og:url'\s+content='[^']*'/, `<meta property="og:url" content="${SITE_URL}${page.route}"`);
    modifiedHtml = modifiedHtml.replace(/<meta property="og:type"\s+content="[^"]*"/, `<meta property="og:type" content="${page.type}"`);
    modifiedHtml = modifiedHtml.replace(/<meta property='og:type'\s+content='[^']*'/, `<meta property="og:type" content="${page.type}"`);
    modifiedHtml = modifiedHtml.replace(/<meta property="og:image"\s+content="[^"]*"/, `<meta property="og:image" content="${DEFAULT_IMAGE}"`);
    modifiedHtml = modifiedHtml.replace(/<meta property='og:image'\s+content='[^']*'/, `<meta property="og:image" content="${DEFAULT_IMAGE}"`);
    modifiedHtml = modifiedHtml.replace(/<meta name="twitter:image"\s+content="[^"]*"/, `<meta name="twitter:image" content="${DEFAULT_IMAGE}"`);
    modifiedHtml = modifiedHtml.replace(/<meta name='twitter:image'\s+content='[^']*'/, `<meta name="twitter:image" content="${DEFAULT_IMAGE}"`);
    
    fs.writeFileSync(filePath, modifiedHtml);
    console.log(`Generated: ${fileName}`);

    // Also emit route-shaped HTML so Vercel can rewrite dynamic URLs generically.
    if (page.route !== '/') {
      const routeDir = path.join(DIST_DIR, page.route.replace(/^\/+/, ''));
      fs.mkdirSync(routeDir, { recursive: true });
      fs.writeFileSync(path.join(routeDir, 'index.html'), modifiedHtml);
      console.log(`Generated: ${page.route}/index.html`);
    }
  });

  console.log(`Static SEO pages built successfully! (${allPages.length} pages)`);
}

async function main() {
  console.log('Building SEO pages...\n');
  
  const [apiPosts, staticPosts] = await Promise.all([
    fetchApiPosts(),
    getStaticBlogPosts()
  ]);
  
  const allBlogPosts = deduplicatePosts(apiPosts, staticPosts);
  const glossaryTerms = getGlossaryTerms();
  
  console.log(`Found ${apiPosts.length} API posts, ${staticPosts.length} static posts, ${glossaryTerms.length} glossary terms\n`);
  
  const allPages = [...STATIC_PAGES, ...allBlogPosts, ...glossaryTerms];
  buildStaticPages(allPages);
}

main().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
