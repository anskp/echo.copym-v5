import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('./dist');
const PAGES = [
  {
    route: '/',
    title: 'CopyM - Complete Tokenization Platform for Real-World Assets',
    description: 'CopyM is the complete tokenization platform for real-world assets. Secure, compliant, and accessible digital asset marketplace for RWA tokenization.',
    ogTitle: 'CopyM - Complete Tokenization Platform',
    ogDescription: 'CopyM is the complete tokenization platform for real-world assets. Secure, compliant, and accessible digital asset marketplace.',
  },
  {
    route: '/about',
    title: 'About Us - CopyM Team & Mission',
    description: 'Learn about CopyM - the complete tokenization platform for real-world assets. Discover our mission, team, and vision for democratizing investments.',
    ogTitle: 'About Us - CopyM Team & Mission',
    ogDescription: 'Learn about CopyM - the complete tokenization platform for real-world assets.',
  },
  {
    route: '/marketplace',
    title: 'Digital Asset Marketplace - Buy & Sell Tokenized Assets',
    description: 'Browse and trade tokenized real-world assets on CopyM marketplace. Access secure, compliant digital asset investments.',
    ogTitle: 'Digital Asset Marketplace - Buy & Sell Tokenized Assets',
    ogDescription: 'Browse and trade tokenized real-world assets on CopyM marketplace.',
  },
  {
    route: '/tokenization',
    title: 'Tokenization Platform - Tokenize Real-World Assets',
    description: 'Tokenize real-world assets with CopyM. Secure, compliant, and accessible platform for digital asset issuance and management.',
    ogTitle: 'Tokenization Platform - Tokenize Real-World Assets',
    ogDescription: 'Tokenize real-world assets with CopyM. Secure, compliant, and accessible platform.',
  },
  {
    route: '/zerogas',
    title: 'ZeroGas - Gasless Token Transactions',
    description: 'Experience gasless transactions on CopyM platform. Trade tokenized assets without worrying about gas fees.',
    ogTitle: 'ZeroGas - Gasless Token Transactions',
    ogDescription: 'Experience gasless transactions on CopyM platform. Trade without gas fees.',
  },
  {
    route: '/privacy-ai',
    title: 'Privacy AI - AI-Powered Compliance',
    description: 'AI-powered privacy and compliance solutions for tokenized assets. Secure, compliant, and intelligent.',
    ogTitle: 'Privacy AI - AI-Powered Compliance',
    ogDescription: 'AI-powered privacy and compliance solutions for tokenized assets.',
  },
  {
    route: '/launchkit',
    title: 'LaunchKit - Launch Your Tokenized Asset',
    description: 'Everything you need to launch your tokenized asset. From compliance to marketplace listing.',
    ogTitle: 'LaunchKit - Launch Your Tokenized Asset',
    ogDescription: 'Everything you need to launch your tokenized asset.',
  },
  {
    route: '/glossary',
    title: 'Glossary - RWA Tokenization Terms',
    description: 'Learn about RWA tokenization terms and concepts. Comprehensive glossary for blockchain and digital asset terminology.',
    ogTitle: 'Glossary - RWA Tokenization Terms',
    ogDescription: 'Learn about RWA tokenization terms and concepts.',
  },
  {
    route: '/blog',
    title: 'Blog - Insights, Education & Updates',
    description: 'Explore the latest insights, education, news, and product updates on real-world asset tokenization and digital assets.',
    ogTitle: 'Blog - Insights, Education & Updates',
    ogDescription: 'Explore the latest insights on real-world asset tokenization.',
  },
  {
    route: '/terms-of-services',
    title: 'Terms of Services',
    description: 'CopyM terms of services. Read our terms and conditions for using the platform.',
    ogTitle: 'Terms of Services',
    ogDescription: 'CopyM terms of services.',
  },
];

function generateHtml(page) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <meta name="robots" content="index, follow">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="CopyM">
  <meta property="og:title" content="${page.ogTitle}">
  <meta property="og:description" content="${page.ogDescription}">
  <meta property="og:image" content="https://copym.xyz/assets/copym/png/Copym-01-1.avif">
  <meta property="og:url" content="https://copym.xyz${page.route}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${page.ogTitle}">
  <meta name="twitter:description" content="${page.ogDescription}">
  <meta name="twitter:image" content="https://copym.xyz/assets/copym/png/Copym-01-1.avif">
  <link rel="canonical" href="https://copym.xyz${page.route}">
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>`;
}

function buildStaticPages() {
  console.log('Building static SEO pages...');
  
  // Ensure dist directory exists
  if (!fs.existsSync(DIST_DIR)) {
    console.log('Dist directory not found, running build first...');
    return;
  }

  // Generate static HTML for each page
  PAGES.forEach(page => {
    const html = generateHtml(page);
    const filePath = path.join(DIST_DIR, `${page.route === '/' ? 'index' : page.route}.html`);
    
    // Create directory if it doesn't exist
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Check if index.html exists (SPA fallback)
    const indexPath = path.join(DIST_DIR, 'index.html');
    if (fs.existsSync(indexPath)) {
      const indexHtml = fs.readFileSync(indexPath, 'utf-8');
      
      // Inject meta tags into the index.html
      let modifiedHtml = indexHtml
        .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
        .replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${page.description}"`)
        .replace(/<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${page.ogTitle}"`)
        .replace(/<meta property="og:description" content=".*?"/, `<meta property="og:description" content="${page.ogDescription}"`)
        .replace(/<meta name="twitter:title" content=".*?"/, `<meta name="twitter:title" content="${page.ogTitle}"`)
        .replace(/<meta name="twitter:description" content=".*?"/, `<meta name="twitter:description" content="${page.ogDescription}"`)
        .replace(/<link rel="canonical" href=".*?"/, `<link rel="canonical" href="https://copym.xyz${page.route}"`);
      
      // Ensure OG tags exist if not present
      if (!modifiedHtml.includes('og:title')) {
        modifiedHtml = modifiedHtml.replace('</head>', 
          `<meta property="og:title" content="${page.ogTitle}">
  <meta property="og:description" content="${page.ogDescription}">
  <meta property="og:image" content="https://copym.xyz/assets/copym/png/Copym-01-1.avif">
  <meta property="og:url" content="https://copym.xyz${page.route}">
  <meta name="twitter:title" content="${page.ogTitle}">
  <meta name="twitter:description" content="${page.ogDescription}">
  <meta name="twitter:image" content="https://copym.xyz/assets/copym/png/Copym-01-1.avif">
  </head>`);
      }
      
      fs.writeFileSync(filePath, modifiedHtml);
      console.log(`Generated: ${filePath}`);
    }
  });

  console.log('Static SEO pages built successfully!');
}

buildStaticPages();