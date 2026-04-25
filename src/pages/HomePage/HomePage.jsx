import { Helmet } from 'react-helmet-async';
import { generatePageSEO, generateWebPageSchema } from '../../utils/seo';
import Hero from "./sections/Hero";
import LogoCarousel from "./sections/LogoCarousel";
import TrackYourCrypto from "./sections/TrackYourCrypto";
import AIInvestingSection from "./sections/AIInvestingSection";
// import HowItWorksSection from "./sections/HowItWorksSection";
import RWAAssetsSection from "./sections/RWAAssetsSection";
import NetworkShowcase from "./sections/NetworkShowcase";
import AuditSection from "./sections/AuditSection";
import FAQSection from "./sections/FAQSection";
import CTASection from "./sections/CTASection";
import SupportedAssets from "./sections/SupportedAssets";
import FeatureSection from "./sections/FeatureSection";
import WhoWeServe from "./sections/WhoWeServe";
import ProductStackReview from "./sections/ProductStackReview";
import TestimonialsSection from "./sections/Testimonials";
import GreenarySection from "./sections/GreenarySection";



export default function HomePage() {
  const seo = generatePageSEO({
    title: 'Complete Tokenization Platform for Real-World Assets',
    description: 'CopyM is the complete tokenization platform for real-world assets. Secure, compliant, and accessible digital asset marketplace for RWA tokenization.',
    canonical: '/',
  });

  return (
    <div className="min-h-screen bg-white p-0 m-0 w-full">
      {/* SEO */}
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.meta.description} />
        <meta name="robots" content={seo.meta.robots.content} />
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
            name: 'CopyM - Complete Tokenization Platform',
            description: 'CopyM is the complete tokenization platform for real-world assets.',
            url: seo.meta.canonical,
          }))}
        </script>
      </Helmet>

      <Hero />
      <LogoCarousel />
      {/* Lottie Cards Section - Replaced SVG layouts */}

      <FeatureSection />
      <WhoWeServe />
      <ProductStackReview />
      {/* <HowItWorksSection /> */}
      <AIInvestingSection />

      <RWAAssetsSection />
      <TrackYourCrypto />
      <AuditSection />
      <FAQSection />
      <TestimonialsSection />
      {/* <GreenarySection /> */}
      <CTASection />
      {/* <SupportedAssets /> */}

    </div>
  );
}