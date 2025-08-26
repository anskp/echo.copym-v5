import React, { useState } from "react";
import { LavaLamp } from "../../components/ui/fluid-blob";

const AboutUs = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (section) => {
        setOpenDropdown(openDropdown === section ? null : section);
    };
    return (
        <div className="min-h-screen bg-blue-100">
            {/* Section 1: Hero Section */}
            <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center overflow-hidden">
                {/* Blue Background Pattern - Same as Marketplace */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
                </div>

                {/* Fluid Blob Background - Same as Marketplace */}
                <div className="absolute inset-0 opacity-30">
                    <LavaLamp />
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                
                {/* Hero Content */}
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg">
                            <div className="w-3 h-3 bg-gradient-to-r from-[#255f99] to-[#15a36e] rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-gray-700">Leading RWA Tokenization Platform</span>
                        </div>
                        
                        {/* Main Title */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-black anton-regular uppercase">
                            <span className="text-[#255f99]">About</span>{" "}
                            <span className="text-[#15a36e]">COPYm</span>
                        </h1>
                        
                        {/* Subtitle */}
                        <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Transforming asset ownership through blockchain innovation and institutional-grade tokenization
                        </p>
                        
                        {/* CTA Button */}
                        <div className="flex justify-center pt-8">
                            <button className="px-8 py-4 bg-gradient-to-r from-[#255f99] to-[#15a36e] text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                Explore Our Journey
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-gradient-to-b from-[#255f99] to-[#15a36e] rounded-full mt-2"></div>
                    </div>
                </div>
            </section>

            {/* Section 2: Company Overview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-black text-black mb-6 anton-regular uppercase">
                            Company <span className="text-[#15a36e]">Overview</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#255f99] to-[#15a36e] mx-auto rounded-full"></div>
                </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 shadow-xl">
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <p className="text-gray-700 leading-relaxed font-medium">
                                            COPYm is a cutting-edge <span className="font-semibold text-[#255f99]">Real World Asset (RWA) tokenization platform</span> designed to transform how the world perceives and manages ownership.
                                        </p>
                                        
                                        <p className="text-gray-700 leading-relaxed">
                                            We bridge tangible value and digital innovation, enabling physical assets — from <span className="font-semibold text-[#15a36e]">real estate and commodities</span> to <span className="font-semibold text-[#255f99]">collectibles and intellectual property</span> — to be securely digitized, fractionalized, and traded on a global scale.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-[#255f99]/10 to-[#15a36e]/10 rounded-3xl p-8 flex items-center justify-center">
                                <div className="text-center space-y-6">
                                    <h3 className="text-2xl font-bold text-[#15a36e] anton-regular">Why We Exist</h3>
                                    <div className="space-y-4 text-left">
                                        <p className="text-gray-700 leading-relaxed">
                                            The traditional asset market is <span className="font-semibold text-[#255f99]">fragmented, slow, and geographically restricted</span>. COPYm is here to change that.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            By merging blockchain technology with real-world compliance, we create a unified marketplace where assets can be exchanged instantly, securely, and without borders.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Mission & Vision */}
            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-black text-black mb-6 anton-regular uppercase">
                            Mission & <span className="text-[#255f99]">Vision</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#255f99] to-[#15a36e] mx-auto rounded-full"></div>
                                </div>

                                        <div className="space-y-6">
                        {/* Mission Dropdown */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/60 overflow-hidden transition-all duration-300 hover:shadow-2xl">
                            <button
                                onClick={() => toggleDropdown('mission')}
                                className="w-full flex items-center justify-between p-8 hover:bg-gray-50/50 transition-colors duration-300"
                            >
                                <div className="flex-1 flex justify-center">
                                    <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#255f99] to-[#15a36e] rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-2xl">M</span>
                                </div>
                                        <h3 className="text-2xl font-bold text-[#255f99] anton-regular">Our Mission</h3>
                                    </div>
                                </div>
                                <div className={`transform transition-transform duration-300 ${openDropdown === 'mission' ? 'rotate-180' : ''}`}>
                                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>
                            
                            {/* Mission Content */}
                            <div className={`transition-all duration-500 ease-in-out ${openDropdown === 'mission' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                <div className="px-8 pb-8 space-y-4 border-t border-gray-200">
                                    <p className="text-gray-700 leading-relaxed font-medium pt-6">
                                        To make asset ownership borderless, transparent, and universally accessible — enabling physical assets to be digitized, fractionalized, and traded globally with institutional-grade security and regulatory compliance at every step.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        We are committed to democratizing access to investment opportunities by breaking down traditional barriers that have historically excluded individuals and smaller institutions from participating in high-value asset markets. Through our innovative platform, we enable fractional ownership of premium assets, making it possible for anyone to invest in real estate, commodities, and other valuable assets with as little as $100.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        Our mission extends beyond technology — we strive to foster financial inclusion and create a more equitable economic landscape where wealth generation is not limited by geographical boundaries or traditional financial gatekeepers. We believe that by making asset ownership more accessible, we can help build stronger, more resilient communities and economies worldwide.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Vision Dropdown */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/60 overflow-hidden transition-all duration-300 hover:shadow-2xl">
                            <button
                                onClick={() => toggleDropdown('vision')}
                                className="w-full flex items-center justify-between p-8 hover:bg-gray-50/50 transition-colors duration-300"
                            >
                                <div className="flex-1 flex justify-center">
                                    <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#15a36e] to-[#255f99] rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-2xl">V</span>
                                </div>
                                        <h3 className="text-2xl font-bold text-[#15a36e] anton-regular">Our Vision</h3>
                                    </div>
                                </div>
                                <div className={`transform transition-transform duration-300 ${openDropdown === 'vision' ? 'rotate-180' : ''}`}>
                                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>
                            
                            {/* Vision Content */}
                            <div className={`transition-all duration-500 ease-in-out ${openDropdown === 'vision' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                <div className="px-8 pb-8 space-y-4 border-t border-gray-200">
                                    <p className="text-gray-700 leading-relaxed font-medium pt-6">
                                        We see a future where any asset, anywhere, can be owned, traded, and verified instantly. COPYm is building the infrastructure for that reality — empowering issuers, protecting investors, and reshaping the global economy for the next generation of finance.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        Our vision encompasses a world where traditional asset classes seamlessly integrate with digital innovation, creating unprecedented opportunities for wealth creation and preservation. We envision a future where blockchain technology serves as the backbone of global commerce, enabling instant cross-border transactions, automated compliance, and real-time asset valuation across all markets.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        Looking ahead, we see COPYm becoming the premier platform for institutional-grade asset tokenization, serving as the bridge between traditional finance and the emerging digital economy. We aspire to facilitate the tokenization of trillions of dollars in global assets, creating a more liquid, transparent, and efficient financial ecosystem that benefits all participants — from individual investors to multinational corporations.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        Ultimately, our vision is to pioneer the next evolution of capitalism — one that is more inclusive, transparent, and efficient. We believe that by democratizing access to capital markets and creating new forms of asset ownership, we can help build a more prosperous and sustainable future for generations to come.
                                    </p>
                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </section>

            {/* Section 4: Core Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-black text-black mb-6 anton-regular uppercase">
                            Core <span className="text-[#15a36e]">Values</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#255f99] to-[#15a36e] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Core Values */}
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-20 h-20 bg-gradient-to-br from-[#255f99] to-[#15a36e] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-xl font-bold text-[#255f99] anton-regular">Integrity</h4>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Trust and transparency in every transaction.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-20 h-20 bg-gradient-to-br from-[#15a36e] to-[#255f99] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-xl font-bold text-[#15a36e] anton-regular">Security</h4>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Institutional-grade protection for every asset.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <div className="w-20 h-20 bg-gradient-to-br from-[#255f99] to-[#15a36e] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-xl font-bold text-[#255f99] anton-regular">Innovation</h4>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Pushing the boundaries of asset technology.
                                </p>
                            </div>
                                </div>

                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-20 h-20 bg-gradient-to-br from-[#15a36e] to-[#255f99] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                </svg>
                                </div>
                            <div className="space-y-3">
                                <h4 className="text-xl font-bold text-[#15a36e] anton-regular">Inclusivity</h4>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Opening markets to participants worldwide.
                                </p>
                            </div>
                        </div>
                    </div>
                                </div>
            </section>

            {/* Section 5: Company Timeline */}
            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-black text-black mb-6 anton-regular uppercase">
                            From Vision to <span className="text-[#255f99]">Reality</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#255f99] to-[#15a36e] mx-auto rounded-full"></div>
                            </div>

                    {/* Timeline Data */}
                    {(() => {
                        const timelineData = [
                            {
                                year: "2021",
                                title: "Foundation",
                                description: "Founded COPYm to revolutionize asset ownership through blockchain innovation.",
                                progress: { width: "25%", height: "h-2" },
                                gradient: "from-[#255f99] to-[#15a36e]"
                            },
                            {
                                year: "2022",
                                title: "Innovation",
                                description: "Pioneered real estate tokenization with flagship projects alongside industry-leading developers.",
                                progress: { width: "40%", height: "h-3" },
                                gradient: "from-[#15a36e] to-[#255f99]"
                            },
                            {
                                year: "2023",
                                title: "Expansion",
                                description: "Expanded into commodities and IP tokenization, securing strategic enterprise partnerships.",
                                progress: { width: "60%", height: "h-4" },
                                gradient: "from-[#255f99] to-[#15a36e]"
                            },
                            {
                                year: "2024",
                                title: "Scaling",
                                description: "Scaled to $500M in tokenized assets across 15 countries, empowering 10,000+ users.",
                                progress: { width: "80%", height: "h-5" },
                                gradient: "from-[#15a36e] to-[#255f99]"
                            },
                            {
                                year: "2025",
                                title: "Global Growth",
                                description: "Accelerating global expansion with enterprise-grade compliance and multi-chain infrastructure.",
                                progress: { width: "100%", height: "h-6" },
                                gradient: "from-[#255f99] to-[#15a36e]",
                                isActive: true
                            }
                        ];

                        return (
                    <div className="relative">
                        {/* Timeline container */}
                                <div className="bg-black rounded-3xl p-4 sm:p-6 lg:p-12 shadow-xl border border-gray-800">
                                    <div className="text-center mb-8 sm:mb-12">
                                <div className="w-16 h-1 bg-gradient-to-r from-[#255f99] to-[#15a36e] mx-auto rounded-full"></div>
                            </div>
                            
                            {/* Interactive Timeline */}
                            <div className="relative">
                                {/* Timeline Line */}
                                        <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 bg-gradient-to-r from-[#255f99] via-[#15a36e] to-[#255f99] rounded-full shadow-lg"></div>
                                
                                {/* Timeline Items */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 relative z-10">
                                            {timelineData.map((item, index) => (
                                            <div 
                                                key={item.year}
                                                className="relative flex flex-col items-center group"
                                                role="listitem"
                                                aria-label={`Timeline item ${item.year}: ${item.title}`}
                                            >
                                                {/* Year Badge */}
                                                <div 
                                                    className={`bg-gradient-to-r ${item.gradient} text-white px-3 py-2 rounded-full inline-block mb-4 font-bold text-sm anton-regular shadow-lg group-hover:scale-105 transition-transform duration-300 ${item.isActive ? 'animate-pulse' : ''}`}
                                                >
                                                    {item.year}
                                    </div>
                                    
                                                {/* Content Card */}
                                                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 w-full text-center relative min-h-[120px]">
                                                    {/* Growing Graph Bar */}
                                                    <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient} rounded-b-2xl opacity-60`}></div>
                                                    <div 
                                                        className={`absolute bottom-0 left-0 ${item.progress.height} bg-gradient-to-r ${item.gradient} rounded-t-lg ${item.isActive ? 'animate-pulse' : ''}`}
                                                        style={{ width: item.progress.width }}
                                                    ></div>
                                                    
                                                    {/* Title */}
                                                    <h4 className="font-semibold text-gray-800 text-xs mb-2 anton-regular">
                                                        {item.title}
                                                    </h4>
                                                    
                                                    {/* Description */}
                                                    <p className="text-gray-700 leading-relaxed text-xs">
                                                        {item.description}
                                                </p>
                                            </div>
                                            </div>
                                        ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                                                 );
                     })()}
                                </div>
            </section>

            {/* Section 6: Leadership Team */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-black text-black mb-6 anton-regular uppercase">
                            Leadership <span className="text-[#15a36e]">Team</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#255f99] to-[#15a36e] mx-auto rounded-full"></div>
                            </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
                        {/* Raayif Aarif - CTO */}
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-[#255f99] to-[#15a36e] rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/Raayif-aarif.png" 
                                    alt="Raayif Aarif" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Raayif Aarif</h4>
                                    <p className="text-[#255f99] font-semibold text-lg">CTO</p>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Former blockchain architect at a leading fintech with 15+ years in asset management.
                                </p>
                            </div>
                        </div>

                        {/* Kuldeep - CEO */}
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-[#255f99] to-[#15a36e] rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/Kuldeep.png" 
                                    alt="Kuldeep" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Kuldeep</h4>
                                    <p className="text-[#255f99] font-semibold text-lg">CEO</p>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Expert in distributed systems and cryptography with multiple patents in blockchain security.
                                </p>
                            </div>
                        </div>

                        {/* Azwaan - HR */}
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-[#255f99] to-[#15a36e] rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/Azwaan.png" 
                                    alt="Azwaan" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Azwaan</h4>
                                    <p className="text-[#15a36e] font-semibold text-lg">HR</p>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Former regulator with deep expertise in global financial compliance frameworks.
                                </p>
                            </div>
                        </div>

                        {/* Ansab */}
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-[#15a36e] to-[#255f99] rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/ansab.png" 
                                    alt="Ansab" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Ansab</h4>
                                    <p className="text-[#255f99] font-semibold text-lg">Developer</p>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Full-stack developer specializing in blockchain integration and smart contract development.
                                </p>
                            </div>
                        </div>

                        {/* Abhishek */}
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-[#255f99] to-[#15a36e] rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/abhishek.png" 
                                    alt="Abhishek" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Abhishek</h4>
                                    <p className="text-[#15a36e] font-semibold text-lg">Developer</p>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Full-stack developer with expertise in fintech solutions and blockchain development.
                                </p>
                            </div>
                        </div>

                        {/* Hanan Arif */}
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-[#15a36e] to-[#255f99] rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/hanan.png" 
                                    alt="Hanan Arif" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Hanan Arif</h4>
                                    <p className="text-[#255f99] font-semibold text-lg">Developer</p>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Frontend developer specializing in React and modern web technologies.
                                </p>
                            </div>
                        </div>

                        {/* Anas KP */}
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-[#255f99] to-[#15a36e] rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/anas.png" 
                                    alt="Anas KP" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Anas KP</h4>
                                    <p className="text-[#15a36e] font-semibold text-lg">Developer</p>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Backend developer focusing on API development and database optimization.
                                </p>
                            </div>
                        </div>

                        {/* Nada Abdulla */}
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-[#15a36e] to-[#255f99] rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/nada.png" 
                                    alt="Nada Abdulla" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Nada Abdulla</h4>
                                    <p className="text-[#255f99] font-semibold text-lg">Developer</p>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Frontend developer with expertise in UI implementation and responsive design.
                                </p>
                            </div>
                        </div>

                        {/* Nuha Fathima */}
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-24 h-24 bg-gradient-to-br from-[#255f99] to-[#15a36e] rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img 
                                    src="/assets/Images/team/nuha.png" 
                                    alt="Nuha Fathima" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 anton-regular">Nuha Fathima</h4>
                                    <p className="text-[#15a36e] font-semibold text-lg">Developer</p>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Mobile developer specializing in React Native and cross-platform applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: Technology & Innovation */}
            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-black text-black mb-6 anton-regular uppercase">
                            Technology & <span className="text-[#255f99]">Innovation</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#255f99] to-[#15a36e] mx-auto rounded-full"></div>
                                </div>
                    
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            {/* Tech Stack Cards */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60">
                                <h3 className="text-2xl font-bold text-[#255f99] mb-6 anton-regular">Technology Stack</h3>
                                <div className="h-64 flex items-center justify-center text-gray-500">
                                    [Technology Stack - Step 2]
                            </div>
                        </div>
                    </div>

                        <div className="space-y-8">
                            {/* Platform Integration */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60">
                                <h3 className="text-2xl font-bold text-[#15a36e] mb-6 anton-regular">Platform Integration</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-3 h-3 bg-[#15a36e] rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h4 className="font-semibold text-[#15a36e] text-lg mb-2">Fireblocks</h4>
                                            <p className="text-gray-600 leading-relaxed text-sm">
                                                Institutional-grade MPC wallet security for safeguarding assets.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-4">
                                        <div className="w-3 h-3 bg-[#255f99] rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h4 className="font-semibold text-[#255f99] text-lg mb-2">Crossmint</h4>
                                            <p className="text-gray-600 leading-relaxed text-sm">
                                                Decentralized Identity (DID) and Verifiable Credential issuance.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-4">
                                        <div className="w-3 h-3 bg-[#15a36e] rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h4 className="font-semibold text-[#15a36e] text-lg mb-2">Sumsub</h4>
                                            <p className="text-gray-600 leading-relaxed text-sm">
                                                Seamless KYC/AML compliance to meet global regulations.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-4">
                                        <div className="w-3 h-3 bg-[#255f99] rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h4 className="font-semibold text-[#255f99] text-lg mb-2">IPFS</h4>
                                            <p className="text-gray-600 leading-relaxed text-sm">
                                                Tamper-proof, decentralized data storage ensuring immutability.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
        </div>
    );
};

export default AboutUs;
