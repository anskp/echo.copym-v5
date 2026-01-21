import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Building2,
    Gem,
    Trophy,
    Leaf,
    Palette,
    Package,
    ExternalLink,
    ChevronRight,
    MapPin,
    Layers,
    ShieldCheck,
    CheckCircle2,
    Heart,
    TrendingUp
} from 'lucide-react';

// Import images
import artsImg from '../../../components/images/marketplacesimg/arts.jpg';
import commoditiesImg from '../../../components/images/marketplacesimg/commodities.jpeg';
import realEstateImg from '../../../components/images/marketplacesimg/realestatee.png';
import sportsImg from '../../../components/images/marketplacesimg/sports.jpg';
import carbonCreditsImg from '../../../components/images/marketplacesimg/carbon credits.jpeg';
import luxuryBuildingImg from '../../../components/images/marketplacesimg/luxurybuilding.jpeg';
import downloadImg from '../../../components/images/marketplacesimg/download (15).jpeg';

const categories = [
    {
        id: 'art',
        name: 'Art',
        icon: <Palette className="w-4 h-4" />,
        image: artsImg,
        title: "Tokenized Fine Art",
        description: "Own fractions of masterpiece artworks from renowned artists. Democratizing access to the exclusive world of fine art investments.",
        benefits: ["Fractional Ownership", "Blue-Chip Art Access", "Secure Provenance"],
        stats: [
            { label: 'Total Asset Value', value: '$1,250,000', change: '+5.2%' },
            { label: 'APY', value: '3.85%', change: null },
            { label: 'Token Supply', value: '50,000', change: null },
            { label: 'Circulating Supply', value: '42,500', change: null },
            { label: '1M Active Addresses', value: '1,245', change: '+4.8%' },
            { label: '1M Transfer Volume', value: '$892,340', change: '+6.1%' },
            { label: '1M Transfer Count', value: '2,341', change: '+3.9%' },
            { label: 'Contract Address', value: '0xART...89F21', change: null }
        ],
        growth: '+18.5%',
        topics: ['Paintings', 'Sculptures', 'Digital Art'],
        badges: [
            { label: 'Fine Art Collection', icon: <Palette className="w-4 h-4" />, top: '20%', left: '-8%' },
            { label: 'Verified Authenticity', icon: <ShieldCheck className="w-4 h-4" />, bottom: '30%', right: '-10%' },
        ],
        assets: [
            {
                name: "Renaissance Collection",
                location: "Florence, Italy",
                roi: "9.2%",
                tokensAvailable: "1,500/2,000",
                price: "$2,400,000",
                image: "/assets/Images/art2.jpg"
            },
            {
                name: "Modern Abstract Series",
                location: "London, UK",
                roi: "12.5%",
                tokensAvailable: "500/1,500",
                price: "$1,850,000",
                image: "/assets/Images/art3.jpg"
            }
        ]
    },
    {
        id: 'commodities',
        name: 'Commodities',
        icon: <Package className="w-4 h-4" />,
        image: commoditiesImg,
        title: "Tokenized Commodities",
        description: "Direct exposure to global commodities markets through tokenized assets. From precious metals to energy resources, diversify your portfolio.",
        benefits: ["Inflation Hedge", "Global Markets", "Direct Exposure"],
        stats: [
            { label: 'Total Asset Value', value: '$18,170,000', change: '+2.7%' },
            { label: 'APY', value: '3.85%', change: null },
            { label: 'Token Supply', value: '750,000', change: null },
            { label: 'Circulating Supply', value: '640,000', change: null },
            { label: '1M Active Addresses', value: '13,441', change: '+3.2%' },
            { label: '1M Transfer Volume', value: '$9,134,670', change: '+2.1%' },
            { label: '1M Transfer Count', value: '24,355', change: '+2.8%' },
            { label: 'Contract Address', value: '0xCOM...45D12', change: null }
        ],
        growth: '+12.3%',
        topics: ['Gold', 'Silver', 'Oil & Gas'],
        badges: [
            { label: 'Commodity Token', icon: <Package className="w-4 h-4" />, top: '15%', left: '-5%' },
            { label: 'Global Exchange', icon: <MapPin className="w-4 h-4" />, bottom: '35%', right: '-8%' },
        ],
        assets: [
            {
                name: 'Gold Reserve Token',
                location: 'Zurich, Switzerland',
                roi: '2.15%',
                tokensAvailable: '215,000/250,000',
                price: '$12,500,000',
                image: commoditiesImg
            },
            {
                name: 'Oil & Gas Fund',
                location: 'Texas, USA',
                roi: '5.80%',
                tokensAvailable: '425,000/500,000',
                price: '$5,670,000',
                image: downloadImg
            }
        ]
    },
    {
        id: 'real-estate',
        name: 'Real Estate',
        icon: <Building2 className="w-4 h-4" />,
        image: realEstateImg,
        title: "Tokenized Premium Real Estate",
        description: "Access institutional-grade property investments with fractional ownership. Earn rental yields and capital appreciation without the traditional barriers to entry.",
        benefits: ["Fractional Ownership", "Monthly Rental Yields", "High Liquid Market"],
        stats: [
            { label: 'Total Asset Value', value: '$234,700', change: '+3.1%' },
            { label: 'APY', value: '4.11%', change: null },
            { label: 'Token Supply', value: '123,334,323.22', change: null },
            { label: 'Circulating Supply', value: '3,334,623.90', change: null },
            { label: '1M Active Addresses', value: '323', change: '+3.1%' },
            { label: '1M Transfer Volume', value: '$343,453', change: '+3.1%' },
            { label: '1M Transfer Count', value: '623', change: '+3.1%' },
            { label: 'Contract Address', value: '0x000...43124', change: null }
        ],
        growth: '+24.5%',
        topics: ['Apartment', 'House', 'Villa'],
        badges: [
            { label: 'Commercial Real Estate', icon: <Building2 className="w-4 h-4" />, top: '15%', left: '-10%' },
            { label: 'New York, USA', icon: <MapPin className="w-4 h-4" />, top: '45%', right: '-15%' },
            { label: '1,000 Total Tokens', icon: <Layers className="w-4 h-4" />, bottom: '25%', left: '-12%' },
            { label: '750 Available', icon: <CheckCircle2 className="w-4 h-4" />, bottom: '10%', right: '-10%' },
        ],
        assets: [
            {
                name: 'Luxury Apartment Complex',
                location: 'Miami, USA',
                roi: '6.8%',
                tokensAvailable: '1200/1500',
                price: '$350,000',
                image: luxuryBuildingImg
            },
            {
                name: 'Premium Office Building',
                location: 'New York, USA',
                roi: '8.5%',
                tokensAvailable: '750/1000',
                price: '$500,000',
                image: realEstateImg
            }
        ]
    },
    {
        id: 'sports',
        name: 'Sports',
        icon: <Trophy className="w-4 h-4" />,
        image: sportsImg,
        title: "Sports Asset Tokenization",
        description: "Invest in tokenized sports assets including team shares, athlete contracts, and stadium infrastructure. A new frontier in fan engagement and ownership.",
        benefits: ["Fan Ownership", "Revenue Sharing", "Global Access"],
        stats: [
            { label: 'Total Asset Value', value: '$8,500,000', change: '+7.3%' },
            { label: 'APY', value: '6.50%', change: null },
            { label: 'Token Supply', value: '1,000,000', change: null },
            { label: 'Circulating Supply', value: '750,000', change: null },
            { label: '1M Active Addresses', value: '12,450', change: '+8.5%' },
            { label: '1M Transfer Volume', value: '$4,567,890', change: '+9.2%' },
            { label: '1M Transfer Count', value: '25,678', change: '+6.7%' },
            { label: 'Contract Address', value: '0xSPT...78A34', change: null }
        ],
        growth: '+31.2%',
        topics: ['Teams', 'Athletes', 'Stadiums'],
        badges: [
            { label: 'Sports Franchise', icon: <Trophy className="w-4 h-4" />, top: '25%', left: '-5%' },
            { label: 'Verified Asset', icon: <ShieldCheck className="w-4 h-4" />, bottom: '30%', right: '-8%' },
        ],
        assets: [
            {
                name: "Elite Sports Team",
                location: "Madrid, Spain",
                roi: "8.4%",
                tokensAvailable: "250,000/500,000",
                price: "$150M",
                image: "/assets/Images/teams.jpg"
            },
            {
                name: "Major Sports Stadium",
                location: "Munich, Germany",
                roi: "10.2%",
                tokensAvailable: "75,000/100,000",
                price: "$45M",
                image: "/assets/Images/stadium.jpg"
            }
        ]
    },
    {
        id: 'carbon-credits',
        name: 'Carbon Credits',
        icon: <Leaf className="w-4 h-4" />,
        image: carbonCreditsImg,
        title: "Carbon Credit",
        description: "Transparent digital carbon assets backed by real-world climate action.Designed for accountability, traceability, and global environmental progress.",
        benefits: ["ESG Compliant", "Verified Offsets", "Sustainable Returns"],
        stats: [
            { label: 'Total Asset Value', value: '$2,340,000', change: '+4.5%' },
            { label: 'APY', value: '3.25%', change: null },
            { label: 'Token Supply', value: '100,000', change: null },
            { label: 'Circulating Supply', value: '78,500', change: null },
            { label: '1M Active Addresses', value: '2,890', change: '+5.2%' },
            { label: '1M Transfer Volume', value: '$1,234,560', change: '+4.8%' },
            { label: '1M Transfer Count', value: '5,678', change: '+3.5%' },
            { label: 'Contract Address', value: '0xCRB...12E56', change: null }
        ],
        growth: '+15.8%',
        topics: ['Forest', 'Solar', 'Wind'],
        badges: [
            { label: 'Verified Carbon Credit', icon: <Leaf className="w-4 h-4" />, top: '20%', left: '-8%' },
            { label: 'Climate Impact', icon: <ShieldCheck className="w-4 h-4" />, bottom: '25%', right: '-10%' },
        ],
        assets: [
            {
                name: "Amazon Rainforest Project",
                location: "Brazil",
                roi: "4.5%",
                tokensAvailable: "85k/100k",
                price: "$1.2M",
                image: carbonCreditsImg
            },
            {
                name: "Offshore Wind Farm",
                location: "North Sea",
                roi: "6.8%",
                tokensAvailable: "120k/200k",
                price: "$4.5M",
                image: downloadImg
            }
        ]
    }
];

