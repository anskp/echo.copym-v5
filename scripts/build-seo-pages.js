import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('./dist');
const SITE_URL = 'https://copym.xyz';
const DEFAULT_IMAGE = '/assets/copym/png/Copym-01-1.avif';

function getPageTitle(name) {
  const titles = {
    'about': 'About Us - CopyM Team & Mission',
    'marketplace': 'Digital Asset Marketplace - Buy & Sell Tokenized Assets',
    'tokenization': 'Tokenization Platform - Tokenize Real-World Assets',
    'zerogas': 'ZeroGas - Gasless Token Transactions',
    'privacy-ai': 'Privacy AI - AI-Powered Compliance',
    'launchkit': 'LaunchKit - Launch Your Tokenized Asset',
    'glossary': 'Glossary - RWA Tokenization Terms',
    'blog': 'Blog - Insights, Education & Updates on RWA Tokenization',
    'terms-of-services': 'Terms of Services'
  };
  return titles[name] || name.charAt(0).toUpperCase() + name.slice(1);
}

function getPageDescription(name) {
  const descriptions = {
    'about': 'Learn about CopyM - the complete tokenization platform for real-world assets. Discover our mission, team, and vision for democratizing investments.',
    'marketplace': 'Browse and trade tokenized real-world assets on CopyM marketplace. Access secure, compliant digital asset investments with low fees.',
    'tokenization': 'Tokenize real-world assets with CopyM. Secure, compliant, and accessible platform for digital asset issuance, management, and trading.',
    'zerogas': 'Experience gasless transactions on CopyM platform. Trade tokenized assets without worrying about gas fees. ZeroGas makes DeFi accessible.',
    'privacy-ai': 'AI-powered privacy and compliance solutions for tokenized assets. Secure, compliant, and intelligent automated monitoring and reporting.',
    'launchkit': 'Everything you need to launch your tokenized asset. From legal compliance to marketplace listing and investor onboarding.',
    'glossary': 'Learn about RWA tokenization terms and concepts. Comprehensive glossary for blockchain, DeFi, and digital asset terminology.',
    'blog': 'Explore the latest insights, education, news, and product updates on real-world asset tokenization, blockchain technology, and digital investments.',
    'terms-of-services': 'CopyM terms of services. Read our terms and conditions for using the platform.'
  };
  return descriptions[name] || 'CopyM - Complete tokenization platform for real-world assets.';
}

function getPagesFromSitemap() {
  const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');
  console.log('Looking for sitemap at:', sitemapPath);
  
  if (!fs.existsSync(sitemapPath)) {
    console.log('Sitemap not found - using hardcoded pages');
    return getHardcodedPages();
  }
  
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  const urlMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g);
  
  if (!urlMatches) {
    console.log('No URLs found in sitemap - using hardcoded pages');
    return getHardcodedPages();
  }
  
  const pages = [];
  const urls = urlMatches.map(m => m.replace(/<\/?loc>/g, ''));
  
  console.log(`Found ${urls.length} URLs in sitemap`);
  
  urls.forEach(url => {
    if (!url.includes('copym.xyz')) return;
    
    const relativeUrl = url.replace('https://copym.xyz', '');
    
    if (relativeUrl === '/') {
      pages.push({
        route: '/',
        name: 'index',
        title: 'CopyM - Complete Tokenization Platform for Real-World Assets',
        description: 'CopyM is the complete tokenization platform for real-world assets. Secure, compliant, and accessible digital asset marketplace for RWA.',
        type: 'website'
      });
    } else if (relativeUrl.startsWith('/glossary/')) {
      const slug = relativeUrl.replace('/glossary/', '');
      const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      pages.push({
        route: relativeUrl,
        name: `glossary_${slug}`,
        title: `${title} - RWA Tokenization Glossary`,
        description: `Learn about ${title.toLowerCase()} - comprehensive definition and explanation in real-world asset tokenization and blockchain.`,
        type: 'article'
      });
    } else if (relativeUrl.startsWith('/blog/') && relativeUrl !== '/blog') {
      const slug = relativeUrl.replace('/blog/', '').replace(/\//g, '_').replace(/%20/g, '-');
      pages.push({
        route: relativeUrl,
        name: `blog_${slug}`,
        title: 'CopyM Blog - Tokenization Insights',
        description: 'Read our latest article about real-world asset tokenization, blockchain technology, DeFi, and digital investment strategies.',
        type: 'article'
      });
    } else if (!relativeUrl.includes('/')) {
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
  
  console.log(`Parsed ${pages.length} pages from sitemap`);
  return pages;
}

function getHardcodedPages() {
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
    console.log('Dist directory not found!');
    return;
  }

  let indexHtml = fs.readFileSync(indexPath, 'utf-8');
  
  // Ensure og:image and twitter:image meta tags exist with relative path
  if (!indexHtml.includes('og:image')) {
    indexHtml = indexHtml.replace('</head>', 
      `<meta property="og:image" content="${DEFAULT_IMAGE}" />
  <meta name="twitter:image" content="${DEFAULT_IMAGE}" />
  </head>`);
  }
  
  const pages = getPagesFromSitemap();
  
  console.log(`Generating ${pages.length} pages...`);

  pages.forEach(page => {
    const fileName = page.name === 'index' ? 'index.html' : `${page.name}.html`;
    const filePath = path.join(DIST_DIR, fileName);
    
    let modifiedHtml = indexHtml
      .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
      .replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${page.description}"`)
      .replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${page.title}"`)
      .replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${page.description}"`)
      .replace(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${page.title}"`)
      .replace(/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${page.description}"`)
      .replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${SITE_URL}${page.route}"`)
      .replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${SITE_URL}${page.route}"`)
      .replace(/<meta property="og:type" content="[^"]*"/, `<meta property="og:type" content="${page.type}"`)
      .replace(/<meta property="og:image" content="[^"]*"/, `<meta property="og:image" content="${DEFAULT_IMAGE}"`)
      .replace(/<meta name="twitter:image" content="[^"]*"/, `<meta name="twitter:image" content="${DEFAULT_IMAGE}"`);
    
    fs.writeFileSync(filePath, modifiedHtml);
  });

  console.log(`Static SEO pages built successfully! (${pages.length} pages)`);
}

buildStaticPages();