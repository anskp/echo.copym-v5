import Hero from "./sections/Hero";
import TrackYourCrypto from "./sections/TrackYourCrypto";
import AIInvestingSection from "./sections/AIInvestingSection";
import RWAAssetsSection from "./sections/RWAAssetsSection";
import AuditSection from "./sections/AuditSection";
import FAQSection from "./sections/FAQSection";
import SupportedAssets from "./sections/SupportedAssets";
import FeatureSection from "./sections/FeatureSection";
import TestimonialsSection from "./sections/Testimonials";



export default function HomePage() {

  return (
     <div className="min-h-screen bg-white p-0 m-0 overflow-x-hidden">
      <Hero />
      {/* Lottie Cards Section - Replaced SVG layouts */}
      
      <FeatureSection />
      <TrackYourCrypto />
      <AIInvestingSection />
      <RWAAssetsSection />
      <AuditSection />
      <FAQSection />
    <TestimonialsSection />
      {/* <SupportedAssets /> */}
      
    </div>
  );
}