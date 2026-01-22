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
import Image from '../../../components/Image'; // Import our AVIF-compatible Image component

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
                description: "Offers investors tokenized ownership of Renaissance-era masterpieces.",
                image: "/assets/Images/art2.jpg"
            },
            {
                name: "Modern Abstract Series",
                location: "London, UK",
                roi: "12.5%",
                tokensAvailable: "500/1,500",
                price: "$1,850,000",
                description: "A curated series of modern abstract art with high appreciation potential.",
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
            { label: 'Commercial Real Estate', icon: <Building2 className="w-4 h-4" />, top: '10%', left: '-10%' },
            { label: 'New York, USA', icon: <MapPin className="w-4 h-4" />, top: '35%', right: '-15%' },
            { label: '1,000 Total Tokens', icon: <Layers className="w-4 h-4" />, top: '60%', left: '-12%' },
            { label: '750 Available', icon: <CheckCircle2 className="w-4 h-4" />, top: '85%', right: '-10%' },
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
        title: "Carbon Credits",
        cardTitle: "Wind Related Assets",
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
                name: "Solar Energy Farm",
                location: "California, USA",
                roi: "7.2%",
                tokensAvailable: "120k/200k",
                price: "$4.5M",
                image: "/assets/Images/SOLAR-FARM.jpg"
            }
        ]
    }
];

