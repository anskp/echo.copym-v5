import Hero from "./sections/Hero";
import CurvedSectionDivider from "./sections/CurvedSectionDivider";
import TrackYourCrypto from "./sections/TrackYourCrypto";
<<<<<<< HEAD
import AIInvestingSection from "./sections/AIInvestingSection";
import IssuerSection from "./sections/IssuerSection";
=======
>>>>>>> 96cb1d3b9677243b9dcf89cb251a9ce3089b06f8
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
<<<<<<< HEAD
      <AIInvestingSection />
      {/* <SupportedAssets /> */}
      <IssuerSection />
=======
>>>>>>> 96cb1d3b9677243b9dcf89cb251a9ce3089b06f8
      <WhyCopym />
      <Testimonials />
      <FAQ />
    </div>
  );
}