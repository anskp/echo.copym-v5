import Hero from "./sections/Hero";
import MarketSlider from "./sections/MarketSlider";
import WhyInvestWithUs from "./sections/WhyInvestWithUs";
import AppPeekSection from "./sections/AppPeekSection";

export default function Marketplace() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AppPeekSection />
      <WhyInvestWithUs />
      <div className="text-center">
        <MarketSlider />
      </div>
    </div>
  );
}
