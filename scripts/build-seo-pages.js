import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('./dist');
const SITE_URL = 'https://copym.xyz';
const DEFAULT_IMAGE = 'https://copym.xyz/assets/copym/png/Copym-01-1.avif';

// Read sitemap.xml to get all pages automatically
function getPagesFromSitemap() {
  const sitemapPath = path.join(DIST_DIR, '..', 'public', 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.log('Sitemap not found, using fallback pages');
    return getFallbackPages();
  }
  
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  const urlMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g);
  
  if (!urlMatches) {
    return getFallbackPages();
  }
  
  const pages = [];
  const urls = urlMatches.map(m => m.replace(/<\/?loc>/g, ''));
  
  urls.forEach(url => {
    // Skip if not copym.xyz or not a main page
    if (!url.includes('copym.xyz')) return;
    
    const relativeUrl = url.replace('https://copym.xyz', '');
    if (relativeUrl === '/') {
      pages.push({
        route: '/',
        name: 'index',
        title: 'CopyM - Complete Tokenization Platform',
        description: 'CopyM is the complete tokenization platform for real-world assets. Secure, compliant, and accessible digital asset marketplace.',
        type: 'website'
      });
    } else if (relativeUrl.startsWith('/glossary/')) {
      const slug = relativeUrl.replace('/glossary/', '');
      const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      pages.push({
        route: relativeUrl,
        name: `glossary_${slug}`,
        title: `${title} - Glossary`,
        description: `Learn about ${title.toLowerCase()} - ${title} definition and explanation in RWA tokenization.`,
        type: 'article'
      });
    } else if (relativeUrl.startsWith('/blog/') && relativeUrl !== '/blog') {
      const slug = relativeUrl.replace('/blog/', '').replace(/\//g, '_');
      pages.push({
        route: relativeUrl,
        name: `blog_${slug}`,
        title: 'Blog Post - CopyM',
        description: 'Read our latest article on real-world asset tokenization, blockchain, and digital investments.',
        type: 'article'
      });
    } else if (!relativeUrl.includes('/')) {
      // Main pages like /about, /marketplace, etc.
      const name = relativeUrl.replace('/', '');
      pages.push({
        route: relativeUrl,
        name: name,
        title: getPageTitle(name),
        description: getPageDescription(name),
        type: 'website'
      });
    }
  });
  
  return pages;
}

function getPageTitle(name) {
  const titles = {
    'about': 'About Us - CopyM Team & Mission',
    'marketplace': 'Digital Asset Marketplace - Buy & Sell Tokenized Assets',
    'tokenization': 'Tokenization Platform - Tokenize Real-World Assets',
    'zerogas': 'ZeroGas - Gasless Token Transactions',
    'privacy-ai': 'Privacy AI - AI-Powered Compliance',
    'launchkit': 'LaunchKit - Launch Your Tokenized Asset',
    'glossary': 'Glossary - RWA Tokenization Terms',
    'blog': 'Blog - Insights, Education & Updates',
    'terms-of-services': 'Terms of Services'
  };
  return titles[name] || name.charAt(0).toUpperCase() + name.slice(1);
}

function getPageDescription(name) {
  const descriptions = {
    'about': 'Learn about CopyM - the complete tokenization platform for real-world assets. Discover our mission, team, and vision.',
    'marketplace': 'Browse and trade tokenized real-world assets on CopyM marketplace. Access secure, compliant digital asset investments.',
    'tokenization': 'Tokenize real-world assets with CopyM. Secure, compliant, and accessible platform for digital asset issuance and management.',
    'zerogas': 'Experience gasless transactions on CopyM platform. Trade tokenized assets without worrying about gas fees.',
    'privacy-ai': 'AI-powered privacy and compliance solutions for tokenized assets. Secure, compliant, and intelligent.',
    'launchkit': 'Everything you need to launch your tokenized asset. From compliance to marketplace listing.',
    'glossary': 'Learn about RWA tokenization terms and concepts. Comprehensive glossary for blockchain and digital asset terminology.',
    'blog': 'Explore the latest insights, education, news, and product updates on real-world asset tokenization.',
    'terms-of-services': 'CopyM terms of services. Read our terms and conditions for using the platform.'
  };
  return descriptions[name] || 'CopyM - Complete tokenization platform for real-world assets.';
}

function getFallbackPages() {
  return [
    { route: '/', name: 'index', title: 'CopyM - Complete Tokenization Platform', description: 'CopyM is the complete tokenization platform for real-world assets.', type: 'website' },
    { route: '/about', name: 'about', title: 'About Us - CopyM Team & Mission', description: 'Learn about CopyM - the complete tokenization platform.', type: 'website' },
    { route: '/marketplace', name: 'marketplace', title: 'Digital Asset Marketplace', description: 'Browse and trade tokenized real-world assets.', type: 'website' },
    { route: '/tokenization', name: 'tokenization', title: 'Tokenization Platform', description: 'Tokenize real-world assets with CopyM.', type: 'website' },
  ];
}

function buildStaticPages() {
  console.log('Building static SEO pages...');
  
  const indexPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.log('Dist directory not found, running build first...');
    return;
  }

  const indexHtml = fs.readFileSync(indexPath, 'utf-8');
  const pages = getPagesFromSitemap();
  
  console.log(`Found ${pages.length} pages to generate...`);

  pages.forEach(page => {
    const fileName = page.name === 'index' ? 'index.html' : `${page.name}.html`;
    const filePath = path.join(DIST_DIR, fileName);
    
    let modifiedHtml = indexHtml
      .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
      .replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${page.description}"`)
      .replace(/<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${page.title}"`)
      .replace(/<meta property="og:description" content=".*?"/, `<meta property="og:description" content="${page.description}"`)
      .replace(/<meta name="twitter:title" content=".*?"/, `<meta name="twitter:title" content="${page.title}"`)
      .replace(/<meta name="twitter:description" content=".*?"/, `<meta name="twitter:description" content="${page.description}"`)
      .replace(/<link rel="canonical" href=".*?"/, `<link rel="canonical" href="${SITE_URL}${page.route}"`)
      .replace(/<meta property="og:url" content=".*?"/, `<meta property="og:url" content="${SITE_URL}${page.route}"`)
      .replace(/<meta property="og:type" content=".*?"/, `<meta property="og:type" content="${page.type}"`)
      .replace(/<meta property="og:image" content=".*?"/, `<meta property="og:image" content="${DEFAULT_IMAGE}"`)
      .replace(/<meta name="twitter:image" content=".*?"/, `<meta name="twitter:image" content="${DEFAULT_IMAGE}"`);
    
    fs.writeFileSync(filePath, modifiedHtml);
    console.log(`Generated: ${fileName}`);
  });

  console.log(`Static SEO pages built successfully! (${pages.length} pages)`);
}

buildStaticPages();