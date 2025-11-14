import Hero from "./sections/Hero";
import MarketSlider from "./sections/MarketSlider";
import WhyInvestWithUs from "./sections/WhyInvestWithUs";
import AppPeekSection from "./sections/AppPeekSection";
import FAQsection from "./sections/FAQsection";

import { Link } from "react-router-dom";

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <AppPeekSection />
      <WhyInvestWithUs />
      <div className="text-center">
        <MarketSlider />
      </div>
      <FAQsection />

      {/* Mini CTA Section */}
      <section className="bg-white py-8 sm:py-12 md:py-16 text-center text-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6 uppercase dm-sans">
             <span className="text-gray-900">READY TO EXPLORE </span>
             <span className="text-emerald-600">TOKENIZED ASSETS?</span>
           </h2>
           <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
             Browse live offerings or join our investor community to get early access drops.
           </p>
          <Link
            to="/access"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            Get Early Access <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