export default function WhyItMatters() {
    const [activeTab, setActiveTab] = useState(categories[0]);

    return (
        <section
            className="w-full pt-16 pb-20 overflow-hidden relative bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header at the top */}
                <div className="mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative w-fit mb-4 mx-auto"
                    >
                        <h2 className="inline-flex items-center gap-2 text-2xl sm:text-3xl md:text-5xl font-bold uppercase leading-tight pb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                            <span className="text-[#10b981]">Asset</span> <span className="text-black">Spotlights</span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-gray-700 font-medium max-w-4xl mx-auto leading-relaxed"
                        style={{ fontFamily: 'Palanquin, sans-serif' }}
                    >
                        Explore our curated selection of high-potential tokenized assets, from premium real estate <br className="hidden sm:block" />
                        to sustainable natural resources and innovative financial instruments.
                    </motion.p>
                </div>

                {/* Category Tags Bar */}
                <div className="flex flex-wrap justify-center gap-4 mb-16 px-2">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm border backdrop-blur-md
                                ${activeTab.id === cat.id
                                    ? 'bg-[#ecf6ff]/80 text-[#2563eb] border-[#d1e9ff]/50 scale-105 shadow-blue-100/50'
                                    : 'bg-white/60 text-gray-600 border-white/40 hover:bg-white/80'}`}
                            style={{ fontFamily: 'Palanquin, sans-serif' }}
                        >
                            <span className={activeTab.id === cat.id ? 'text-[#2563eb]' : 'text-gray-400'}>
                                {cat.icon}
                            </span>
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Main Content: Two Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Visual Card */}
                    <div className="relative flex justify-center items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab.id}
                                initial={{ opacity: 0, scale: 0.9, x: -20 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.9, x: 20 }}
                                transition={{ duration: 0.5 }}
                                className="relative w-full max-w-[450px] rounded-[2.5rem] overflow-visible shadow-2xl bg-white p-4 pb-24"
                            >
                                <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden relative">
                                    <img
                                        src={activeTab.image}
                                        alt={activeTab.name}
                                        className={`w-full h-full object-cover transition-transform duration-1000 ${activeTab.id === 'real-estate' ? 'scale-120' : 'scale-100'}`}
                                        style={{
                                            objectPosition: ['carbon-credits', 'sports'].includes(activeTab.id) ? '20% center' : 'center center'
                                        }}
                                    />

                                    {/* Overlay Heart Button */}
                                    <button className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                                        <Heart className="w-6 h-6 text-gray-400" />
                                    </button>

                                    {/* Decorative Overlay for premium feel */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                </div>

                                {/* Bottom Bar - Topics & Growth */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    className="absolute bottom-4 left-4 right-4 flex items-center justify-between"
                                >
                                    {/* Topic Tags */}
                                    <div className="flex items-center gap-2">
                                        {activeTab.topics && activeTab.topics.map((topic, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 border border-white/60 shadow-sm"
                                                style={{ fontFamily: 'Palanquin, sans-serif' }}
                                            >
                                                {topic}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Growth Indicator */}
                                    <div className="flex items-center gap-0.5 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/60 shadow-sm">
                                        <TrendingUp className="w-3 h-3 text-[#10b981]" />
                                        <span className="text-sm font-bold text-[#10b981]">{activeTab.growth || '+24.5%'}</span>
                                    </div>
                                </motion.div>

                                {/* Visual Data Badges */}
                                {activeTab.badges.map((badge, idx) => (
                                    <motion.div
                                        key={`${activeTab.id}-badge-${idx}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.5 + (idx * 0.2),
                                            duration: 0.8,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            repeatDelay: 4 + Math.random() * 3
                                        }}
                                        className="absolute z-10 bg-white/40 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/60 flex items-center gap-4 min-w-[220px]"
                                        style={{
                                            top: badge.top,
                                            left: badge.left,
                                            right: badge.right,
                                            bottom: badge.bottom
                                        }}
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center shadow-inner">
                                            <span className="text-[#2563eb] scale-110">{badge.icon}</span>
                                        </div>
                                        <p className="text-sm font-bold text-gray-800 tracking-tight" style={{ fontFamily: 'Palanquin, sans-serif' }}>{badge.label}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Column: Details */}
                    <div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-8"
                            >
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#10b981]/10 text-[#10b981] rounded-lg text-xs font-bold uppercase tracking-wider">
                                        {activeTab.icon}
                                        <span>Market Insight</span>
                                    </div>
                                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                        {activeTab.title}
                                    </h3>
                                    <p className="text-lg text-gray-600 leading-relaxed max-w-xl" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                        {activeTab.description}
                                    </p>
                                </div>

                                {/* Stats Grid - Glassy boxes */}
                                {activeTab.stats && activeTab.stats.length > 0 ? (
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                            {activeTab.stats.map((stat, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                                                    className="bg-white/50 backdrop-blur-md rounded-lg p-2 border border-white/40 shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300"
                                                >
                                                    <p className="text-[8px] text-gray-400 font-medium uppercase tracking-wider mb-0.5">{stat.label}</p>
                                                    <div className="flex items-center gap-1">
                                                        <p className="text-[10px] font-bold text-gray-800" style={{ fontFamily: 'Palanquin, sans-serif' }}>{stat.value}</p>
                                                        {stat.change && (
                                                            <span className="text-[8px] font-semibold text-[#10b981]">{stat.change}</span>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">Key Advantages</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {activeTab.benefits.map((benefit, i) => (
                                                <div key={i} className="flex items-center gap-3 group">
                                                    <div className="w-6 h-6 rounded-full bg-[#10b981] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                                        <ChevronRight className="w-3.5 h-3.5 text-white" />
                                                    </div>
                                                    <span className="text-gray-700 font-medium" style={{ fontFamily: 'Palanquin, sans-serif' }}>{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Asset Cards - Only show if assets exist */}
                                {activeTab.assets && activeTab.assets.length > 0 && (
                                    <div className="space-y-4 pt-4">
                                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">Featured Assets</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {activeTab.assets.map((asset, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.3 + (idx * 0.15), duration: 0.5 }}
                                                    className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                                                >
                                                    {/* Asset Image */}
                                                    <div className="w-full h-24 rounded-xl overflow-hidden mb-3">
                                                        <img
                                                            src={asset.image}
                                                            alt={asset.name}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                    </div>

                                                    {/* Asset Info */}
                                                    <h5 className="font-bold text-gray-900 text-sm mb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                                        {asset.name}
                                                    </h5>
                                                    <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">
                                                        <MapPin className="w-3 h-3" />
                                                        <span>{asset.location}</span>
                                                    </div>

                                                    {/* Stats */}
                                                    <div className="flex items-center justify-between text-xs mb-3">
                                                        <div>
                                                            <p className="text-gray-400">Expected ROI</p>
                                                            <p className="font-bold text-[#10b981]">{asset.roi}</p>
                                                        </div>
                                                        <div className="text-right">
                                                            <p className="text-gray-400">Tokens</p>
                                                            <p className="font-bold text-gray-700">{asset.tokensAvailable}</p>
                                                        </div>
                                                    </div>

                                                    {/* Price & Actions */}
                                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                                        <div>
                                                            <p className="text-[10px] text-gray-400 uppercase">Price</p>
                                                            <p className="text-sm font-bold text-gray-900">{asset.price}</p>
                                                        </div>
                                                        <div className="flex gap-2">
                                                            <button className="px-2 py-1 bg-[#10b981] text-white text-[10px] font-bold rounded-lg hover:bg-[#059669] transition-colors">
                                                                Invest
                                                            </button>
                                                            <button className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-medium rounded-lg hover:bg-gray-200 transition-colors">
                                                                Know More
                                                            </button>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="pt-8">
                                    <button className="flex items-center gap-3 px-8 py-3 bg-transparent border-2 border-[#10b981] text-gray-800 rounded-full font-semibold text-base hover:bg-[#10b981]/5 transition-all duration-300 group">
                                        Explore Marketplace
                                        <div className="w-8 h-8 rounded-full bg-[#10b981] flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <ChevronRight className="w-4 h-4 text-white" />
                                        </div>
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}