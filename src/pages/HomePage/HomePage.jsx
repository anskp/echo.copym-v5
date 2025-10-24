import Hero from "./sections/Hero";
import TrackYourCrypto from "./sections/TrackYourCrypto";
import AIInvestingSection from "./sections/AIInvestingSection";
import RWAAssetsSection from "./sections/RWAAssetsSection";
import FAQSection from "./sections/FAQSection";
import SupportedAssets from "./sections/SupportedAssets";
import Layout1 from "../../components/SVG/4layouts1.svg";
import Layout2 from "../../components/SVG/4layouts1.1.svg";
import Layout3 from "../../components/SVG/4layouts1.2.svg";
import Layout4 from "../../components/SVG/4layouts1.3.svg";
import Layout5 from "../../components/SVG/4layouts1.4.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [currentLayout, setCurrentLayout] = useState(0);
  
  const layouts = [
    { src: Layout1, alt: "Layout 1 Features" },
    { src: Layout2, alt: "Layout 2 Features" },
    { src: Layout3, alt: "Layout 3 Features" },
    { src: Layout4, alt: "Layout 4 Features" },
    { src: Layout5, alt: "Layout 5 Features" }
  ];

  // Auto-cycle through layouts every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLayout((prev) => (prev + 1) % layouts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [layouts.length]);

  return (
     <div className="min-h-screen bg-white p-0 m-0">
      <Hero />
      {/* Layered SVG Animation Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-6xl h-auto min-h-[400px]">
               <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentLayout}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0"
                >
                  <img 
                    src={layouts[currentLayout].src} 
                    alt={layouts[currentLayout].alt} 
                    className="w-full h-auto"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
      <TrackYourCrypto />
      <AIInvestingSection />
      <RWAAssetsSection />
      <FAQSection />
      {/* <SupportedAssets /> */}
    </div>
  );
}