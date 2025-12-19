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
      <section className="relative h-screen min-h-[600px] sm:min-h-[700px] lg:h-screen xl:h-screen overflow-hidden">
        {/* Background Video REPLACED */}
        <div className="absolute inset-0 z-0 bg-black">
          {/* Gradients/Overlay - kept for aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-emerald-900/20"></div>
          <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>

        {/* Hero Content */}
        <div ref={heroRef} className="relative z-10 h-full w-full flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center w-full">
            {/* Main Title - Full Width with Homepage Font Styles */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase mb-4 sm:mb-5 md:mb-6 reveal-text px-2 dm-sans" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <span className="text-white drop-shadow-lg">YOUR GATEWAY TO </span>
              <span className="text-emerald-400 drop-shadow-lg">COPYM'S</span>
              <br className="hidden sm:block" />
              <span className="text-white drop-shadow-lg">EXCLUSIVE WORLD</span>
            </h1>

            {/* Description with Homepage Style */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-white/90 leading-relaxed mb-6 sm:mb-8 max-w-5xl mx-auto px-4 reveal-text drop-shadow-md" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Unlock premium access to real-world assets, member-only rewards, and
              the next wave of Web3 innovation with your exclusive access pass.
            </p>

            {/* Mint Token Button - Exact START INVESTING style */}
            <button
              className="bg-emerald-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-md mx-auto mt-4 sm:mt-6"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              MINT YOUR TOKEN NOW
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>


      {/* Pass Unlocks Section */}
      <PassUnlocksSection />

      {/* Unlock Features - Reimagined with Platform Features Style */}
      <section className="relative">
        {/* Main Content with Curved Background */}
        <div className="relative z-10 bg-black pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20">
          {/* Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading and Subheading - At the Top */}
            <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase mb-3 sm:mb-4 md:mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <span className="text-white">YOUR </span>
                <span className="text-[#15a36e]">ACCESS CREDENTIAL</span>
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-white/80 leading-relaxed max-w-5xl mx-auto px-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Your digital identity that unlocks exclusive access to the COPYM ecosystem.
              </p>
            </div>

            {/* Credential Card Section */}
            <div className="text-center relative min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] flex flex-col items-center justify-center outline-none border-none px-4" style={{ outline: 'none', border: 'none' }}>
              {/* Green Ellipse Background */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] pointer-events-none z-0"
              >
                <img
                  src={EllipseGreen}
                  alt="Green ellipse background"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Card - Centered on Ellipse */}
              <div className="relative z-10 flex justify-center items-center w-full">
                <div className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[350px]">
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


      {/* Platform Features - TokenizationHub Style Cards */}
      <section className="relative bg-white">
        {/* Main Content */}
        <div className="relative z-10 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <div className="text-center mb-6 sm:mb-8 lg:mb-10 px-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase mb-3 sm:mb-4 md:mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <span className="text-black">PLATFORM </span>
                <span className="text-[#15a36e]">FEATURES</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-600 leading-relaxed max-w-5xl mx-auto px-2 mb-4 sm:mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Enterprise-grade features designed for institutional-grade tokenization and compliance.
              </p>
            </div>

            {/* Grouped Images */}
            <div className="flex justify-center items-center mt-4 sm:mt-6 lg:mt-8 px-4">
              <img
                src={GroupedImages}
                alt="Platform Features"
                className="w-full max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Supported Networks */}
      <div ref={networksRef} className="bg-[#E9F6F1] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase mb-3 sm:mb-4 md:mb-5 text-gray-900 reveal-text" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Supported Networks
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {networks.map((network) => (
              <motion.div
                key={network.key}
                className="network-card group relative text-center p-4 sm:p-6"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative">
                  <div className="flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-all duration-300">
                    {network.logo ? (
                      <img
                        src={network.logo}
                        alt={`${network.name} logo`}
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <span className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">
                        {network.icon}
                      </span>
                    )}
                  </div>
                  <div className="font-bold text-base sm:text-lg text-gray-900 mb-1">
                    {network.name}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">{network.ticker}</div>
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