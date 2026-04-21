import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('./dist');
const SITE_URL = 'https://copym.xyz';
const DEFAULT_IMAGE = '/assets/copym/png/Copym-01-1.avif';

const PAGES = [
  // Main pages
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
  
  // Blog posts
  { route: '/blog/education/understanding-rwa-tokenization', name: 'blog_education_understanding-rwa-tokenization', title: 'Understanding RWA Tokenization - Complete Guide', description: 'Learn what RWA tokenization is, how it works, and why it is revolutionizing asset ownership. Comprehensive guide for beginners and advanced investors.', type: 'article' },
  { route: '/blog/insights/how-real-world-asset-tokenization-is-transforming-investments', name: 'blog_insights_how-real-world-asset-tokenization-is-transforming-investments', title: 'How Real-World Asset Tokenization is Transforming Investments', description: 'Discover how tokenization is changing the investment landscape and opening new opportunities for investors of all sizes.', type: 'article' },
  { route: '/blog/news/copym-toknization', name: 'blog_news_copym-toknization', title: 'CopyM Tokenization - Leading the RWA Revolution', description: 'Learn how CopyM is pioneering the tokenization of real-world assets and making investment opportunities accessible to everyone.', type: 'article' },
  { route: '/blog/articles/future-compliant-marketplaces', name: 'blog_articles_future-compliant-marketplaces', title: 'The Future of Compliant Marketplaces', description: 'Explore how compliant marketplaces are shaping the future of digital asset trading and what it means for investors.', type: 'article' },
  { route: '/blog/education/carbon-credits-blockchain-guide', name: 'blog_education_carbon-credits-blockchain-guide', title: 'Carbon Credits on Blockchain - Complete Guide', description: 'Learn how carbon credits are being tokenized on blockchain for transparent trading and environmental impact.', type: 'article' },
  { route: '/blog/news/gold-tokenization-guide', name: 'blog_news_gold-tokenization-guide', title: 'Gold Tokenization - A Complete Guide', description: 'Learn how to tokenize gold and other precious metals on the blockchain for easier investment and trading.', type: 'article' },
  { route: '/blog/product updates/create-first-tokenized-asset', name: 'blog_product_Updates_create-first-tokenized-asset', title: 'Create Your First Tokenized Asset', description: 'Step-by-step guide to creating your first tokenized asset on CopyM platform. From concept to launch.', type: 'article' },
  { route: '/blog/product updates/cora-ai-investment-assistant', name: 'blog_product_Updates_cora-ai-investment-assistant', title: 'Cora AI - Your Investment Assistant', description: 'Meet Cora, the AI-powered investment assistant that helps you make better decisions in the RWA market.', type: 'article' },
  { route: '/blog/news/global-banks-blockchain-assets', name: 'blog_news_global-banks-blockchain-assets', title: 'Global Banks Embracing Blockchain Assets', description: 'How major banks are adopting blockchain and tokenized assets in their investment strategies.', type: 'article' },
  { route: '/blog/insights/liquidity-models-institutional-rwa', name: 'blog_insights_liquidity-models-institutional-rwa', title: 'Liquidity Models for Institutional RWA', description: 'Understanding liquidity models for institutional investors in real-world asset tokenization.', type: 'article' },
  { route: '/blog/education/smart-contracts-tokenization', name: 'blog_education_smart-contracts-tokenization', title: 'Smart Contracts for Tokenization', description: 'Learn how smart contracts power asset tokenization and automate key processes in RWA markets.', type: 'article' },
  { route: '/blog/education/token-standards-explained', name: 'blog_education_token-standards-explained', title: 'Token Standards Explained - ERC-20, ERC-721, ERC-1155', description: 'Understanding different token standards and their use cases in real-world asset tokenization.', type: 'article' },
  { route: '/blog/insights/institutional-adoption-barriers', name: 'blog_insights_institutional-adoption-barriers', title: 'Barriers to Institutional Adoption of RWA', description: 'Key challenges preventing institutional adoption of tokenized assets and how to overcome them.', type: 'article' },
  { route: '/blog/news/regulation-tokenization-2026', name: 'blog_news_regulation-tokenization-2026', title: 'RWA Tokenization Regulation 2026', description: 'Latest regulatory updates for tokenization in 2026 and what it means for investors and issuers.', type: 'article' },
  
  // Glossary terms (top terms)
  { route: '/glossary/asset-tokenization', name: 'glossary_asset-tokenization', title: 'Asset Tokenization - RWA Tokenization Glossary', description: 'Learn about asset tokenization - the process of converting ownership of real-world assets into digital tokens on a blockchain.', type: 'article' },
  { route: '/glossary/blockchain', name: 'glossary_blockchain', title: 'Blockchain - RWA Tokenization Glossary', description: 'Learn about blockchain technology - a distributed ledger that records transactions across multiple computers securely.', type: 'article' },
  { route: '/glossary/ethereum', name: 'glossary_ethereum', title: 'Ethereum - RWA Tokenization Glossary', description: 'Learn about Ethereum - a decentralized blockchain platform that enables smart contracts and dApps.', type: 'article' },
  { route: '/glossary/nft', name: 'glossary_nft', title: 'NFT - Non-Fungible Token - Glossary', description: 'Learn about NFTs - unique digital tokens that represent ownership of specific items or assets.', type: 'article' },
  { route: '/glossary/smart-contract', name: 'glossary_smart-contract', title: 'Smart Contract - RWA Tokenization Glossary', description: 'Learn about smart contracts - self-executing contracts with terms directly written into code.', type: 'article' },
  { route: '/glossary/defi', name: 'glossary_defi', title: 'DeFi - Decentralized Finance - Glossary', description: 'Learn about DeFi - financial services built on blockchain technology without traditional intermediaries.', type: 'article' },
  { route: '/glossary/stablecoin', name: 'glossary_stablecoin', title: 'Stablecoin - RWA Tokenization Glossary', description: 'Learn about stablecoins - cryptocurrencies pegged to a stable asset like the US Dollar.', type: 'article' },
  { route: '/glossary/cryptocurrency', name: 'glossary_cryptocurrency', title: 'Cryptocurrency - RWA Tokenization Glossary', description: 'Learn about cryptocurrency - digital or virtual currency secured by cryptography.', type: 'article' },
  { route: '/glossary/web3', name: 'glossary_web3', title: 'Web3 - RWA Tokenization Glossary', description: 'Learn about Web3 - the next generation of the internet built on blockchain technology.', type: 'article' },
  { route: '/glossary/token', name: 'glossary_token', title: 'Token - RWA Tokenization Glossary', description: 'Learn about tokens - digital assets issued on a blockchain that represent value or utility.', type: 'article' },
];

function buildStaticPages() {
  console.log('Building static SEO pages...');
  
  const indexPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.log('Dist directory not found!');
    return;
  }

  let indexHtml = fs.readFileSync(indexPath, 'utf-8');
  
  // Ensure og:image and twitter:image meta tags exist
  if (!indexHtml.includes('og:image')) {
    indexHtml = indexHtml.replace('</head>', 
      `<meta property="og:image" content="${DEFAULT_IMAGE}" />
  <meta name="twitter:image" content="${DEFAULT_IMAGE}" />
  </head>`);
  }
  
  console.log(`Generating ${PAGES.length} pages...`);

  PAGES.forEach(page => {
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
    console.log(`Generated: ${fileName}`);
  });

  console.log(`Static SEO pages built successfully! (${PAGES.length} pages)`);
}

buildStaticPages();