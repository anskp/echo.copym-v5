import Hero from "./sections/Hero";
import CurvedSectionDivider from "./sections/CurvedSectionDivider";
import TrackYourCrypto from "./sections/TrackYourCrypto";
import AIInvestingSection from "./sections/AIInvestingSection";
import AuditSection from "./sections/AuditSection";
import FAQSection from "./sections/FAQSection";
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
      <FAQSection />
      <NewsletterSection />
      {/* <SupportedAssets /> */}
      <Testimonials />
    </div>
  );
}