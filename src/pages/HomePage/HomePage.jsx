import Hero from "./sections/Hero";
import LogoCarousel from "./sections/LogoCarousel";
import TrackYourCrypto from "./sections/TrackYourCrypto";
import AIInvestingSection from "./sections/AIInvestingSection";
import HowItWorksSection from "./sections/HowItWorksSection";
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

  return (
    <div className="min-h-screen bg-white p-0 m-0 overflow-x-hidden w-full">
      <Hero />
      <LogoCarousel />
      {/* Lottie Cards Section - Replaced SVG layouts */}

      <FeatureSection />
      <WhoWeServe />
      <ProductStackReview />
      <HowItWorksSection />
      <AIInvestingSection />
      <NetworkShowcase />
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