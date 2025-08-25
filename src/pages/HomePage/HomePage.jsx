import Hero from "./sections/Hero";
import CurvedSectionDivider from "./sections/CurvedSectionDivider";
import TrackYourCrypto from "./sections/TrackYourCrypto";
import WhyCopym from "./sections/WhyCopym";
import Testimonials from "./sections/Testimonials";
import SupportedAssets from "./sections/SupportedAssets";
import FAQ from "./sections/FAQ";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-blue-100">
      <Hero />
      <CurvedSectionDivider />
      <TrackYourCrypto />
      <WhyCopym />
      <Testimonials />
      <FAQ />
    </div>
  );
}