import Hero from "./sections/Hero";
import MarketSlider from "./sections/MarketSlider";
import WhyInvestWithUs from "./sections/WhyInvestWithUs";
import AppPeekSection from "./sections/AppPeekSection";
import FAQsection from "./sections/FAQsection";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MarketplaceSVG from '../../components/SVG/marketplace1.svg';

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      {/* SVG Image between Hero and AppPeekSection */}
      <div className="flex justify-center items-center py-8 sm:py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-full lg:max-w-[90vw] px-4 sm:px-6 lg:px-8"
        >
          <img 
            src={MarketplaceSVG} 
            alt="Marketplace" 
            className="w-full h-auto max-h-[80vh] object-contain"
          />
        </motion.div>
      </div>

      <AppPeekSection />
      <WhyInvestWithUs />
      <div className="text-center">
        <MarketSlider />
      </div>
      <FAQsection />

      {/* Mini CTA Section */}
      <section className="bg-white py-12 md:py-16 text-center text-gray-900">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-6 uppercase dm-sans">
             <span className="text-gray-900">READY TO EXPLORE </span>
             <span className="text-emerald-600">TOKENIZED ASSETS?</span>
           </h2>
           <p className="text-gray-600 text-lg md:text-xl mb-6 max-w-2xl mx-auto">
             Browse live offerings or join our investor community to get early access drops.
           </p>
          <Link
            to="/access"
            className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
          >
            Get Early Access <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
