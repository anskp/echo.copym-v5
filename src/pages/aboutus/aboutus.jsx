import React from "react";
import { motion } from "framer-motion";
// Removed LavaLamp background
import { 
  GiShield,
  GiLockedChest,
  GiPowerLightning,
  GiPerson,
  GiHouse,
  GiRocket,
  GiGlobe,
  GiHalfHeart,
  GiTargetArrows,
  GiRoundStar,
  GiChart,
  GiTimeBomb,
  GiTreasureMap,
  GiBinoculars,
  GiHourglass
} from "react-icons/gi";
import accesspassVideo from "../../components/Videos/Accesspass-vdo.mp4";
import TestimonialsSection from "../HomePage/sections/Testimonials";


const AboutUs = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Section 1: Hero Section */}
            <section className="relative w-full h-screen min-h-[600px] sm:min-h-[700px] lg:h-screen lg:min-h-[800px] overflow-hidden">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src={accesspassVideo} type="video/mp4" />
                    </video>
                    {/* Light overlay to maintain readability and light aesthetic */}
                    <div className="absolute inset-0 bg-white/70"></div>
                </div>

                {/* Subtle Geometric Pattern Background */}
                <div className="absolute inset-0 z-[1] opacity-[0.05]">
                    <div 
                        className="w-full h-full"
                        style={{
                            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,0.1) 35px, rgba(0,0,0,0.1) 70px)`,
                        }}
                    ></div>
                </div>

                <div className="relative z-10 w-full h-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-[56px] flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="flex flex-col items-center justify-center w-full max-w-[1200px] lg:max-w-[1400px] xl:max-w-[1600px] mx-auto">
                            
                            {/* Main Heading */}
                            <h1 className="text-center mb-3 sm:mb-4 md:mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase text-gray-900">
                                    EXPLORE TOKENIZED{' '}
                                </span>
                                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase text-[#15a36e]">
                                    REAL-WORLD ASSETS
                                </span>
                            </h1>
                            
                            {/* Description */}
                            <div className="flex flex-col items-center justify-center w-full">
                                <p className="text-base sm:text-lg md:text-xl lg:text-[28px] font-normal leading-relaxed text-center text-gray-700 w-full mb-6 sm:mb-8 max-w-6xl mx-auto px-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                    Transforming asset ownership through blockchain innovation and institutional-grade tokenization
                                </p>
                                
                                {/* Hero Image Stack */}
                                <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] h-[150px] sm:h-[180px] md:h-[220px] lg:h-[280px] xl:h-[320px] mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-[40px] xl:mb-[50px]">
                                    <img
                                        src="/assets/copym/png/Copym-3d.png"
                                        alt="Real World Asset Tokenization"
                                        className="absolute inset-0 w-full h-full object-contain"
                                    />
                                </div>
                                
                                {/* CTA Button */}
                                <button
                                    className="bg-emerald-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
                                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                                >
                                    EXPLORE OUR ASSETS
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Company Overview */}
            <section className="relative">
                {/* Main Content */}
                <div className="relative z-10 bg-black
                  pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32 overflow-hidden">
                    
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase mb-3 sm:mb-4 md:mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                <span className="text-white">COMPANY </span>
                                <span className="text-[#15a36e]">OVERVIEW</span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-300 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Left Side - Circular Image */}
                            <div className="flex justify-center lg:justify-start">
                                <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
                                    <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl border-4 border-[#15a36e]/30">
                                        <img
                                            src="/assets/Images/Contact-us.png"
                                            alt="Company Overview"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute inset-0 rounded-full border-2 border-[#15a36e] opacity-50"></div>
                                </div>
                            </div>

                            {/* Right Side - Text Content */}
                            <div className="space-y-6 lg:space-y-8">
                                <div className="space-y-4">
                                    <p className="text-white leading-relaxed text-base sm:text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                        COPYm is a leading <span className="font-semibold text-white">Real-World Asset (RWA) tokenization platform</span> designed to transform how individuals invest and manage ownership.
                                    </p>
                                </div>
                                
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                        Why We Exist:
                                    </h3>
                                    <p className="text-white leading-relaxed text-base sm:text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                        The traditional asset market is <span className="font-semibold text-white">fragmented, slow, and geographically restricted</span>. COPYm is here to change that.
                                    </p>
                                    <p className="text-white leading-relaxed text-base sm:text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                        By merging blockchain technology with real-world compliance, we create a unified marketplace where assets can be exchanged instantly, securely, and without borders.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Mission & Vision */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase mb-3 sm:mb-4 md:mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                            <span className="text-black">MISSION & </span>
                            <span className="text-[#15a36e]">VISION</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
                        {/* Mission - Left Side */}
                        <div className="flex flex-col">
                            <div className="bg-black rounded-2xl p-6 lg:p-8 mb-4 flex-1">
                                <div className="space-y-4">
                                    <p className="text-white leading-relaxed text-base sm:text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                        To make asset ownership borderless, transparent, and universally accessible through blockchain innovation.
                                    </p>
                                    <p className="text-white leading-relaxed text-base sm:text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                        We democratize access to investment opportunities by enabling fractional ownership of premium assets, making it possible for anyone to invest in real estate, commodities, and valuable assets with as little as $100.
                                    </p>
                                    <p className="text-white leading-relaxed text-base sm:text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                        Our mission extends beyond technology — we strive to foster financial inclusion and create a more equitable economic landscape where wealth generation is not limited by geographical boundaries.
                                    </p>
                                </div>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#15a36e] text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                OUR MISSION
                            </h3>
                        </div>

                        {/* Vision - Right Side */}
                        <div className="flex flex-col">
                            <div className="bg-black rounded-2xl p-6 lg:p-8 mb-4 flex-1">
                                <div className="space-y-4">
                                    <p className="text-white leading-relaxed text-base sm:text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                        We see a future where any asset, anywhere, can be owned, traded, and verified instantly.
                                    </p>
                                    <p className="text-white leading-relaxed text-base sm:text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                        Our vision is to create a world where investment opportunities are not limited by geography, wealth, or traditional barriers.
                                    </p>
                                    <p className="text-white leading-relaxed text-base sm:text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                        Through our platform, we envision a future where everyone has access to premium investment opportunities, creating a more inclusive and prosperous global economy.
                                    </p>
                                </div>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#15a36e] text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                OUR VISION
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Core Values */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase mb-3 sm:mb-4 md:mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                            <span className="text-black">CORE </span>
                            <span className="text-[#15a36e]">VALUES</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-600 mx-auto rounded-full"></div>
                    </div>

                    {/* Vertical Stack of Value Cards */}
                    <div className="flex flex-col gap-4">
                        {[
                            {
                                title: "Integrity",
                                description: "We operate with complete transparency and ethical practices in all our dealings.",
                                badge: "100% Ethical"
                            },
                            {
                                title: "Security",
                                description: "Enterprise-grade security measures protect every transaction and asset on our platform.",
                                badge: "Secure"
                            },
                            {
                                title: "Innovation",
                                description: "We continuously push the boundaries of what's possible in asset tokenization.",
                                badge: "Cutting-Edge"
                            },
                            {
                                title: "Inclusivity",
                                description: "We make premium investments accessible to everyone, regardless of background.",
                                badge: "Open Access"
                            }
                        ].map((value, index) => {
                            const headerHeight = '48px';
                            const svgWidth = index === 0 ? 50 : 48;
                            const svgHeightTop = 18;
                            const svgHeightBottom = 18;
                            
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    style={{ 
                                        position: 'relative',
                                        marginBottom: '16px',
                                        background: '#e6f2ed',
                                        borderRadius: '0px',
                                        overflow: 'hidden',
                                        width: '100%'
                                    }}
                                >
                                    {/* Green Header Bar with Heading */}
                                    <div style={{ 
                                        height: headerHeight, 
                                        background: 'rgba(179,255,227,0.4)',
                                        position: 'relative',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <h3 style={{ 
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: 'clamp(14px, 2vw, 18px)', 
                                            fontWeight: 600, 
                                            textAlign: 'center', 
                                            color: '#000', 
                                            margin: '0'
                                        }}>{value.title}</h3>
                                    </div>

                                    {/* Grey Content Area */}
                                    <div style={{ 
                                        padding: '15px 20px', 
                                        background: '#f0f5f3',
                                        position: 'relative'
                                    }}>
                                        <p style={{ 
                                            fontFamily: 'DM Sans, sans-serif',
                                            fontSize: 'clamp(12px, 1.5vw, 14px)', 
                                            textAlign: 'left', 
                                            color: '#000', 
                                            lineHeight: '1.4',
                                            margin: '0 0 20px 0'
                                        }}>
                                            {value.description}
                                        </p>

                                        {/* Status Badge */}
                                        <div style={{ 
                                            position: 'absolute',
                                            bottom: '5px',
                                            right: '41px',
                                            background: '#fff', 
                                            padding: '3px 9px', 
                                            borderRadius: '20px', 
                                            fontSize: 'clamp(10px, 1.4vw, 13px)',
                                            color: '#15a36e',
                                            whiteSpace: 'nowrap'
                                        }}>
                                            {value.badge}
                                        </div>
                                    </div>

                                    {/* Straight Corner Lines - Top Right */}
                                    <svg width={svgWidth} height={svgHeightTop} viewBox={`0 0 ${svgWidth} ${svgHeightTop}`} fill="none"
                                        xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
                                        style={{ position: 'absolute', top: '0', right: '0', zIndex: 1 }}>
                                        <line x1="0" y1="2" x2={index === 0 ? "48" : "46"} y2="2" stroke="#7DD1B2" strokeWidth="3" />
                                        <line x1={index === 0 ? "48" : "46"} y1="2" x2={index === 0 ? "48" : "46"} y2="18" stroke="#7DD1B2" strokeWidth="3" />
                                    </svg>

                                    {/* Straight Corner Lines - Top Left */}
                                    <svg width={32} height={svgHeightTop} viewBox={`0 0 32 ${svgHeightTop}`} fill="none"
                                        xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
                                        style={{ position: 'absolute', top: '0', left: '0', zIndex: 1 }}>
                                        <line x1="32" y1="2" x2="2" y2="2" stroke="#7DD1B2" strokeWidth="3" />
                                        <line x1="2" y1="2" x2="2" y2="18" stroke="#7DD1B2" strokeWidth="3" />
                                    </svg>

                                    {/* Straight Corner Lines - Bottom Right */}
                                    <svg width={svgWidth} height={svgHeightBottom} viewBox={`0 0 ${svgWidth} ${svgHeightBottom}`} fill="none"
                                        xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
                                        style={{ position: 'absolute', bottom: '0', right: '0', zIndex: 1 }}>
                                        <line x1="0" y1="16" x2={index === 0 ? "48" : "46"} y2="16" stroke="#7DD1B2" strokeWidth="3" />
                                        <line x1={index === 0 ? "48" : "46"} y1="16" x2={index === 0 ? "48" : "46"} y2="0" stroke="#7DD1B2" strokeWidth="3" />
                                    </svg>

                                    {/* Straight Corner Lines - Bottom Left */}
                                    <svg width={32} height={svgHeightBottom} viewBox={`0 0 32 ${svgHeightBottom}`} fill="none"
                                        xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
                                        style={{ position: 'absolute', bottom: '0', left: '0', zIndex: 1 }}>
                                        <line x1="32" y1="16" x2="2" y2="16" stroke="#7DD1B2" strokeWidth="3" />
                                        <line x1="2" y1="16" x2="2" y2="0" stroke="#7DD1B2" strokeWidth="3" />
                                    </svg>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Section 5: Company Timeline */}
            <section className="relative bg-black py-16 sm:py-20 lg:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase mb-3 sm:mb-4 md:mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                            <span className="text-white">COMPANY </span>
                            <span className="text-[#15a36e]">TIMELINE</span>
                        </h2>
                    </div>

                    {/* Timeline Container */}
                    <div className="relative pl-8 sm:pl-12 md:pl-16 pr-8 sm:pr-12 md:pr-16">
                        {/* Glowing Vertical Timeline Line */}
                        <div 
                            className="absolute left-0 top-0 bottom-0 flex items-center justify-center"
                            style={{
                                width: 'auto',
                                height: '100%'
                            }}
                        >
                            <img 
                                src="/assets/Images/carousel/Linenarrow.png" 
                                alt="Timeline Line" 
                                className="h-full w-auto object-contain"
                                style={{
                                    maxHeight: '100%'
                                }}
                            />
                        </div>

                        {/* Timeline Items */}
                        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
                            {/* Timeline Item 1 - 2023 Foundation */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative flex items-center gap-4 sm:gap-6 lg:gap-8"
                            >
                                {/* Icon */}
                                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 relative z-10">
                                    <img 
                                        src="/assets/Images/icons/Cube.png" 
                                        alt="Foundation" 
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Heading - Fixed width for uniform alignment */}
                                <h3 
                                    className="flex-shrink-0 text-lg sm:text-xl md:text-2xl font-bold w-48 sm:w-56 lg:w-64"
                                    style={{ 
                                        fontFamily: 'DM Sans, sans-serif',
                                        color: '#15a36e'
                                    }}
                                >
                                    2023 - Foundation
                                </h3>

                                {/* Subheading */}
                                <p 
                                    className="flex-1 text-sm sm:text-base md:text-lg leading-relaxed"
                                    style={{ 
                                        fontFamily: 'DM Sans, sans-serif',
                                        color: '#ffffff',
                                        lineHeight: '1.6'
                                    }}
                                >
                                    COPYm was founded with a vision to democratize access to premium investment opportunities.
                                </p>
                            </motion.div>

                            {/* Timeline Item 2 - 2024 Platform Launch */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="relative flex items-center gap-4 sm:gap-6 lg:gap-8"
                            >
                                {/* Icon */}
                                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 relative z-10">
                                    <img 
                                        src="/assets/Images/icons/Rocket.png" 
                                        alt="Platform Launch" 
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Heading - Fixed width for uniform alignment */}
                                <h3 
                                    className="flex-shrink-0 text-lg sm:text-xl md:text-2xl font-bold w-48 sm:w-56 lg:w-64"
                                    style={{ 
                                        fontFamily: 'DM Sans, sans-serif',
                                        color: '#15a36e'
                                    }}
                                >
                                    2024 - Platform Launch
                                </h3>

                                {/* Subheading */}
                                <p 
                                    className="flex-1 text-sm sm:text-base md:text-lg leading-relaxed"
                                    style={{ 
                                        fontFamily: 'DM Sans, sans-serif',
                                        color: '#ffffff',
                                        lineHeight: '1.6'
                                    }}
                                >
                                    Our revolutionary RWA tokenization platform goes live, enabling fractional ownership.
                                </p>
                            </motion.div>

                            {/* Timeline Item 3 - 2025 Global Expansion */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="relative flex items-center gap-4 sm:gap-6 lg:gap-8"
                            >
                                {/* Icon */}
                                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 relative z-10">
                                    <img 
                                        src="/assets/Images/icons/StylizedGlobe.png" 
                                        alt="Global Expansion" 
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Heading - Fixed width for uniform alignment */}
                                <h3 
                                    className="flex-shrink-0 text-lg sm:text-xl md:text-2xl font-bold w-48 sm:w-56 lg:w-64"
                                    style={{ 
                                        fontFamily: 'DM Sans, sans-serif',
                                        color: '#15a36e'
                                    }}
                                >
                                    2025 - Global Expansion
                                </h3>

                                {/* Subheading */}
                                <p 
                                    className="flex-1 text-sm sm:text-base md:text-lg leading-relaxed"
                                    style={{ 
                                        fontFamily: 'DM Sans, sans-serif',
                                        color: '#ffffff',
                                        lineHeight: '1.6'
                                    }}
                                >
                                    Expanding our reach globally, making premium investments accessible worldwide.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Leadership Team */}
            {/* <section className="py-20 bg-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-black text-black mb-6 anton-regular uppercase">
                            Leadership <span className="text-green-600">Team</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
                        {/* Kuldeep - CEO */}
                        {/* <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-600 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/Kuldeep.png" 
                                    alt="Kuldeep" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Kuldeep</h4>
                                    <p className="text-blue-600 font-semibold text-lg">CEO</p>
                                </div>
                            </div>
                        </div> */}

                        {/* Rameez - COO */}
                        {/* <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-blue-500 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/Rameez.png" 
                                    alt="Rameez" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Rameez</h4>
                                    <p className="text-green-600 font-semibold text-lg">COO</p>
                                </div>
                            </div>
                        </div> */}

                        {/* Azwaan - HR */}
                        {/* <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-600 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/Azwaan.png" 
                                    alt="Azwaan" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Azwaan</h4>
                                    <p className="text-green-600 font-semibold text-lg">HR</p>
                                </div>
                            </div>
                        </div> */}

                        {/* Raayif Aarif - CTO */}
                        {/* <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-600 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/Raayif-aarif.png" 
                                    alt="Raayif Aarif" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Raayif Aarif</h4>
                                    <p className="text-blue-600 font-semibold text-lg">CTO</p>
                                </div>
                            </div>
                        </div> */}

                        {/* Ansab */}
                        {/* <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-blue-500 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/Ansab.png" 
                                    alt="Ansab" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Ansab</h4>
                                    <p className="text-blue-600 font-semibold text-lg">Blockchain Developer</p>
                                </div>
                            </div>
                        </div> */}

                        {/* Abhishek */}
                        {/* <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-600 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/Abhishek.png" 
                                    alt="Abhishek" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Abhishek</h4>
                                    <p className="text-green-600 font-semibold text-lg">Mobile UI/UX Developer</p>
                                </div>
                            </div>
                        </div> */}

                        {/* Hanan Arif */}
                        {/* <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-blue-500 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/Hanan.png" 
                                    alt="Hanan Arif" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Hanan Arif</h4>
                                    <p className="text-blue-600 font-semibold text-lg">Infrastructure & Developer</p>
                                </div>
                            </div>
                        </div> */}

                        {/* Anas KP */}
                        {/* <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-600 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/Anas K.P.png" 
                                    alt="Anas KP" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Anas KP</h4>
                                    <p className="text-green-600 font-semibold text-lg">Blockchain Developer</p>
                                </div>
                            </div>
                        </div> */}

                        {/* Nada Abdulla */}
                        {/* <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-blue-500 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/Nada.png" 
                                    alt="Nada Abdulla" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Nada Abdulla</h4>
                                    <p className="text-blue-600 font-semibold text-lg">UI/UX Developer</p>
                                </div>
                            </div>
                        </div> */}

                        {/* Nuha Fathima */}
                        {/* <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-600 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/Nuha.png" 
                                    alt="Nuha Fathima" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Nuha Fathima</h4>
                                    <p className="text-green-600 font-semibold text-lg">React Native Developer</p>
                                </div>
                            </div>
                        </div> */}
                    {/* </div>
                </div>
            </section> */}

            

            {/* Section 8: Testimonials */}
            <TestimonialsSection />
        </div>
    );
};

export default AboutUs;

