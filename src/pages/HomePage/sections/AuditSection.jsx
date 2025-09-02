import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Import blockchain icons
import { 
  ethereum, 
  polygon, 
  bitcoin, 
  solana, 
  avalanche, 
  optimism, 
  near, 
  stellar
} from '../../CopymAI/assets';

// Import audit icons
import hIcon from '/assets/svg/h.png';
import icIcon from '/assets/svg/ic.png';
import zIcon from '/assets/svg/z.png';
import cervikIcon from '/assets/svg/cervik.png';
import audit0Icon from '/assets/svg/audit0.png';

// Blockchain icons with real logos
const BlockchainIcon = ({ icon, name }) => (
  <div className="flex flex-col items-center justify-center">
    <div className="w-8 h-8 flex items-center justify-center" aria-hidden>
      <img
        src={icon}
        alt={`${name} blockchain logo`}
        className="w-full h-full object-contain"
        onError={(e) => {
          e.target.style.display = 'none';
          console.warn('Failed to load blockchain logo:', name);
        }}
      />
    </div>
  </div>
);

const slides = [
  { icon: bitcoin, name: "BTC" },
  { icon: ethereum, name: "ETH" },
  { icon: solana, name: "SOL" },
  { icon: polygon, name: "MATIC" },
  { icon: avalanche, name: "AVAX" },
  { icon: optimism, name: "OP" },
  { icon: near, name: "NEAR" },
  { icon: stellar, name: "XLM" },
];

const auditSlides = [
  { icon: hIcon, name: "H" },
  { icon: icIcon, name: "IC" },
  { icon: zIcon, name: "Z" },
  { icon: cervikIcon, name: "Cervik" },
  { icon: audit0Icon, name: "Audit0" },
];

