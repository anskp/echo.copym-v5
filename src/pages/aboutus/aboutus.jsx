import React from "react";
import { LavaLamp } from "../../components/ui/fluid-blob";

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-blue-100">
            {/* Section 1: Hero Section */}
            <section className="relative min-h-[80vh] sm:min-h-[65vh] lg:min-h-[70vh] max-h-[90vh] sm:max-h-[85vh] lg:max-h-[90vh] overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
                </div>

                {/* Fluid Blob Background */}
                <div className="absolute inset-0 opacity-30">
                    <LavaLamp />
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                
                {/* Hero Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-8 pb-4 sm:pb-6 lg:pb-8">
                    <div className="text-center space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg">
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-green-600 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-gray-700">Leading RWA Tokenization Platform</span>
                        </div>
                        
                        {/* Main Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 sm:mb-6 uppercase anton-regular">
                            <span className="text-gray-900">About</span>{" "}
                            <span className="text-green-600">COPYm</span>
                        </h1>
                        
                        {/* Subtitle */}
                        <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto">
                            Transforming asset ownership through blockchain innovation and institutional-grade tokenization
                        </p>
                        
                        {/* CTA Button */}
                        <div className="flex justify-center pt-8">
                            <button className="btn-gradient inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-semibold text-black shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                                Explore Our Journey
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-green-600 rounded-full mt-2"></div>
                    </div>
                </div>
            </section>

            {/* Section 2: Company Overview */}
            <section className="relative">
                {/* Main Content */}
                <div className="relative z-10 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 anton-regular uppercase">
<<<<<<< HEAD
                                Company <span className="text-green-400">Overview</span>
                        </h2>
=======
                                <span className="text-green-400">Overview</span>
                            </h2>
