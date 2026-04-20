import { Helmet } from 'react-helmet-async';
import { generatePageSEO, generateWebPageSchema } from '../../utils/seo';
import Hero from "./sections/Hero";
// import MarketplaceIntro from "./sections/MarketplaceIntro";
import HowItWorks from "./sections/HowItWorks";
import WhyItMatters from "./sections/WhyItMatters";
import TradableAssets from "./sections/TradableAssets";
import FAQsection from "./sections/FAQsection";

// import Disclaimer from './sections/Disclaimer';

export default function Marketplace() {
  const seo = generatePageSEO({
    title: 'Digital Asset Marketplace - Buy & Sell Tokenized Assets',
    description: 'Browse and trade tokenized real-world assets on CopyM marketplace. Access secure, compliant digital asset investments.',
    canonical: '/marketplace',
  });

  return (
    <div className="bg-white">
      {/* SEO */}
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.meta.description} />
        <link rel="canonical" href={seo.meta.canonical} />
        <meta property="og:type" content={seo.meta.og.type} />
        <meta property="og:title" content={seo.meta.og.title} />
        <meta property="og:description" content={seo.meta.og.description} />
        <meta property="og:image" content={seo.meta.og.image} />
        <meta property="og:url" content={seo.meta.og.url} />
        <meta name="twitter:card" content={seo.meta.twitter.card} />
        <meta name="twitter:title" content={seo.meta.twitter.title} />
        <meta name="twitter:description" content={seo.meta.twitter.description} />
        <meta name="twitter:image" content={seo.meta.twitter.image} />
        <script type="application/ld+json">
          {JSON.stringify(generateWebPageSchema({
            name: 'Digital Asset Marketplace',
            description: 'Browse and trade tokenized real-world assets on CopyM marketplace.',
            url: seo.meta.canonical,
          }))}
        </script>
      </Helmet>

      <Hero />
      <TradableAssets />
      <WhyItMatters />
      <HowItWorks />
      <FAQsection />

    </div>
  );
}
