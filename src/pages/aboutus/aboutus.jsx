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
import TestimonialsSection from "../HomePage/sections/Testimonials";


const AboutUs = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Section 1: Hero Section */}
            <section className="relative w-full h-screen min-h-[600px] sm:min-h-[700px] lg:h-screen xl:h-screen overflow-hidden">
                {/* Background Video REPLACED */}
                <div className="absolute inset-0 z-0 bg-black">
                    {/* Light overlay to maintain readability and light aesthetic */}
                    <div className="absolute inset-0 "></div>
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
                            <h1 className="text-center mb-3 sm:mb-4 md:mb-5" >
                                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase text-white">
                                    EXPLORE TOKENIZED{' '}
                                </span>
                                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase text-[#15a36e]">
                                    REAL-WORLD ASSETS
                                </span>
                            </h1>

                            {/* Description */}
                            <div className="flex flex-col items-center justify-center w-full">
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed text-center text-white w-full mb-6 sm:mb-8 max-w-6xl mx-auto px-2" >
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
            <section className="relative w-full h-screen min-h-[600px] sm:min-h-[700px] lg:h-screen xl:h-screen overflow-hidden flex items-center">
                {/* Main Content */}
                <div className="relative z-10 bg-black w-full h-full overflow-hidden flex items-center">


                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                        <div className="text-left mb-8 sm:mb-12 lg:mb-16">
                            <div className="relative w-fit mb-3 sm:mb-4">
                                <h2 className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                    <span className="text-white">COMPANY </span>
                                    <span className="text-[#15a36e]">OVERVIEW</span>
                                </h2>
                                <div className="absolute bottom-0 left-0 bg-white" style={{ width: 'calc(100% + 160px)', height: '0.5px' }}></div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                            {/* Left Side - Circular Image */}
                            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                                <div className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
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
                            <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-2 text-center lg:text-left">
                                <div className="space-y-4">
                                    <p className="text-white leading-relaxed text-base sm:text-lg" >
                                        COPYm is a leading <span className="font-semibold text-white">Real-World Asset (RWA) tokenization platform</span> designed to transform how individuals invest and manage ownership.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4" >
                                        Why We Exist:
                                    </h3>
                                    <p className="text-white leading-relaxed text-base sm:text-lg" >
                                        The traditional asset market is <span className="font-semibold text-white">fragmented, slow, and geographically restricted</span>. COPYm is here to change that.
                                    </p>
                                    <p className="text-white leading-relaxed text-base sm:text-lg" >
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                        {/* Mission - Left Side */}
                        <div className="flex flex-col overflow-hidden ">
                            {/* Black Content Area */}
                            <div className="bg-black rounded-t-2xl p-5 sm:p-6 lg:p-8 flex-1">
                                <div className="space-y-4">
                                    <p className="text-white leading-relaxed text-base sm:text-lg" >
                                        To make asset ownership borderless, transparent, and universally accessible through blockchain innovation.
                                    </p>
                                    <p className="text-white leading-relaxed text-base sm:text-lg" >
                                        We democratize access to investment opportunities by enabling fractional ownership of premium assets, making it possible for anyone to invest in real estate, commodities, and valuable assets with as little as $100.
                                    </p>
                                    <p className="text-white leading-relaxed text-base sm:text-lg" >
                                        Our mission extends beyond technology — we strive to foster financial inclusion and create a more equitable economic landscape where wealth generation is not limited by geographical boundaries.
                                    </p>
                                </div>
                            </div>
                            {/* Colored Footer with Title */}
                            <div className="bg-[#EAFAF4] p-4 sm:p-5 lg:p-7">
                                <h3 className="text-xl sm:text-2xl font-bold text-black uppercase text-center" >
                                    OUR MISSION
                                </h3>
                            </div>
                        </div>

                        {/* Vision - Right Side */}
                        <div className="flex flex-col overflow-hidden ">
                            {/* Black Content Area */}
                            <div className="bg-black rounded-t-2xl p-5 sm:p-6 lg:p-8 flex-1">
                                <div className="space-y-4">
                                    <p className="text-white leading-relaxed text-base sm:text-lg" >
                                        We see a future where any asset, anywhere, can be owned, traded, and verified instantly.
                                    </p>
                                    <p className="text-white leading-relaxed text-base sm:text-lg" >
                                        Our vision is to create a world where investment opportunities are not limited by geography, wealth, or traditional barriers.
                                    </p>
                                    <p className="text-white leading-relaxed text-base sm:text-lg" >
                                        Through our platform, we envision a future where everyone has access to premium investment opportunities, creating a more inclusive and prosperous global economy.
                                    </p>
                                </div>
                            </div>
                            {/* Colored Footer with Title */}
                            <div className="bg-[#EAFAF4] p-4 sm:p-5 lg:p-7">
                                <h3 className="text-xl sm:text-2xl font-bold text-black uppercase text-center" >
                                    OUR VISION
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Core Values */}
            {/* Section 4: Core Values */}
            <section className="py-20 lg:py-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        {/* Left Column: Heading & Description */}
                        <div className="w-full lg:w-5/12 pt-10 lg:pt-20 relative">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-8 text-black" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                    Our<br />
                                    Core Values
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed max-w-md mb-12" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                    We believe in building a transparent, secure, and inclusive financial future. Our values drive every decision we make, ensuring we empower investors and asset owners alike.
                                </p>

                                {/* Decorative Arrow SVG */}
                                <div className="hidden lg:block absolute bottom-0 right-0 transform translate-y-full translate-x-1/4">
                                    <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <motion.path
                                            d="M20 20 C 50 100, 150 100, 180 80"
                                            stroke="black"
                                            strokeWidth="2"
                                            fill="none"
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            transition={{ duration: 1.5, ease: "easeInOut" }}
                                        />
                                        <motion.path
                                            d="M180 80 L 170 75 M 180 80 L 175 90"
                                            stroke="black"
                                            strokeWidth="2"
                                            fill="none"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 1.4, duration: 0.2 }}
                                        />
                                    </svg>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Images & Cards */}
                        <div className="w-full lg:w-7/12 relative">
                            {/* Background Image Container */}
                            <div className="absolute top-0 right-0 w-[85%] h-[90%] bg-gray-100 rounded-[40px] overflow-hidden -z-10 transform rotate-1">
                                <img
                                    src="/assets/Images/image-2.png"
                                    alt="Core Values Background"
                                    className="w-full h-full object-cover opacity-80"
                                />
                            </div>

                            {/* Cards Stack */}
                            <div className="flex flex-col gap-6 pt-12 pr-4 sm:pr-12 md:pr-24 lg:pr-32">
                                {[
                                    {
                                        title: "Integrity",
                                        description: "We operate with complete transparency and ethical practices in all our dealings.",
                                        number: "01"
                                    },
                                    {
                                        title: "Security",
                                        description: "Enterprise-grade security measures protect every transaction and asset on our platform.",
                                        number: "02"
                                    },
                                    {
                                        title: "Innovation",
                                        description: "We continuously push the boundaries of what's possible in asset tokenization.",
                                        number: "03"
                                    },
                                    {
                                        title: "Inclusivity",
                                        description: "We make premium investments accessible to everyone, regardless of background.",
                                        number: "04"
                                    }
                                ].map((value, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.15 }}
                                        viewport={{ once: true }}
                                        className="bg-white p-8 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300 relative border border-gray-50 max-w-md ml-auto"
                                        style={{
                                            marginRight: `${index % 2 === 0 ? '20px' : '0px'}` // Stagger effect
                                        }}
                                    >
                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-baseline justify-between">
                                                <span className="text-4xl font-bold text-gray-200" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                                    {value.number}
                                                </span>
                                                <h3 className="text-xl font-bold text-black" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                                    {value.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed text-sm" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                                {value.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Company Timeline */}
            <section className="relative bg-black py-16 sm:py-20 lg:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Section Header */}
                    {/* Section Header */}
                    <div className="text-left mb-12 sm:mb-16 lg:mb-20">
                        <div className="relative w-fit mb-3 sm:mb-4">
                            <h2 className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                <span className="text-white">COMPANY </span>
                                <span className="text-[#15a36e]">TIMELINE</span>
                            </h2>
                            <div className="absolute bottom-0 left-0 bg-white" style={{ width: 'calc(100% + 160px)', height: '0.5px' }}></div>
                        </div>
                    </div>

                    {/* Timeline Container */}
                    <div className="relative pl-8 sm:pl-12 md:pl-16 pr-4 sm:pr-8 md:pr-12">
                        {/* Glowing Vertical Timeline Line */}
                        <div
                            className="absolute left-0 sm:left-2 md:left-4 top-0 bottom-0 hidden sm:flex items-center justify-center"
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
                                className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8"
                            >
                                {/* Icon */}
                                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 relative z-10">
                                    <img
                                        src="/assets/Images/icons/Cube.png"
                                        alt="Foundation"
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Heading - Fixed width for uniform alignment */}
                                <h3
                                    className="flex-shrink-0 text-base sm:text-lg md:text-xl lg:text-2xl font-bold w-full sm:w-48 md:w-56 lg:w-64"
                                    style={{
                                        fontFamily: 'Palanquin, sans-serif',
                                        color: '#15a36e'
                                    }}
                                >
                                    2023 - Foundation
                                </h3>

                                {/* Subheading */}
                                <p
                                    className="flex-1 text-sm sm:text-base md:text-lg leading-relaxed"
                                    style={{
                                        fontFamily: 'Palanquin, sans-serif',
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
                                className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8"
                            >
                                {/* Icon */}
                                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 relative z-10">
                                    <img
                                        src="/assets/Images/icons/Rocket.png"
                                        alt="Platform Launch"
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Heading - Fixed width for uniform alignment */}
                                <h3
                                    className="flex-shrink-0 text-base sm:text-lg md:text-xl lg:text-2xl font-bold w-full sm:w-48 md:w-56 lg:w-64"
                                    style={{
                                        fontFamily: 'Palanquin, sans-serif',
                                        color: '#15a36e'
                                    }}
                                >
                                    2024 - Platform Launch
                                </h3>

                                {/* Subheading */}
                                <p
                                    className="flex-1 text-sm sm:text-base md:text-lg leading-relaxed"
                                    style={{
                                        fontFamily: 'Palanquin, sans-serif',
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
                                className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8"
                            >
                                {/* Icon */}
                                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 relative z-10">
                                    <img
                                        src="/assets/Images/icons/StylizedGlobe.png"
                                        alt="Global Expansion"
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Heading - Fixed width for uniform alignment */}
                                <h3
                                    className="flex-shrink-0 text-base sm:text-lg md:text-xl lg:text-2xl font-bold w-full sm:w-48 md:w-56 lg:w-64"
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
                                        fontFamily: 'Palanquin, sans-serif',
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