>>>>>>> 15711c7a9b3ed14922be7354b735cf96a1324202
                            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-300 mx-auto rounded-full"></div>
                </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                            <p className="text-white/90 leading-relaxed font-medium">
                                                COPYm is a cutting-edge <span className="font-semibold text-green-400">Real World Asset (RWA) tokenization platform</span> designed to transform how the world perceives and manages ownership.
                                        </p>
                                        
                                            <p className="text-white/80 leading-relaxed">
                                                We bridge tangible value and digital innovation, enabling physical assets — from <span className="font-semibold text-green-400">real estate and commodities</span> to <span className="font-semibold text-green-400">collectibles and intellectual property</span> — to be securely digitized, fractionalized, and traded on a global scale.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 flex items-center justify-center border border-white/20">
                                <div className="text-center space-y-6">
                                        <h3 className="text-2xl font-bold text-green-400 anton-regular">Why We Exist</h3>
                                    <div className="space-y-4 text-left">
                                            <p className="text-white/90 leading-relaxed">
                                                The traditional asset market is <span className="font-semibold text-green-400">fragmented, slow, and geographically restricted</span>. COPYm is here to change that.
                                        </p>
                                            <p className="text-white/80 leading-relaxed">
                                            By merging blockchain technology with real-world compliance, we create a unified marketplace where assets can be exchanged instantly, securely, and without borders.
                                        </p>
                                        </div>
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
                            Mission & <span className="text-blue-600">Vision</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-600 mx-auto rounded-full"></div>
                                </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Mission - Left Side */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/60 overflow-hidden transition-all duration-300 hover:shadow-2xl">
                            <div className="p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-2xl">M</span>
                                </div>
                                    <h3 className="text-2xl font-bold text-blue-600 anton-regular">Our Mission</h3>
                                </div>
                                
                                <div className="space-y-4">
                                    <p className="text-gray-700 leading-relaxed font-medium">
                                        To make asset ownership borderless, transparent, and universally accessible through blockchain innovation.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        We democratize access to investment opportunities by enabling fractional ownership of premium assets, making it possible for anyone to invest in real estate, commodities, and valuable assets with as little as $100.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        Our mission extends beyond technology — we strive to foster financial inclusion and create a more equitable economic landscape where wealth generation is not limited by geographical boundaries.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Vision - Right Side */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/60 overflow-hidden transition-all duration-300 hover:shadow-2xl">
                            <div className="p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-2xl">V</span>
                                </div>
                                    <h3 className="text-2xl font-bold text-green-600 anton-regular">Our Vision</h3>
                                </div>
                                
                                <div className="space-y-4">
                                    <p className="text-gray-700 leading-relaxed font-medium">
                                        We see a future where any asset, anywhere, can be owned, traded, and verified instantly through blockchain technology.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        Our vision encompasses a world where traditional asset classes seamlessly integrate with digital innovation, creating unprecedented opportunities for wealth creation and preservation.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        We aspire to facilitate the tokenization of trillions of dollars in global assets, creating a more liquid, transparent, and efficient financial ecosystem that benefits all participants.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        Ultimately, our vision is to pioneer the next evolution of capitalism — one that is more inclusive, transparent, and efficient for generations to come.
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
                            Core <span className="text-green-600">Values</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Core Values */}
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-xl font-bold text-blue-600 anton-regular">Integrity</h4>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Trust and transparency in every transaction.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-xl font-bold text-green-600 anton-regular">Security</h4>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Institutional-grade protection for every asset.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-xl font-bold text-blue-600 anton-regular">Innovation</h4>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Pushing the boundaries of asset technology.
                                </p>
                            </div>
                                </div>

                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                </svg>
                                </div>
                            <div className="space-y-3">
                                <h4 className="text-xl font-bold text-green-600 anton-regular">Inclusivity</h4>
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
                            From Vision to <span className="text-blue-600">Reality</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-600 mx-auto rounded-full"></div>
                            </div>

                    {/* New Vertical Timeline Structure */}
                    <div className="relative">
                        {/* Central Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-green-600 to-blue-500 rounded-full shadow-lg"></div>
                        
                        {/* Timeline Items */}
                        <div className="space-y-12">
                            {/* 2021 - Foundation */}
                            <div className="relative flex items-center">
                                <div className="w-full lg:w-1/2 lg:pr-8">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                                                <span className="text-white font-bold text-xl anton-regular">2021</span>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-green-600 anton-regular">Foundation</h3>
                                                <div className="w-12 h-1 bg-gradient-to-r from-green-600 to-green-500 rounded-full"></div>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">
                                            Founded COPYm to revolutionize asset ownership through blockchain innovation. 
                                            Established core team and developed initial platform architecture.
                                        </p>
                                        <div className="mt-4 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                                            <span className="text-sm text-gray-600">Platform Foundation</span>
                                        </div>
                                    </div>
                            </div>
                            
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-600 to-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                                
                                <div className="w-full lg:w-1/2 lg:pl-8"></div>
                                    </div>
                                    
                            {/* 2022 - Innovation */}
                            <div className="relative flex items-center">
                                <div className="w-full lg:w-1/2 lg:pr-8"></div>
                                
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-600 to-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                                
                                <div className="w-full lg:w-1/2 lg:pl-8">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                                                <span className="text-white font-bold text-xl anton-regular">2022</span>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-green-600 anton-regular">Innovation</h3>
                                                <div className="w-12 h-1 bg-gradient-to-r from-green-600 to-green-500 rounded-full"></div>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">
                                            Pioneered real estate tokenization with flagship projects alongside industry-leading developers. 
                                            Launched beta platform with first tokenized assets.
                                        </p>
                                        <div className="mt-4 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                                            <span className="text-sm text-gray-600">Real Estate Tokenization</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2023 - Expansion */}
                            <div className="relative flex items-center">
                                <div className="w-full lg:w-1/2 lg:pr-8">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                                                <span className="text-white font-bold text-xl anton-regular">2023</span>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-green-600 anton-regular">Expansion</h3>
                                                <div className="w-12 h-1 bg-gradient-to-r from-green-600 to-green-500 rounded-full"></div>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">
                                            Expanded into commodities and IP tokenization, securing strategic enterprise partnerships. 
                                            Reached $100M in tokenized assets under management.
                                        </p>
                                        <div className="mt-4 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                                            <span className="text-sm text-gray-600">Multi-Asset Platform</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-600 to-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                                
                                <div className="w-full lg:w-1/2 lg:pl-8"></div>
                            </div>

                            {/* 2024 - Scaling */}
                            <div className="relative flex items-center">
                                <div className="w-full lg:w-1/2 lg:pr-8"></div>
                                
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-600 to-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                                
                                <div className="w-full lg:w-1/2 lg:pl-8">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                                                <span className="text-white font-bold text-xl anton-regular">2024</span>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-green-600 anton-regular">Scaling</h3>
                                                <div className="w-12 h-1 bg-gradient-to-r from-green-600 to-green-500 rounded-full"></div>
                                            </div>
                                            </div>
                                        <p className="text-gray-700 leading-relaxed">
                                            Scaled to $500M in tokenized assets across 15 countries, empowering 10,000+ users. 
                                            Launched institutional-grade compliance features.
                                        </p>
                                        <div className="mt-4 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                                            <span className="text-sm text-gray-600">Global Expansion</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2025 - Global Growth */}
                            <div className="relative flex items-center">
                                <div className="w-full lg:w-1/2 lg:pr-8">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                                        {/* Active Indicator */}
                                        <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                                        <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full"></div>
                                        
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                                                <span className="text-white font-bold text-xl anton-regular">2025</span>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-green-600 anton-regular">Global Growth</h3>
                                                <div className="w-12 h-1 bg-gradient-to-r from-green-600 to-green-500 rounded-full"></div>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">
                                            Accelerating global expansion with enterprise-grade compliance and multi-chain infrastructure. 
                                            Targeting $1B+ in tokenized assets and expanding to 25+ countries.
                                        </p>
                                        <div className="mt-4 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                                            <span className="text-sm text-gray-600">Enterprise Scale</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-green-600 to-green-500 rounded-full border-4 border-white shadow-lg z-10 animate-pulse"></div>
                                
                                <div className="w-full lg:w-1/2 lg:pl-8"></div>
                            </div>
                        </div>
                    </div>
                                </div>
            </section>

            {/* Section 6: Leadership Team */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-black text-black mb-6 anton-regular uppercase">
                            Leadership <span className="text-green-600">Team</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-600 mx-auto rounded-full"></div>
                            </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
                        {/* Kuldeep - CEO */}
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
                        </div>

                        {/* Rameez - COO */}
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
                        </div>

                        {/* Azwaan - HR */}
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
                        </div>

                        {/* Raayif Aarif - CTO */}
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
                        </div>

                        {/* Ansab */}
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
                        </div>

                        {/* Abhishek */}
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
                        </div>

                        {/* Hanan Arif */}
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
                        </div>

                        {/* Anas KP */}
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
                        </div>

                        {/* Nada Abdulla */}
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
                        </div>

                        {/* Nuha Fathima */}
                        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: Technology & Innovation */}
            <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-black text-black mb-6 anton-regular uppercase">
                            Technology & <span className="text-blue-600">Innovation</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-600 mx-auto rounded-full"></div>
                                </div>
                    
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            {/* Technology Integration */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60">
<<<<<<< HEAD
                                <h3 className="text-2xl font-bold text-blue-600 mb-6 anton-regular">Technology Stack</h3>
                                <div className="h-64 flex items-center justify-center text-gray-500">
                                    [Technology Stack - Step 2]
=======
                                <h3 className="text-2xl font-bold text-blue-600 mb-6 anton-regular">Technology Integration</h3>
                                <div className="grid grid-cols-3 gap-6">
                                    {/* Solana */}
                                    <div className="flex items-center justify-center">
                                        <div className="w-16 h-16 flex items-center justify-center">
                                            <img src="/assets/blockchains/solana-sol-logo.svg" alt="Solana" className="w-full h-full" />
                                        </div>
                                    </div>
                                    
                                    {/* Polygon */}
                                    <div className="flex items-center justify-center">
                                        <div className="w-16 h-16 flex items-center justify-center">
                                            <img src="/assets/blockchains/polygon-matic-logo.svg" alt="Polygon" className="w-full h-full" />
                                        </div>
                                    </div>
                                    
                                    {/* Optimism */}
                                    <div className="flex items-center justify-center">
                                        <div className="w-16 h-16 flex items-center justify-center">
                                            <img src="/assets/blockchains/optimism-ethereum-op-logo.svg" alt="Optimism" className="w-full h-full" />
                                        </div>
                                    </div>
                                    
                                    {/* Ethereum */}
                                    <div className="flex items-center justify-center">
                                        <div className="w-16 h-16 flex items-center justify-center">
                                            <img src="/assets/blockchains/ethereum-eth-logo.svg" alt="Ethereum" className="w-full h-full" />
                                        </div>
                                    </div>
                                    
                                    {/* Bitcoin */}
                                    <div className="flex items-center justify-center">
                                        <div className="w-16 h-16 flex items-center justify-center">
                                            <img src="/assets/blockchains/bitcoin-btc-logo.svg" alt="Bitcoin" className="w-full h-full" />
                                        </div>
                                    </div>
                                    
                                    {/* Avalanche */}
                                    <div className="flex items-center justify-center">
                                        <div className="w-16 h-16 flex items-center justify-center">
                                            <img src="/assets/blockchains/avalanche-avax-logo.svg" alt="Avalanche" className="w-full h-full" />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Audit & Security Partners */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Audit & Security Partners</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex flex-col items-center space-y-2">
                                            <div className="w-12 h-12 bg-white rounded-xl p-2 shadow-md flex items-center justify-center">
                                                <img src="/assets/svg/audit0.png" alt="Audit Partner" className="w-full h-full" />
                                            </div>
                                            <span className="text-xs font-medium text-gray-600">Audit Partner</span>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2">
                                            <div className="w-12 h-12 bg-white rounded-xl p-2 shadow-md flex items-center justify-center">
                                                <img src="/assets/svg/cervik.png" alt="Cervik" className="w-full h-full" />
                                            </div>
                                            <span className="text-xs font-medium text-gray-600">Cervik</span>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2">
                                            <div className="w-12 h-12 bg-white rounded-xl p-2 shadow-md flex items-center justify-center">
                                                <img src="/assets/svg/h.png" alt="Security Partner" className="w-full h-full" />
                                            </div>
                                            <span className="text-xs font-medium text-gray-600">Security Partner</span>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2">
                                            <div className="w-12 h-12 bg-white rounded-xl p-2 shadow-md flex items-center justify-center">
                                                <img src="/assets/svg/ic.png" alt="IC Partner" className="w-full h-full" />
                                            </div>
                                            <span className="text-xs font-medium text-gray-600">IC Partner</span>
                                        </div>
                                        <div className="flex flex-col items-center space-y-2">
                                            <div className="w-12 h-12 bg-white rounded-xl p-2 shadow-md flex items-center justify-center">
                                                <img src="/assets/svg/z.png" alt="Z Partner" className="w-full h-full" />
                                            </div>
                                            <span className="text-xs font-medium text-gray-600">Z Partner</span>
                                        </div>
                                    </div>
                                </div>
>>>>>>> 15711c7a9b3ed14922be7354b735cf96a1324202
                            </div>
                        </div>
                    </div>

                        <div className="space-y-8">
                            {/* Platform Integration */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60">
                                <h3 className="text-2xl font-bold text-green-600 mb-6 anton-regular">Platform Integration</h3>
                                <div className="grid grid-cols-2 gap-6">
                                    {/* Fireblocks */}
                                    <div className="flex items-center justify-center">
                                        <div className="w-16 h-16 flex items-center justify-center">
                                            <img src="/assets/svg/Fireblocks.svg" alt="Fireblocks" className="w-full h-full" />
                                        </div>
                                    </div>
                                    
                                    {/* Crossmint */}
                                    <div className="flex items-center justify-center">
                                        <div className="w-16 h-16 flex items-center justify-center">
                                            <img src="/assets/svg/Crossmint_idPetUnPey_0.png" alt="Crossmint" className="w-full h-full" />
                                        </div>
                                    </div>
                                    
                                    {/* Imperial PFS */}
                                    <div className="flex items-center justify-center">
                                        <div className="w-16 h-16 flex items-center justify-center">
                                            <img src="/assets/svg/Imperial PFS_id6TGACQIO_1.png" alt="Imperial PFS" className="w-full h-full" />
                                        </div>
                                    </div>
                                    
                                    {/* Sumsub */}
                                    <div className="flex items-center justify-center">
                                        <div className="w-16 h-16 flex items-center justify-center">
                                            <img src="/assets/svg/sumsub.png" alt="Sumsub" className="w-full h-full" />
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