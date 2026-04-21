import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('./dist');

const PAGES = [
  { route: '/', name: 'index', title: 'CopyM - Complete Tokenization Platform', description: 'CopyM is the complete tokenization platform for real-world assets. Secure, compliant, and accessible digital asset marketplace.' },
  { route: '/about', name: 'about', title: 'About Us - CopyM Team & Mission', description: 'Learn about CopyM - the complete tokenization platform for real-world assets. Discover our mission, team, and vision.' },
  { route: '/marketplace', name: 'marketplace', title: 'Digital Asset Marketplace - Buy & Sell Tokenized Assets', description: 'Browse and trade tokenized real-world assets on CopyM marketplace. Access secure, compliant digital asset investments.' },
  { route: '/tokenization', name: 'tokenization', title: 'Tokenization Platform - Tokenize Real-World Assets', description: 'Tokenize real-world assets with CopyM. Secure, compliant, and accessible platform for digital asset issuance and management.' },
  { route: '/zerogas', name: 'zerogas', title: 'ZeroGas - Gasless Token Transactions', description: 'Experience gasless transactions on CopyM platform. Trade tokenized assets without worrying about gas fees.' },
  { route: '/privacy-ai', name: 'privacy-ai', title: 'Privacy AI - AI-Powered Compliance', description: 'AI-powered privacy and compliance solutions for tokenized assets. Secure, compliant, and intelligent.' },
  { route: '/launchkit', name: 'launchkit', title: 'LaunchKit - Launch Your Tokenized Asset', description: 'Everything you need to launch your tokenized asset. From compliance to marketplace listing.' },
  { route: '/glossary', name: 'glossary', title: 'Glossary - RWA Tokenization Terms', description: 'Learn about RWA tokenization terms and concepts. Comprehensive glossary for blockchain and digital asset terminology.' },
  { route: '/blog', name: 'blog', title: 'Blog - Insights, Education & Updates', description: 'Explore the latest insights, education, news, and product updates on real-world asset tokenization.' },
  { route: '/terms-of-services', name: 'terms-of-services', title: 'Terms of Services', description: 'CopyM terms of services. Read our terms and conditions for using the platform.' },
];

function buildStaticPages() {
  console.log('Building static SEO pages...');
  
  const indexPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.log('Dist directory not found, running build first...');
    return;
  }

  const indexHtml = fs.readFileSync(indexPath, 'utf-8');

  PAGES.forEach(page => {
    const fileName = page.name === 'index' ? 'index.html' : `${page.name}.html`;
    const filePath = path.join(DIST_DIR, fileName);
    
    let modifiedHtml = indexHtml
      .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
      .replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${page.description}"`)
      .replace(/<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${page.title}"`)
      .replace(/<meta property="og:description" content=".*?"/, `<meta property="og:description" content="${page.description}"`)
      .replace(/<meta name="twitter:title" content=".*?"/, `<meta name="twitter:title" content="${page.title}"`)
      .replace(/<meta name="twitter:description" content=".*?"/, `<meta name="twitter:description" content="${page.description}"`)
      .replace(/<link rel="canonical" href=".*?"/, `<link rel="canonical" href="https://copym.xyz${page.route}"`)
      .replace(/<meta property="og:url" content=".*?"/, `<meta property="og:url" content="https://copym.xyz${page.route}"`);
    
    fs.writeFileSync(filePath, modifiedHtml);
    console.log(`Generated: ${filePath}`);
  });

  console.log('Static SEO pages built successfully!');
}

buildStaticPages();