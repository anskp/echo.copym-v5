import Hero from "./sections/Hero";
import TrackYourCrypto from "./sections/TrackYourCrypto";
import AIInvestingSection from "./sections/AIInvestingSection";
import RWAAssetsSection from "./sections/RWAAssetsSection";
import AuditSection from "./sections/AuditSection";
import FAQSection from "./sections/FAQSection";
import NewsletterSection from "./sections/NewsletterSection";
import Testimonials from "./sections/Testimonials";
import SupportedAssets from "./sections/SupportedAssets";
import FourLayouts from "../../components/SVG/4layouts.svg";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white p-0 m-0">
      <Hero />
      {/* Four Layouts SVG Section */}
      <section className="py-4 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <img 
              src={FourLayouts} 
              alt="Four Layout Features" 
              className="w-full max-w-6xl h-auto"
            />
          </div>
        </div>
      </section>
      <TrackYourCrypto />
      <AIInvestingSection />
      <RWAAssetsSection />
      <AuditSection />
      <FAQSection />
      <Testimonials />
      <NewsletterSection />
      {/* <SupportedAssets /> */}
    </div>
  );
}