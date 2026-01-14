import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typeform from "../Contact/Typeform";
// Removed old contact image imports to use public assets directly

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



const AboutUs = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="min-h-screen bg-white">


            {/* Unified Company Overview Section */}
            <section className="py-10 lg:py-16 bg-white overflow-hidden" id="company-overview">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10 lg:mb-16">
                        {/* LEFT TOP: Dynamic Content Area */}
                        <div className="relative pt-10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-8 text-black" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                        {activeTab === 0 ? (
                                            <>Transforming <br /> <span className="text-[#15a36e]">Asset</span> Ownership</>
                                        ) : activeTab === 1 ? (
                                            <>Democratizing <br /> <span className="text-[#15a36e]">Investment</span></>
                                        ) : (
                                            <>Borderless <br /> <span className="text-[#15a36e]">Future</span></>
                                        )}
                                    </h2>
                                    <div className="text-lg text-gray-600 leading-relaxed max-w-xl space-y-6" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                        {activeTab === 0 && (
                                            <>
                                                <p>
                                                    COPYm is a leading <span className="font-semibold text-black">Real-World Asset (RWA) tokenization platform</span> designed to transform how individuals invest and manage ownership.
                                                </p>
                                                <p>
                                                    The traditional asset market is fragmented, slow, and geographically restricted. We merge blockchain technology with real-world compliance to create a unified marketplace where assets can be exchanged instantly, securely, and without borders.
                                                </p>
                                            </>
                                        )}
                                        {activeTab === 1 && (
                                            <>
                                                <p>
                                                    To make asset ownership borderless, transparent, and universally accessible through blockchain innovation.
                                                </p>
                                                <p>
                                                    We democratize access to investment opportunities by enabling fractional ownership of premium assets, making it possible for anyone to invest in real estate, commodities, and valuable assets with as little as $100.
                                                </p>
                                            </>
                                        )}
                                        {activeTab === 2 && (
                                            <>
                                                <p>
                                                    We see a future where any asset, anywhere, can be owned, traded, and verified instantly.
                                                </p>
                                                <p>
                                                    Through our platform, we envision a future where everyone has access to premium investment opportunities, creating a more inclusive and prosperous global economy where wealth generation is not limited by geography or traditional barriers.
                                                </p>
                                            </>
                                        )}
                                    </div>
                                </motion.div>
                            </AnimatePresence>


                        </div>

                        {/* RIGHT TOP: Accordion / Interactive List */}
                        <div className="flex flex-col gap-6 pt-10">
                            {[
                                { id: 0, title: "About Us" },
                                { id: 1, title: "Our Mission" },
                                { id: 2, title: "Our Vision" }
                            ].map((item) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`w-full text-left p-6 sm:p-8 rounded-[20px] transition-all duration-300 border bg-white flex items-center justify-between group ${activeTab === item.id
                                        ? 'border-gray-200 shadow-lg scale-[1.02]'
                                        : 'border-transparent hover:bg-gray-50'
                                        }`}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    <div className="flex items-center gap-6 sm:gap-8">

                                        <span className={`text-xl sm:text-2xl font-medium ${activeTab === item.id ? 'text-black' : 'text-gray-500 group-hover:text-black'}`} style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                            {item.title}
                                        </span>
                                    </div>

                                    {/* Arrow Icon */}
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${activeTab === item.id ? 'bg-[#15a36e] text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'}`}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            className={`transform transition-transform duration-300 ${activeTab === item.id ? '-rotate-45' : 'rotate-0'}`}
                                        >
                                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* BOTTOM: Image Area - Dual Grid */}
                    <div className="relative mt-8 sm:mt-12 w-full">
                        <div className="flex flex-col md:flex-row gap-6 h-[600px] md:h-[500px] lg:h-[600px] w-full items-stretch">
                            {/* Left Image - Narrower */}
                            <div className="w-full md:w-5/12 h-full rounded-[30px] md:rounded-l-[40px] md:rounded-r-none overflow-hidden">
                                <img
                                    src="/assets/Images/business-team.jpg"
                                    alt="Office Building"
                                    className="w-full h-full object-cover object-left scale-110"
                                />
                            </div>

                            {/* Right Image - Wider */}
                            <div className="w-full md:w-8/12 h-full rounded-[30px] md:rounded-r-[40px] md:rounded-l-none overflow-hidden bg-black">
                                <img
                                    src="/assets/Images/business-team.jpg"
                                    alt="Team Collaboration"
                                    className="w-full h-full object-cover object-[125%_center] scale-110"
                                />
                            </div>
                        </div>

                        {/* Company Logo Badge - Absolute Center Top */}
                        <div className="absolute top-1/2 left-[38%] transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center p-4">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-transparent flex items-center justify-center relative z-20">
                                <img
                                    src="/assets/copym/png/Copym-05-1.png"
                                    alt="Copym Logo"
                                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Core Values */}
            <section className="py-10 lg:py-16 bg-white overflow-hidden">
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
                                <div className="relative w-fit mb-8 sm:mb-10 lg:mb-12">
                                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-black pb-4" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                        Our<br />
                                        <span className="text-[#15a36e]">Core</span> Values
                                    </h2>
                                    <div className="absolute bottom-0 left-0 bg-black w-full sm:w-[calc(100%+120px)]" style={{ height: '1.5px' }}></div>
                                </div>
                                <p className="text-lg text-gray-600 leading-relaxed max-w-md mb-12" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                    We believe in building a transparent, secure, and inclusive financial future. Our values drive every decision we make, ensuring we empower investors and asset owners alike.
                                </p>

                                {/* Decorative Arrow SVG */}
                                <div className="hidden lg:block absolute bottom-40 right-0 transform translate-x-1/4">
                                    <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <motion.path
                                            d="M20 20 C 50 100, 150 100, 180 80"
                                            stroke="black"
                                            strokeWidth="2"
                                            fill="none"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                                        />
                                        <motion.path
                                            d="M180 80 L 170 75 M 180 80 L 175 90"
                                            stroke="black"
                                            strokeWidth="2"
                                            fill="none"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 1.5 }}
                                        />
                                    </svg>
                                </div>

                                {/* Email and Address Cards - Side by Side */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                    {/* Email Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        viewport={{ once: true }}
                                        className="bg-white p-4 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300 relative border border-gray-50"
                                    >
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                                                    <img
                                                        src="/assets/Images/email.png"
                                                        alt="Email"
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <h3 className="text-xs font-bold text-black uppercase" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                                    E-MAIL ID
                                                </h3>
                                            </div>
                                            <p className="text-xs text-gray-600 leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                                support@copym.xyz
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Address Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        viewport={{ once: true }}
                                        className="bg-white p-4 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300 relative border border-gray-50"
                                    >
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                                                    <img
                                                        src="/assets/Images/address.png"
                                                        alt="Address"
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <h3 className="text-xs font-bold text-black uppercase" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                                    ADDRESS
                                                </h3>
                                            </div>
                                            <p className="text-xs text-gray-600 leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                                Smart Station, First Floor, Incubator Building, Masdar City, Abu Dhabi, UAE.
                                            </p>
                                        </div>
                                    </motion.div>
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

                                    },
                                    {
                                        title: "Security",
                                        description: "Enterprise-grade security measures protect every transaction and asset on our platform.",

                                    },
                                    {
                                        title: "Innovation",
                                        description: "We continuously push the boundaries of what's possible in asset tokenization.",

                                    },
                                    {
                                        title: "Inclusivity",
                                        description: "We make premium investments accessible to everyone, regardless of background.",
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
                                                <span className="text-4xl font-bold text-[#15a36e]" style={{ fontFamily: 'Palanquin, sans-serif' }}>
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
            <section className="relative bg-black py-16 lg:py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-start">
                        {/* Right Column: Heading & Description */}
                        <div className="w-full lg:w-5/12 lg:pt-10">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative w-fit mb-8 sm:mb-10 lg:mb-12">
                                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white pb-4 uppercase" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                        Company<br />
                                        <span className="text-[#15a36e]">Timeline</span>
                                    </h2>
                                    <div className="absolute bottom-0 left-0 bg-white w-full sm:w-[calc(100%+120px)]" style={{ height: '1.5px' }}></div>
                                </div>
                                <p className="text-lg text-gray-400 leading-relaxed max-w-md mb-12" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                    Our journey of innovation and growth, building the future of decentralized finance and global asset ownership.
                                </p>

                                {/* Decorative Arrow SVG - Mirror of Core Values */}
                                <div className="hidden lg:block absolute top-[60%] left-0 transform -translate-x-full">
                                    <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform scale-x-[-1]">
                                        <motion.path
                                            d="M20 20 C 50 100, 150 100, 180 80"
                                            stroke="#15a36e"
                                            strokeWidth="2"
                                            fill="none"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                                        />
                                        <motion.path
                                            d="M180 80 L 170 75 M 180 80 L 175 90"
                                            stroke="#15a36e"
                                            strokeWidth="2"
                                            fill="none"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 1.5 }}
                                        />
                                    </svg>
                                </div>
                            </motion.div>
                        </div>

                        {/* Left Column: Timeline Items */}
                        <div className="w-full lg:w-7/12 relative">
                            {/* Background decoration or subtle image could go here */}

                            <div className="flex flex-col gap-8">
                                {[
                                    {
                                        year: "2023 - Foundation",
                                        description: "COPYm was founded with a vision to democratize access to premium investment opportunities.",
                                        icon: "/assets/Images/icons/Cube.png"
                                    },
                                    {
                                        year: "2024 - Platform Launch",
                                        description: "Our revolutionary RWA tokenization platform goes live, enabling fractional ownership.",
                                        icon: "/assets/Images/icons/Rocket.png"
                                    },
                                    {
                                        year: "2025 - Global Expansion",
                                        description: "Expanding our reach globally, making premium investments accessible worldwide.",
                                        icon: "/assets/Images/icons/StylizedGlobe.png"
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.15 }}
                                        viewport={{ once: true }}
                                        className="py-6 group max-w-lg"
                                    >
                                        <div className="flex items-center gap-6 sm:gap-8">
                                            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded-2xl flex items-center justify-center p-4 group-hover:scale-110 transition-transform duration-300">
                                                <img src={item.icon} alt={item.year} className="w-full h-full object-contain" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl sm:text-2xl font-bold text-[#15a36e] mb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                                    {item.year}
                                                </h3>
                                                <p className="text-gray-300 text-sm sm:text-base leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
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



            {/* Section 9: Contact Form */}
            <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-left mb-8 sm:mb-10 lg:mb-12">
                        <div className="relative w-fit mb-4">
                            <h2
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase pb-4 leading-tight"
                                style={{ fontFamily: 'Palanquin, sans-serif' }}
                            >
                                <span className="text-black">GET</span>
                                <br />
                                <span className="text-black">IN </span>
                                <span className="text-[#15a36e]">TOUCH</span>
                            </h2>
                            <div className="absolute bottom-0 left-0 bg-black w-full sm:w-[calc(100%+180px)]" style={{ height: '1.5px' }}></div>
                        </div>
                        <p
                            className="text-base sm:text-lg md:text-xl lg:text-2xl text-black font-normal leading-relaxed tracking-wide mt-4 sm:mt-6"
                            style={{ fontFamily: 'Palanquin, sans-serif' }}
                        >
                            Fill out the form below and our team will get back to you within 24 hours.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.1)]"
                    >
                        <div className="relative bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
                            <Typeform />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 10: Map Only */}
            <section className="relative py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Map - Full Width */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative w-full rounded-lg overflow-hidden border border-gray-200 shadow-[0_20px_60px_rgba(15,23,42,0.1)] h-[400px] sm:h-[500px] lg:h-[600px]"
                    >
                        <div className="relative z-10 w-full h-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14529.56708688439!2d54.6152862!3d24.4326555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e458af42657e9%3A0x67586558872e4244!2sMasdar%20City%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1715674845000"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Copym Office Location - Masdar City, Abu Dhabi"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </section>


        </div>
    );
};

export default AboutUs;