export default function WhyItMatters() {
    const [activeTab, setActiveTab] = useState(categories[0]);

    return (
        <section
            className="w-full py-10 overflow-hidden relative bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header at the top */}
                <div className="mb-6 text-center">
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
                <div className="flex flex-wrap justify-center gap-4 mb-8 px-2">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat)}
                            className="group flex items-center gap-1 transition-transform duration-300 hover:scale-[1.02]"
                            style={{ fontFamily: 'Palanquin, sans-serif' }}
                        >
                            {/* Icon Circle - Straight Right Edge */}
                            <div className={`w-8 h-8 rounded-l-full rounded-r-none flex items-center justify-center transition-all duration-300 border-r-0 shadow-2xl
                                ${activeTab.id === cat.id
                                    ? 'bg-[#10b981] text-white'
                                    : 'bg-white text-gray-400 group-hover:text-gray-600'}`}>
                                {React.cloneElement(cat.icon, { className: "w-4 h-4" })}
                            </div>

                            {/* Text Pill - Straight Left Edge */}
                            <div className={`px-4 py-1.5 rounded-r-full rounded-l-none text-sm font-semibold transition-all duration-300 border-l-0 shadow-2xl flex items-center h-8
                                ${activeTab.id === cat.id
                                    ? 'bg-black text-white'
                                    : 'bg-white text-gray-600'}`}>
                                {cat.name}
                            </div>
                        </button>
                    ))}
                </div>

                {/* Terms & Conditions - Centered */}
                <div className="text-center mb-8 px-4">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em] mb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        Terms & Conditions
                    </h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        Copym does not provide brokerage services, investment banking services, underwriting services, investment recommendations, or investment advice to any person. Copym operates as a technology platform focused on distributed ledger technology to improve efficiency, accessibility, and transparency in financial technologies.
                    </p>
                </div>

                {/* Main Content: Two Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* Left Column: Visual Card - Aligned Top */}
                    <div className="relative flex justify-center items-center mt-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab.id}
                                initial={{ opacity: 0, scale: 0.9, x: -20 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.9, x: 20 }}
                                transition={{ duration: 0.5 }}
                                className="relative w-full max-w-[450px] rounded-[2.5rem] overflow-visible shadow-2xl bg-white p-3"
                            >
                                <div className="w-full aspect-[4/4.5] rounded-[2rem] overflow-hidden relative">
                                    <Image
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

                                {/* Bottom Bar - Title, Price & Growth matches reference */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    className="px-2 pt-4 pb-2"
                                >
                                    <div className="flex flex-col gap-0.5">
                                        {/* Title Row */}
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
                                                <Image
                                                    src="/assets/copym/png/Copym-05.avif"
                                                    alt="Copym"
                                                    className="w-full h-full object-cover scale-[1.7]"
                                                />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                                {activeTab.cardTitle || activeTab.title}
                                            </h3>
                                        </div>

                                        {/* Price & Graph Row */}
                                        <div className="flex items-center justify-between pl-10 mb-4">
                                            <p className="text-xs text-gray-500 font-medium" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                                $20 per share
                                            </p>

                                            {/* Growth Graph */}
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4">
                                                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full stroke-blue-600 stroke-2">
                                                        <path d="M3 17l6-6 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <span className="text-xs font-bold text-gray-900">{activeTab.growth || '+5%'}</span>
                                            </div>
                                        </div>

                                        {/* New Stats Row - Populated with Real Data */}
                                        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
                                            {/* Contract Address */}
                                            <div className="border border-gray-200 rounded-xl p-2 min-w-[110px] flex-1">
                                                <p className="text-[9px] text-gray-400 font-bold whitespace-nowrap mb-1">Contract Address</p>
                                                <p className="text-[10px] font-bold text-gray-800 font-mono truncate max-w-[100px]">
                                                    {activeTab.stats?.find(s => s.label === 'Contract Address')?.value || '0x...'}
                                                </p>
                                            </div>
                                            {/* Total Asset Value */}
                                            <div className="border border-gray-200 rounded-xl p-2 min-w-[110px] flex-1">
                                                <p className="text-[9px] text-gray-400 font-bold whitespace-nowrap mb-1">Total Asset Value</p>
                                                <div className="flex items-center gap-1.5">
                                                    <p className="text-[10px] font-bold text-gray-800">
                                                        {activeTab.stats?.find(s => s.label === 'Total Asset Value')?.value || '$0'}
                                                    </p>
                                                    <span className="text-[8px] font-bold text-[#10b981] bg-[#10b981]/10 px-1 rounded">
                                                        {activeTab.stats?.find(s => s.label === 'Total Asset Value')?.change || ''}
                                                    </span>
                                                </div>
                                            </div>
                                            {/* APY */}
                                            <div className="border border-gray-200 rounded-xl p-2 min-w-[70px]">
                                                <p className="text-[9px] text-gray-400 font-bold whitespace-nowrap mb-1">APY</p>
                                                <p className="text-[10px] font-bold text-[#10b981]">
                                                    {activeTab.stats?.find(s => s.label === 'APY')?.value || '0%'}
                                                </p>
                                            </div>
                                        </div>
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
                                className="space-y-5"
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

                                {/* Stats Grid Removed as per request (metrics moved to left card) */}

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
                                                    className="bg-white rounded-[2rem] shadow-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                                                >
                                                    {/* Top Image Area - Reduced Height */}
                                                    <div className="relative h-40 w-full">
                                                        <img
                                                            src={asset.image}
                                                            alt={asset.name}
                                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                        />
                                                        {/* Logo Badge - Overlapping - Simplified */}
                                                        <div className="absolute -bottom-8 left-6 w-16 h-16 bg-white rounded-full shadow-lg z-10 mx-auto flex items-center justify-center overflow-hidden">
                                                            <Image
                                                                src="/assets/copym/png/Copym-05.avif"
                                                                alt="Copym"
                                                                className="w-full h-full object-cover scale-[1.3]"
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Content Area - Reduced Padding */}
                                                    <div className="pt-10 px-6 pb-5">
                                                        {/* Header Row: Title & Price - Smaller Text */}
                                                        <div className="flex flex-col mb-2">
                                                            <div className="flex items-baseline justify-end gap-1.5 self-end mb-1">
                                                                <p className="font-bold text-gray-900 text-xs leading-tight">{asset.price.replace('$', '')}</p>
                                                                <div className="flex items-center gap-1">
                                                                    <span className="text-[10px] text-gray-400 font-medium tracking-wide">TVT</span>
                                                                    <span className="inline-flex items-center justify-center w-3 h-3 rounded-full border border-gray-300 text-[8px] text-gray-400">i</span>
                                                                </div>
                                                            </div>
                                                            <h5 className="font-bold text-base text-gray-900 leading-tight whitespace-nowrap" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                                                {asset.name}
                                                            </h5>
                                                        </div>

                                                        {/* Description - Reduced Margin & Size */}
                                                        <p className="text-gray-500 text-[11px] font-medium leading-relaxed mb-4 line-clamp-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                                            {asset.description || "Premium investment opportunity with stable returns and high growth potential."}
                                                        </p>

                                                        {/* Footer Row: Tags */}
                                                        <div className="flex flex-wrap gap-2.5">
                                                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ecf6ff] text-[#2563eb] text-[10px] font-bold transition-colors hover:bg-blue-100">
                                                                {React.cloneElement(activeTab.icon, { className: "w-3 h-3" })}
                                                                {activeTab.name}
                                                            </span>
                                                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-[10px] font-bold transition-colors hover:bg-gray-200">
                                                                <MapPin className="w-3 h-3" />
                                                                {asset.location.split(',').pop().trim()}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="pt-8 flex flex-col items-center">
                                    <button className="flex items-center gap-3 px-8 py-3 bg-transparent border-2 border-[#10b981] text-gray-800 rounded-full font-semibold text-base hover:bg-[#10b981]/5 transition-all duration-300 group">
                                        Explore Marketplace
                                        <div className="w-8 h-8 rounded-full bg-[#10b981] flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <ChevronRight className="w-4 h-4 text-white" />
                                        </div>
                                    </button>

                                    {/* Terms & Conditions Disclaimer */}
                                    <div className="mt-12 max-w-4xl mx-auto px-4">
                                        <h4
                                            className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 text-center"
                                            style={{ fontFamily: 'Palanquin, sans-serif' }}
                                        >
                                            Terms & Conditions
                                        </h4>
                                        <p
                                            className="text-[10px] sm:text-xs text-gray-400 leading-relaxed font-medium text-center"
                                            style={{ fontFamily: 'Palanquin, sans-serif' }}
                                        >
                                            Copym does not provide brokerage services, investment banking services, underwriting services,
                                            investment recommendations, or investment advice to any person. Copym operates as a technology
                                            platform focused on distributed ledger technology to improve efficiency, accessibility, and
                                            transparency in financial technologies.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section >
    );
}