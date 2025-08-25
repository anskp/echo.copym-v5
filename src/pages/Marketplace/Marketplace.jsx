import Hero from "./sections/Hero";
import MarketSlider from "./sections/MarketSlider";

export default function Marketplace() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="py-12 text-center">
        <MarketSlider />
      </div>
    </div>
  );
}
