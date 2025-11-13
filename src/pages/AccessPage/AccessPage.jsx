import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '../../hooks/useGSAPAnimations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  GiRocket, 
  GiPresent, 
  GiPerson, 
  GiTicket, 
  GiShield, 
  GiWallet, 
  GiGlobe, 
  GiDiamonds, 
  GiLockedChest, 
  GiCrown, 
  
  GiCoins,
 
} from 'react-icons/gi';

import CredentialCard from '../../components/CredentialCard';
import { Player } from '@lottiefiles/react-lottie-player';
import PassUnlocksSection from '../Marketplace/sections/PassUnlocksSection';
import EllipseGreen from '../../components/images/Ellipse-greeen.png';
import GroupedImages from '/assets/copym/png/Grouped-images.png';
// Removed LavaLamp background

// Import blockchain logos
import EthereumLogo from '/assets/blockchains/ethereum-eth-logo.svg';
import SolanaLogo from '/assets/blockchains/solana-sol-logo.svg';
import PolygonLogo from '/assets/blockchains/polygon-matic-logo.svg';
import AvalancheLogo from '/assets/blockchains/avalanche-avax-logo.svg';
import OptimismLogo from '/assets/blockchains/optimism-ethereum-op-logo.svg';
import BitcoinLogo from '/assets/blockchains/bitcoin-btc-logo.svg';
import { Box } from '@mui/material';

