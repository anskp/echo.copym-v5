import Hero from "./sections/Hero";
import TrackYourCrypto from "./sections/TrackYourCrypto";
import AIInvestingSection from "./sections/AIInvestingSection";
import RWAAssetsSection from "./sections/RWAAssetsSection";
import FAQSection from "./sections/FAQSection";
import SupportedAssets from "./sections/SupportedAssets";
import LottieCardsSection from "./sections/LottieCardsSection";



export default function HomePage() {

  return (
     <div className="min-h-screen bg-white p-0 m-0 overflow-x-hidden">
      <Hero />
      {/* Lottie Cards Section - Replaced SVG layouts */}
      <LottieCardsSection />
      <TrackYourCrypto />
      <AIInvestingSection />
      <RWAAssetsSection />
      <FAQSection />
    
      {/* <SupportedAssets /> */}
      
    </div>
  );
}