const SliderDesign2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const duplicatedSlides = [...slides, ...slides, ...slides]; // Triple the slides for seamless loop
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const [reducedMotion, setReducedMotion] = useState(false);
  
  // Continuously check which item is closest to the center
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(media.matches);
    const handler = () => setReducedMotion(media.matches);
    media.addEventListener?.('change', handler);
    const checkActive = () => {
      if (!containerRef.current) return;
      const containerCenter =
        containerRef.current.getBoundingClientRect().left +
        containerRef.current.offsetWidth / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;
      itemsRef.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distance = Math.abs(containerCenter - itemCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i % slides.length;
        }
      });
      setActiveIndex(closestIndex);
      requestAnimationFrame(checkActive); // keep updating in sync with animation
    };
    requestAnimationFrame(checkActive);
    return () => {
      media.removeEventListener?.('change', handler);
    };
  }, []);

        return (
          <div
      ref={containerRef}
      className="relative h-full overflow-hidden py-12 mx-auto"
      role="region"
      aria-label="Supported blockchains"
    >
      {/* Fade edges with glass effect; adapts to dark mode */}
      <div className="absolute inset-0 z-20 pointer-events-none before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white/0 before:to-white/10 before:dark:from-transparent before:dark:to-black/20 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white/0 after:to-white/10 after:dark:from-transparent after:dark:to-black/20"></div>
      <motion.div
        className="flex items-center justify-center"
        animate={reducedMotion ? undefined : { x: ["0%", "-33.33%"] }}
        transition={reducedMotion ? undefined : { ease: "linear", duration: 15, repeat: Infinity }}
      >
        {duplicatedSlides.map((slide, index) => {
          const slideIndex = index % slides.length;
          const isActive = slideIndex === activeIndex;
          return (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="flex-shrink-0 px-8"
            >
              <div className="flex items-center justify-center">
                <div
                  className={`w-20 h-20 rounded-2xl border flex items-center justify-center transition-all duration-300 ease-in-out backdrop-blur-md bg-white/60 dark:bg-white/5 shadow-sm ${
                    isActive
                      ? "border-blue-500/60 ring-4 ring-blue-500/10 scale-110"
                      : "border-gray-200/60 dark:border-white/10 scale-95"
                  }`}
                  tabIndex={0}
                  aria-label={`${slide.name} blockchain`}
                >
                  <div
                    className={`flex items-center justify-center transition-colors duration-300 ${
                      isActive ? "text-blue-600" : "text-gray-700 dark:text-gray-200"
                    }`}
                  >
                    <BlockchainIcon icon={slide.icon} name={slide.name} />
                  </div>
                </div>
          </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

const AuditSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const duplicatedSlides = [...auditSlides, ...auditSlides, ...auditSlides]; // Triple the slides for seamless loop
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const [reducedMotion, setReducedMotion] = useState(false);
  
  // Continuously check which item is closest to the center
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(media.matches);
    const handler = () => setReducedMotion(media.matches);
    media.addEventListener?.('change', handler);
    const checkActive = () => {
      if (!containerRef.current) return;
      const containerCenter =
        containerRef.current.getBoundingClientRect().left +
        containerRef.current.offsetWidth / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;
      itemsRef.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distance = Math.abs(containerCenter - itemCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i % auditSlides.length;
        }
      });
      setActiveIndex(closestIndex);
      requestAnimationFrame(checkActive); // keep updating in sync with animation
    };
    requestAnimationFrame(checkActive);
    return () => {
      media.removeEventListener?.('change', handler);
    };
  }, []);
 
  return (
    <div
      ref={containerRef}
      className="relative h-full overflow-hidden py-12 mx-auto"
      role="region"
      aria-label="Audit partners"
    >
      <div className="absolute inset-0 z-20 pointer-events-none before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white/0 before:to-white/10 before:dark:from-transparent before:dark:to-black/20 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white/0 after:to-white/10 after:dark:from-transparent after:dark:to-black/20"></div>
      <motion.div
        className="flex items-center justify-center"
        animate={reducedMotion ? undefined : { x: ["0%", "33.33%"] }}
        transition={reducedMotion ? undefined : { ease: "linear", duration: 15, repeat: Infinity }}
      >
        {duplicatedSlides.map((slide, index) => {
          const slideIndex = index % auditSlides.length;
          const isActive = slideIndex === activeIndex;
              return (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="flex-shrink-0 px-8"
            >
              <div className="flex items-center justify-center">
                <div
                  className={`w-20 h-20 rounded-2xl border flex items-center justify-center transition-all duration-300 ease-in-out backdrop-blur-md bg-white/60 dark:bg-white/5 shadow-sm ${
                    isActive
                      ? "border-emerald-500/60 ring-4 ring-emerald-500/10 scale-110"
                      : "border-gray-200/60 dark:border-white/10 scale-95"
                  }`}
                  tabIndex={0}
                  aria-label={`${slide.name} audit partner`}
                >
                  <div
                    className={`flex items-center justify-center transition-colors duration-300 ${
                      isActive ? "text-emerald-600" : "text-gray-700 dark:text-gray-200"
                    }`}
                  >
                    <BlockchainIcon icon={slide.icon} name={slide.name} />
                  </div>
                </div>
              </div>
            </div>
        );
      })}
      </motion.div>
          </div>
        );
};

export default function AuditSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background - subtle grid with gradient, supports dark mode */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent dark:via-emerald-400/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.06),transparent_40%)]"></div>
      </div>
      
      <div className="relative z-10 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 anton-regular">
              <span className="text-gray-900 dark:text-black">SECURE & </span>
              <span className="text-emerald-600">AUDITED</span>
          </h2>
          <p className="text-lg sm:text-xl text-black dark:text-black max-w-3xl mx-auto leading-relaxed">
              Our contracts are continuously monitored and vetted by trusted security partners and seamlessly integrated with leading blockchain networks.
          </p>
        </div>

          {/* Blockchain Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 anton-regular">
              <span className="text-black">BLOCKCHAIN</span>
            </h3>
          </div>

          {/* Blockchain Slider */}
          <div className="flex justify-center items-center">
            <SliderDesign2 />
            </div>

                    {/* Audit Section */}
          <div className="text-center mb-12 mt-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-black mb-8 anton-regular">
              <span className="text-emerald-600">AUDIT</span>
            </h3>
            </div>

          {/* Audit Slider */}
          <div className="flex justify-center items-center">
            <AuditSlider />
          </div>

        {/* CTA - minimalist */}
        <div className="flex justify-center items-center mt-12">
          <a
            href="#security"
            className="inline-flex items-center px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-600/20 hover:bg-emerald-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/30 transition-colors"
            aria-label="Learn more about our security practices"
          >
            Learn about our security
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}