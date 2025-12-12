import Hero from "./sections/Hero";
import TrackYourCrypto from "./sections/TrackYourCrypto";
import AIInvestingSection from "./sections/AIInvestingSection";
import HomeCycleSection from "./sections/HomeCycleSection";
import RWAAssetsSection from "./sections/RWAAssetsSection";
import NetworkShowcase from "./sections/NetworkShowcase";
import AuditSection from "./sections/AuditSection";
import FAQSection from "./sections/FAQSection";
import SupportedAssets from "./sections/SupportedAssets";
import FeatureSection from "./sections/FeatureSection";
import WhoWeServe from "./sections/WhoWeServe";
import ProductStackReview from "./sections/ProductStackReview";
import TestimonialsSection from "./sections/Testimonials";



export default function HomePage() {

  return (
     <div className="min-h-screen bg-white p-0 m-0 overflow-x-hidden w-full">
      <Hero />
      {/* Lottie Cards Section - Replaced SVG layouts */}
      
      <FeatureSection />
      <WhoWeServe />
      <ProductStackReview />
      <TrackYourCrypto />
      <HomeCycleSection />
      <AIInvestingSection />
      <NetworkShowcase />
      <RWAAssetsSection />
      <AuditSection />
      <FAQSection />
    <TestimonialsSection />
      {/* <SupportedAssets /> */}
      
    </div>
  );
}