import Hero from "./sections/Hero";
import MarketplaceIntro from "./sections/MarketplaceIntro";
import HowItWorks from "./sections/HowItWorks";
import WhyItMatters from "./sections/WhyItMatters";
import TradableAssets from "./sections/TradableAssets";
import WhyInvestWithUs from "./sections/WhyInvestWithUs";
import FAQsection from "./sections/FAQsection";

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <MarketplaceIntro />
      <HowItWorks />
      <WhyItMatters />
      <TradableAssets />
      <WhyInvestWithUs />
      <FAQsection />
    </div>
  );
}
