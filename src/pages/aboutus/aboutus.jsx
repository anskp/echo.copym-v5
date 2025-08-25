import React from "react";

const AboutUs = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 text-black uppercase anton-regular">
                        <span className="text-[#255f99]">About </span>
                        <span className="text-[#15a36e]">Us</span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#255f99] to-[#15a36e] mx-auto rounded-full"></div>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    
                    {/* Left Column: Company Information */}
                    <div className="space-y-12">
                        {/* Company Overview Card */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Overview</h2>
                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">COPYm</strong> is a cutting-edge{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e] font-semibold">Real World Asset (RWA)</span>{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e] font-semibold">tokenization platform</span>{" "}
                                designed to transform how the world perceives and manages ownership.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700">
                                We bridge tangible value and digital innovation, enabling physical
                                assets — from real estate and commodities to collectibles and
                                intellectual property — to be securely digitized, fractionalized, and
                                traded on a global scale.
                            </p>
                        </div>

                        {/* Mission & Vision Card */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mission & Vision</h2>
                            
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-[#255f99] mb-4">Our Mission</h3>
                                    <div className="space-y-4">
                                        <p className="text-gray-700 leading-relaxed">
                                            To make asset ownership <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">borderless, transparent, and universally accessible</strong> — enabling physical assets to be digitized, fractionalized, and traded globally with institutional-grade security and regulatory compliance at every step.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            We are committed to <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">democratizing access to investment opportunities</strong> by breaking down traditional barriers that have historically excluded individuals and smaller institutions from participating in high-value asset markets. Through our innovative platform, we enable fractional ownership of premium assets, making it possible for anyone to invest in real estate, commodities, and other valuable assets with as little as $100.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            Our mission extends beyond technology — we strive to <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">foster financial inclusion</strong> and create a more equitable economic landscape where wealth generation is not limited by geographical boundaries or traditional financial gatekeepers. We believe that by making asset ownership more accessible, we can help build stronger, more resilient communities and economies worldwide.
                                        </p>
                                    </div>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-semibold text-[#15a36e] mb-4">Our Vision</h3>
                                    <div className="space-y-4">
                                        <p className="text-gray-700 leading-relaxed">
                                            We see a future where <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">any asset, anywhere</strong>, can be owned, traded, and verified instantly. COPYm is building the infrastructure for that reality — empowering issuers, protecting investors, and reshaping the global economy for the next generation of finance.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            Our vision encompasses a <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">world where traditional asset classes seamlessly integrate with digital innovation</strong>, creating unprecedented opportunities for wealth creation and preservation. We envision a future where blockchain technology serves as the backbone of global commerce, enabling instant cross-border transactions, automated compliance, and real-time asset valuation across all markets.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            Looking ahead, we see COPYm becoming the <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">premier platform for institutional-grade asset tokenization</strong>, serving as the bridge between traditional finance and the emerging digital economy. We aspire to facilitate the tokenization of trillions of dollars in global assets, creating a more liquid, transparent, and efficient financial ecosystem that benefits all participants — from individual investors to multinational corporations.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            Ultimately, our vision is to <strong className="bg-clip-text text-transparent bg-gradient-to-r from-[#255f99] to-[#15a36e]">pioneer the next evolution of capitalism</strong> — one that is more inclusive, transparent, and efficient. We believe that by democratizing access to capital markets and creating new forms of asset ownership, we can help build a more prosperous and sustainable future for generations to come.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Platform Integration & AI Compliance Card */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Integration & AI Compliance</h2>
                            <div className="space-y-6">
                                <div className="relative">
                                    <h3 className="text-xl font-semibold text-[#255f99] mb-4">Platform Integration</h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Our platform enables you to tokenize and fractionalize assets such as real estate, commodities, and securities. We seamlessly integrate with Ethereum, Polygon, Solana, Avalanche, and more for global liquidity and accessibility.
                                    </p>
                                    {/* Connecting line to blockchain logos */}
                                    <div className="relative h-16 flex items-center">
                                        <div className="w-full h-0.5 bg-gradient-to-r from-[#255f99] to-[#15a36e] rounded-full"></div>
                                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#15a36e] rounded-full"></div>
                                    </div>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-semibold text-[#15a36e] mb-4">AI Compliance</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Automated KYC/AML, identity verification, and transaction monitoring powered by AI — ensuring regulatory compliance while maintaining user privacy and security across all jurisdictions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Technology Stack Card */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Technology Stack</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-gradient-to-br from-[#255f99]/10 to-[#15a36e]/10 rounded-2xl p-4">
                                    <h4 className="font-semibold text-[#255f99] mb-2">Fireblocks</h4>
                                    <p className="text-sm text-gray-600">Institutional-grade MPC wallet security for safeguarding assets.</p>
                                </div>
                                <div className="bg-gradient-to-br from-[#255f99]/10 to-[#15a36e]/10 rounded-2xl p-4">
                                    <h4 className="font-semibold text-[#255f99] mb-2">Crossmint</h4>
                                    <p className="text-sm text-gray-600">Decentralized Identity (DID) and Verifiable Credential issuance.</p>
                                </div>
                                <div className="bg-gradient-to-br from-[#255f99]/10 to-[#15a36e]/10 rounded-2xl p-4">
                                    <h4 className="font-semibold text-[#255f99] mb-2">Sumsub</h4>
                                    <p className="text-sm text-gray-600">Seamless KYC/AML compliance to meet global regulations.</p>
                                </div>
                                <div className="bg-gradient-to-br from-[#255f99]/10 to-[#15a36e]/10 rounded-2xl p-4">
                                    <h4 className="font-semibold text-[#255f99] mb-2">IPFS</h4>
                                    <p className="text-sm text-gray-600">Tamper-proof, decentralized data storage ensuring immutability.</p>
                                </div>
                            </div>
                        </div>

                        {/* Values Card */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Core Values</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="text-center p-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#255f99] to-[#15a36e] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-white font-bold text-lg">I</span>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Integrity</h4>
                                    <p className="text-sm text-gray-600">Trust and transparency in every transaction.</p>
                                </div>
                                <div className="text-center p-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#255f99] to-[#15a36e] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-white font-bold text-lg">S</span>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Security</h4>
                                    <p className="text-sm text-gray-600">Institutional-grade protection for every asset.</p>
                                </div>
                                <div className="text-center p-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#255f99] to-[#15a36e] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-white font-bold text-lg">I</span>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
                                    <p className="text-sm text-gray-600">Pushing the boundaries of asset technology.</p>
                                </div>
                                <div className="text-center p-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#255f99] to-[#15a36e] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-white font-bold text-lg">I</span>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Inclusivity</h4>
                                    <p className="text-sm text-gray-600">Opening markets to participants worldwide.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Timeline & Team */}
                    <div className="space-y-12">
                        {/* Company Journey Timeline */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Journey</h2>
                            <div className="relative">
                                {/* Timeline line */}
                                <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-[#255f99] to-[#15a36e] rounded-full"></div>

                                <div className="space-y-8">
                                    {[
                                        { year: "2021", title: "Foundation", desc: "Founded COPYm to revolutionize asset ownership through blockchain innovation." },
                                        { year: "2022", title: "Real Estate Tokenization", desc: "Pioneered real estate tokenization with flagship projects alongside industry-leading developers." },
                                        { year: "2023", title: "Expansion", desc: "Expanded into commodities and IP tokenization, securing strategic enterprise partnerships." },
                                        { year: "2024", title: "Scale", desc: "Scaled to $500M in tokenized assets across 15 countries, empowering 10,000+ users." },
                                        { year: "2025", title: "Global Growth", desc: "Accelerating global expansion with enterprise-grade compliance and multi-chain infrastructure." }
                                    ].map((item, index) => (
                                        <div key={index} className="relative flex items-start">
                                            <div className="absolute left-0 h-12 w-12 rounded-full bg-gradient-to-br from-[#255f99] to-[#15a36e] flex items-center justify-center shadow-lg">
                                                <div className="h-4 w-4 rounded-full bg-white"></div>
                                            </div>
                                            <div className="ml-16">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h4 className="text-xl font-bold text-gray-900">{item.year}</h4>
                                                    <span className="text-sm font-medium text-[#15a36e] bg-[#15a36e]/10 px-3 py-1 rounded-full">
                                                        {item.title}
                                                    </span>
                                                </div>
                                                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Leadership Team */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Leadership Team</h2>
                            <div className="grid grid-cols-1 gap-6">
                                {[
                                    {
                                        name: "Raayif Aarif",
                                        role: "CTO",
                                        image: "/assets/Images/team/Raayif-aarif.png",
                                        desc: "Former blockchain architect at a leading fintech with 15+ years in asset management."
                                    },
                                    {
                                        name: "Kuldeep",
                                        role: "CEO",
                                        image: "/assets/Images/team/Kuldeep.png",
                                        desc: "Expert in distributed systems and cryptography with multiple patents in blockchain security."
                                    },
                                    {
                                        name: "Azwaan",
                                        role: "HR",
                                        image: "/assets/Images/team/Azwaan.png",
                                        desc: "Former regulator with deep expertise in global financial compliance frameworks."
                                    }
                                ].map((member, index) => (
                                    <div key={index} className="flex items-center gap-6 p-4 bg-gradient-to-r from-[#255f99]/5 to-[#15a36e]/5 rounded-2xl">
                                        <div className="flex-shrink-0">
                                            <img 
                                                src={member.image} 
                                                alt={member.name}
                                                className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                                            <p className="text-[#15a36e] font-medium mb-2">{member.role}</p>
                                            <p className="text-gray-600 text-sm leading-relaxed">{member.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
