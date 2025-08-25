import Hero from "./sections/Hero";
import CurvedSectionDivider from "./sections/CurvedSectionDivider";
import TrackYourCrypto from "./sections/TrackYourCrypto";
import AIInvestingSection from "./sections/AIInvestingSection";
import AuditSection from "./sections/AuditSection";
import NewsletterSection from "./sections/NewsletterSection";
import Testimonials from "./sections/Testimonials";
import SupportedAssets from "./sections/SupportedAssets";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-blue-100">
      <Hero />
      <CurvedSectionDivider />
      <TrackYourCrypto />
      <AIInvestingSection />
      <AuditSection />
      <NewsletterSection />
      {/* <SupportedAssets /> */}
      <Testimonials />
    </div>
  );
}