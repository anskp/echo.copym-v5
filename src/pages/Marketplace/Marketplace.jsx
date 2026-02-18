import Hero from "./sections/Hero";
// import MarketplaceIntro from "./sections/MarketplaceIntro";
import HowItWorks from "./sections/HowItWorks";
import WhyItMatters from "./sections/WhyItMatters";
import TradableAssets from "./sections/TradableAssets";
import Publicmarketplace from "./sections/Publicmarketplace";
import FAQsection from "./sections/FAQsection";

// import Disclaimer from './sections/Disclaimer';

export default function Marketplace() {
  return (
    <div className="bg-white">
      <Hero />
      <TradableAssets />
      <WhyItMatters />
      <HowItWorks />
      <Publicmarketplace />
      <FAQsection />

    </div>
  );
}