export default function AccessPage() {

  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const featuresRef = useRef(null);
  const networksRef = useRef(null);
  const credentialRef = useRef(null);
  const ctaRef = useRef(null);

  const networks = [
    { key: 'ethereum', name: 'Ethereum', ticker: 'ETH', gradient: 'from-[#627EEA] to-[#3C5FAD]', logo: EthereumLogo },
    { key: 'solana', name: 'Solana', ticker: 'SOL', gradient: 'from-[#14F195] to-[#9945FF]', logo: SolanaLogo },
    { key: 'polygon', name: 'Polygon', ticker: 'POL', gradient: 'from-[#8247E5] to-[#6C3BB4]', logo: PolygonLogo },
    { key: 'avalanche', name: 'Avalanche', ticker: 'AVAX', gradient: 'from-[#E84142] to-[#B03334]', logo: AvalancheLogo },
    { key: 'optimism', name: 'Optimism', ticker: 'OP', gradient: 'from-[#FF0420] to-[#B30216]', logo: OptimismLogo },
    { key: 'ripple', name: 'Ripple', ticker: 'XRP', gradient: 'from-[#0A74FF] to-[#003366]', icon: '💎' }, // Keep emoji for Ripple as no logo available
    { key: 'bitcoin', name: 'Bitcoin', ticker: 'BTC', gradient: 'from-[#F7931A] to-[#C06A00]', logo: BitcoinLogo },
    { key: 'sepolia', name: 'Sepolia', ticker: 'SEP', gradient: 'from-[#8E8E8E] to-[#5A5A5A]', icon: '🔗' } // Keep emoji for Sepolia as no logo available
  ];

  const benefits = [
    { icon: GiRocket, title: "Priority Drops", description: "First in line for high-demand real-world asset listings", color: "from-blue-500 to-cyan-500" },
    { icon: GiPresent, title: "Exclusive Rewards", description: "Special NFT airdrops, discounts, and fee reductions", color: "from-purple-500 to-pink-500" },
    { icon: GiPerson, title: "Community Power", description: "Vote on future asset listings & platform features", color: "from-emerald-500 to-teal-500" },
    { icon: GiTicket, title: "VIP Events", description: "Access to private IRL & virtual events", color: "from-orange-500 to-red-500" }
  ];

  const features = [
    { icon: GiShield, title: "Compliance-first", description: "KYC/AML, transfer restrictions, whitelisting and audit trails", color: "from-blue-500 to-cyan-500" },
    { icon: GiWallet, title: "Utility & Access", description: "Early allocations, fee discounts, governance & staking perks", color: "from-purple-500 to-pink-500" },
    { icon: GiGlobe, title: "Multi-asset Support", description: "Equity, debt, real estate, commodities, carbon & more", color: "from-emerald-500 to-teal-500" },
    { icon: GiDiamonds, title: "Institutional Rails", description: "Custody, settlement, and data rooms integrated", color: "from-orange-500 to-red-500" }
  ];

  
  

  // Advanced GSAP Animations
  useGSAP(pageRef, () => {
    // Register ScrollTrigger if not already registered
    if (!gsap.plugins.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Hero section animations
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Benefits cards stagger animation
    gsap.fromTo('.benefit-card',
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Features section slide-in
    gsap.fromTo('.feature-item',
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Network cards 3D effect
    gsap.fromTo('.network-card',
      { opacity: 0, rotationY: 45, scale: 0.8 },
      {
        opacity: 1,
        rotationY: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: networksRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Credential card floating animation
    gsap.to(credentialRef.current, {
      y: -20,
      duration: 3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      scrollTrigger: {
        trigger: credentialRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });



    // Text reveal animations
    gsap.fromTo('.reveal-text',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.reveal-text',
          start: 'top 90%',
          end: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Comparison table row animations
    gsap.fromTo('.comparison-row',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.comparison-table',
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Unlock features stagger
    gsap.fromTo('.unlock-feature',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.unlock-features',
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  });

  return (
    <div ref={pageRef} className="min-h-screen bg-white">
      {/* Hero Section with TokenizationHub Style */}
      <section className="relative min-h-[80vh] sm:min-h-[65vh] lg:h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/videos/Access-page.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 z-[1]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
        </div>

        {/* Hero Content */}
        <div ref={heroRef} className="relative z-10 h-full w-full flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* AI-Powered Badge - Top of Content */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/90 backdrop-blur-sm text-gray-800 dm-sans">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
              Exclusive Access Portal
            </div>
          </div>

          <div className="text-center">
            {/* Main Title - Full Width with Homepage Font Styles */}
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-4 sm:mb-6 uppercase dm-sans reveal-text">
              <span className="text-white drop-shadow-lg">YOUR GATEWAY TO </span>
              <span className="text-emerald-400 drop-shadow-lg">COPYM'S</span>
              <br />
              <span className="text-white drop-shadow-lg">EXCLUSIVE WORLD</span>
            </h1>

            {/* Description with Homepage Style */}
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-6 sm:mb-8 max-w-4xl mx-auto reveal-text dm-sans drop-shadow-md">
              Unlock premium access to real-world assets, member-only rewards, and
              the next wave of Web3 innovation with your exclusive access pass.
            </p>

                         {/* Glass Pill Layer - Curved div style */}
             <div
               className="relative w-full max-w-[400px] h-16 bg-emerald-600/80 backdrop-blur-[10px] rounded-[40px] flex justify-center items-center text-white text-lg font-semibold shadow-[0_10px_30px_rgba(16,185,129,0.5)] z-20 border border-emerald-500/50 mx-auto mt-8 px-6 dm-sans"
               style={{
                 WebkitBackdropFilter: 'blur(10px)',
                 backdropFilter: 'blur(10px)'
               }}
             >
               Mint Your Token Now ➡
             </div>

            {/* Additional UI Elements */}
            
          </div>
        </div>
             </section>


      {/* Pass Unlocks Section */}
      <PassUnlocksSection />

                {/* Unlock Features - Reimagined with Platform Features Style */}
        <section className="relative">
          {/* Main Content with Curved Background */}
          <div className="relative z-10 bg-black pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32">
           {/* Content Container */}
           <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             {/* Credential Card Section */}
              <div className="text-center pt-8 sm:pt-12 lg:pt-16 relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex flex-col items-center justify-center outline-none border-none" style={{ outline: 'none', border: 'none' }}>
                {/* Green Ellipse Background */}
                <div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] pointer-events-none z-0"
                >
                  <img 
                    src={EllipseGreen} 
                    alt="Green ellipse background"
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Heading and Subheading - Above Center */}
                <div className="relative z-10 mb-8 sm:mb-12 lg:mb-16">
                  <h3 className="text-xl sm:text-2xl md:text-3xl -mt-5 font-bold mb-3 sm:mb-4 dm-sans uppercase">
                    <span className="text-white">YOUR </span>
                    <span className="text-[#15a36e]">ACCESS CREDENTIAL</span>
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base dm-sans">
                    Your digital identity that unlocks exclusive access to the COPYM ecosystem.
                  </p>
                </div>

                {/* Card - Centered on Ellipse */}
                <div className="relative z-10 flex justify-center items-center">
                  <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[350px]">
                    <CredentialCard
                      user={{
                        name: "Alex Morgan",
                        employeeNumber: "C-2028",
                        passNumber: "56",
                        points: "1,250",
                        qrImage: "/assets/svg/copym_qr.svg",
                      }}
                      variant="bottleGreen"
                      stacked
                      backVariant="darkBlue"
                      logoSrc="/assets/copym/png/Copym-05-1.png"
                      logoSize={24}
                    />
                  </div>
                </div>
              </div>
           </div>
         </div>
               </section>

        {/* Benefits Section */}
       <div id="benefits-section" ref={benefitsRef} className="mb-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="space-y-8">
             {/* Section Title */}
             

                           {/* Benefits Cards */}
            
           </div>
         </div>
       </div>

              {/* Platform Features - TokenizationHub Style Cards */}
       <section className="relative bg-white">
         {/* Main Content */}
         <div className="relative z-10 pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             {/* Section Title */}
             <div className="text-center mb-8 sm:mb-12 lg:mb-16">
               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 dm-sans">
                 <span className="text-black">PLATFORM </span>
                 <span className="text-[#15a36e]">FEATURES</span>
               </h2>
               <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 px-4 dm-sans">
                 Enterprise-grade features designed for institutional-grade tokenization and compliance.
               </p>
             </div>

                           {/* Grouped Images */}
              <div className="flex justify-center items-center mt-8 sm:mt-12 lg:mt-16">
                <img 
                  src={GroupedImages} 
                  alt="Platform Features"
                  className="w-full max-w-6xl h-auto object-contain"
                />
              </div>
           </div>
         </div>
               </section>

       {/* Supported Networks */}
      <div ref={networksRef} className="bg-[#E9F6F1] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-gray-900 mb-9 uppercase dm-sans reveal-text">
              Supported Networks
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {networks.map((network) => (
              <motion.div
                key={network.key}
                className="network-card group relative text-center"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative">
                  <div className="flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                    {network.logo ? (
                      <img
                        src={network.logo}
                        alt={`${network.name} logo`}
                        className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                        {network.icon}
                      </span>
                    )}
                  </div>
                  <div className="font-bold text-lg text-gray-900 mb-1">
                    {network.name}
                  </div>
                  <div className="text-sm text-gray-500">{network.ticker}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}

    </div>
  );
}