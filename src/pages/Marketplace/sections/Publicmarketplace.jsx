import React, { useState } from 'react';
import { Search, SlidersHorizontal, ChevronDown, Flame, Clock, Check, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data
const MOCK_INVESTMENTS = [
    {
        id: 1,
        title: 'UK Property Tokens',
        tokenSymbol: 'UKPT',
        category: 'REAL ESTATE',
        esgScore: 'A+',
        roi: '12% ROI',
        issuerName: 'London Estates',
        issuerLogo: 'https://ui-avatars.com/api/?name=London+Estates&background=0D8ABC&color=fff',
        assetPrice: 'AED 1M',
        tokenPriceETH: '0.015 ETH',
        tokenPriceUSD: '$45 USD',
        availableTokens: 100000,
        totalTokens: 1000000,
        status: 'coming-soon',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        badge: 'COMING SOON',
        launchDate: 'Coming soon',
        propertyType: 'Residential',
        subType: 'Apartment',
        beds: 2,
        city: 'London',
        location: 'Kensington',
        priceVal: 100000,
        tokenPercentage: 10
    },
    {
        id: 2,
        title: 'Dubai Property Tokens',
        tokenSymbol: 'DXB-T',
        category: 'REAL ESTATE',
        esgScore: 'A',
        roi: '15% ROI',
        issuerName: 'Emaar Properties',
        issuerLogo: 'https://ui-avatars.com/api/?name=Emaar+Properties&background=10B981&color=fff',
        assetPrice: 'AED 500k',
        tokenPriceETH: '0.010 ETH',
        tokenPriceUSD: '$30 USD',
        availableTokens: 50000,
        totalTokens: 500000,
        status: 'coming-soon',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea904ac848e?q=80&w=2070&auto=format&fit=crop',
        badge: 'COMING SOON',
        launchDate: 'Coming soon',
        propertyType: 'Residential',
        subType: 'Villa',
        beds: 5,
        city: 'Dubai',
        location: 'Palm Jumeirah',
        priceVal: 2000,
        tokenPercentage: 10
    },
    {
        id: 3,
        title: 'Manhattan Penthouse',
        tokenSymbol: 'NYC-PH',
        category: 'REAL ESTATE',
        esgScore: 'B+',
        roi: '8% ROI',
        issuerName: 'NY Developers',
        issuerLogo: 'https://ui-avatars.com/api/?name=NY+Developers&background=F59E0B&color=fff',
        assetPrice: 'AED 2M',
        tokenPriceETH: '0.050 ETH',
        tokenPriceUSD: '$150 USD',
        availableTokens: 0,
        totalTokens: 1000000,
        status: 'sold-out',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop',
        badge: 'SOLD OUT',
        launchDate: 'Sold Out',
        progress: 100,
        propertyType: 'Residential',
        subType: 'Penthouse',
        beds: 3,
        city: 'New York',
        location: 'Manhattan',
        priceVal: 5000,
        tokenPercentage: 100
    },
];

const FILTER_TABS = ['All', 'Real Estate'];

const PROPERTY_TYPES = ['Residential', 'Commercial', 'Land', 'Multiple Units', 'Off Plan'];
const RESIDENTIAL_SUBTYPES = [
    'Apartment', 'Villa', 'Townhouse', 'Penthouse',
    'Hotel Apartment', 'Residential Building', 'Residential Floor', 'Villa Compound'
];

const BED_OPTIONS = [
    'Studio', '1 Bedroom', '2 Bedrooms', '3 Bedrooms', '4 Bedrooms',
    '5 Bedrooms', '6 Bedrooms', '7 Bedrooms', '8 Bedrooms',
    '9 Bedrooms', '10 Bedrooms', '11 Bedrooms', '12+ Bedrooms'
];

const SORT_OPTIONS = [
    { label: 'Listing Price > Highest to low', value: 'price_desc' },
    { label: 'Listing Price > Lowest to high', value: 'price_asc' },
    { label: 'Percentage Tokens > Lowest first', value: 'tokens_asc' },
    { label: 'Percentage Tokens > Highest first', value: 'tokens_desc' },
];

const FilterPanel = ({ isOpen, onClose, activeTab, filters, setFilters, onApply }) => {
    const [localFilters, setLocalFilters] = useState(filters);
    const [isBedsDropdownOpen, setIsBedsDropdownOpen] = useState(false);

    // Sync local state with props when panel opens
    React.useEffect(() => {
        setLocalFilters(filters);
    }, [filters, isOpen]);

    const updateFilter = (key, value) => {
        setLocalFilters(prev => ({ ...prev, [key]: value }));
    };

    const toggleSubType = (type) => {
        const current = localFilters.selectedSubTypes || [];
        const updated = current.includes(type)
            ? current.filter(t => t !== type)
            : [...current, type];
        updateFilter('selectedSubTypes', updated);
    };

    if (!isOpen || activeTab !== 'Real Estate') return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8 mb-8 overflow-visible z-20 relative"
        >
            <div className="flex flex-col gap-8">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        Real Estate <ChevronDown size={20} />
                    </h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X size={24} />
                    </button>
                </div>

                {/* Property Types */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-4">Property Type</label>
                    <div className="flex flex-wrap gap-2">
                        {PROPERTY_TYPES.map(type => (
                            <button
                                key={type}
                                onClick={() => {
                                    updateFilter('selectedPropertyType', type === localFilters.selectedPropertyType ? '' : type);
                                    if (type !== 'Residential') updateFilter('selectedSubTypes', []);
                                }}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${localFilters.selectedPropertyType === type
                                    ? 'bg-[#0F172A] text-white border-[#0F172A]'
                                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Residential Sub-Types */}
                <AnimatePresence>
                    {localFilters.selectedPropertyType === 'Residential' && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                        >
                            <label className="block text-sm font-bold text-gray-700 mb-4">Residential Type</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                {RESIDENTIAL_SUBTYPES.map(type => (
                                    <button
                                        key={type}
                                        onClick={() => toggleSubType(type)}
                                        className={`px-3 py-2 rounded-lg text-sm text-left transition-colors flex items-center justify-between group ${(localFilters.selectedSubTypes || []).includes(type)
                                            ? 'bg-blue-50 text-blue-700 font-semibold'
                                            : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        {type}
                                        {(localFilters.selectedSubTypes || []).includes(type) && <Check size={14} />}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Beds (Popover style) */}
                    <div className="relative">
                        <label className="block text-sm font-bold text-gray-700 mb-2">Beds</label>
                        <button
                            onClick={() => setIsBedsDropdownOpen(!isBedsDropdownOpen)}
                            className="w-full sm:w-60 flex items-center justify-between bg-white border border-gray-200 text-gray-700 text-sm font-medium py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <span className="truncate mr-2">
                                {localFilters.minBeds === 'Any' && localFilters.maxBeds === 'Any'
                                    ? 'Any'
                                    : `${localFilters.minBeds} - ${localFilters.maxBeds}`}
                            </span>
                            <ChevronDown size={16} className="flex-shrink-0" />
                        </button>

                        {/* Popover Content */}
                        <AnimatePresence>
                            {isBedsDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="absolute top-full left-0 mt-2 w-full sm:w-[500px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6 z-50 flex flex-col sm:flex-row gap-4"
                                >
                                    <div className="flex-1">
                                        <label className="block text-xs font-bold text-gray-500 mb-1.5">Minimum Bedrooms</label>
                                        <div className="relative">
                                            <select
                                                className="w-full appearance-none bg-white border border-gray-200 text-gray-900 py-2.5 px-3 pr-8 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                                                value={localFilters.minBeds}
                                                onChange={(e) => updateFilter('minBeds', e.target.value)}
                                            >
                                                <option value="Any">Any</option>
                                                <option value="Studio">Studio</option>
                                                {BED_OPTIONS.filter(opt => opt !== 'Studio').map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                            </select>
                                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>
                                    <div className="hidden sm:flex items-center pt-5 text-gray-400">-</div>
                                    <div className="flex-1">
                                        <label className="block text-xs font-bold text-gray-500 mb-1.5">Maximum Bedrooms</label>
                                        <div className="relative">
                                            <select
                                                className="w-full appearance-none bg-white border border-gray-200 text-gray-900 py-2.5 px-3 pr-8 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                                                value={localFilters.maxBeds}
                                                onChange={(e) => updateFilter('maxBeds', e.target.value)}
                                            >
                                                <option value="Any">Any</option>
                                                <option value="Studio">Studio</option>
                                                {BED_OPTIONS.filter(opt => opt !== 'Studio').map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                            </select>
                                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* City & Location */}
                    <div>
                        <div className="flex gap-4 mb-2">
                            <label className="text-sm font-bold text-gray-700 w-1/3">City</label>
                            <label className="text-sm font-bold text-gray-700 w-2/3">Location</label>
                        </div>
                        <div className="flex w-full bg-white border border-gray-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
                            <div className="relative w-1/3 border-r border-gray-200">
                                <select
                                    className="w-full appearance-none bg-white text-gray-900 py-3 px-4 pr-8 text-sm focus:outline-none"
                                    value={localFilters.city}
                                    onChange={(e) => updateFilter('city', e.target.value)}
                                >
                                    <option value="">Any</option>
                                    <option value="Dubai">Dubai</option>
                                    <option value="London">London</option>
                                    <option value="New York">New York</option>
                                </select>
                                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>
                            <div className="w-2/3">
                                <input
                                    type="text"
                                    placeholder="Enter Neighborhood or Building"
                                    className="w-full h-full px-4 text-sm text-gray-900 focus:outline-none placeholder-gray-400"
                                    value={localFilters.location}
                                    onChange={(e) => updateFilter('location', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end pt-4 border-t border-gray-50 mt-8">
                    <button
                        onClick={() => {
                            setFilters(localFilters);
                            onApply(localFilters);
                            onClose();
                        }}
                        className="px-8 py-3 bg-[#10B981] hover:bg-[#059669] text-white font-bold rounded-lg transition-colors shadow-lg shadow-green-100"
                    >
                        Apply
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default function Publicmarketplace() {
    const [activeTab, setActiveTab] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [sortBy, setSortBy] = useState('price_desc'); // Default sort

    // Filter State
    const [filters, setFilters] = useState({
        minBeds: 'Any',
        maxBeds: 'Any',
        propertyValueRange: [0, 4000000],
        selectedPropertyType: '',
        selectedSubTypes: [],
        city: '',
        location: ''
    });

    const handleApplyFilters = (newFilters) => {
        setFilters(newFilters);
    };

    // Filter logic
    const filteredInvestments = MOCK_INVESTMENTS.filter((item) => {
        // Tab Filter
        const matchesTab = activeTab === 'All' ||
            (activeTab === 'Real Estate' && item.category === 'REAL ESTATE');

        // Search Query
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());

        // Advanced Filters (Only apply if active tab is Real Estate)
        let matchesAdvanced = true;
        if (activeTab === 'Real Estate') {
            // Property Type
            if (filters.selectedPropertyType && item.propertyType !== filters.selectedPropertyType) {
                matchesAdvanced = false;
            }
            // Sub Type
            if (matchesAdvanced && filters.selectedSubTypes.length > 0 && !filters.selectedSubTypes.includes(item.subType)) {
                matchesAdvanced = false;
            }
            // City
            if (matchesAdvanced && filters.city && item.city !== filters.city) {
                matchesAdvanced = false;
            }
            // Location
            if (matchesAdvanced && filters.location && !item.location.toLowerCase().includes(filters.location.toLowerCase())) {
                matchesAdvanced = false;
            }
            // Beds
            if (matchesAdvanced && (filters.minBeds !== 'Any' || filters.maxBeds !== 'Any')) {
                const itemBeds = item.beds || 0;
                let min = 0;
                let max = 100;

                if (filters.minBeds !== 'Any') {
                    if (filters.minBeds === 'Studio') min = 0;
                    else min = parseInt(filters.minBeds);
                }

                if (filters.maxBeds !== 'Any') {
                    if (filters.maxBeds === 'Studio') max = 0;
                    else if (filters.maxBeds === '12+ Bedrooms') max = 100;
                    else max = parseInt(filters.maxBeds);
                }

                if (itemBeds < min || itemBeds > max) {
                    matchesAdvanced = false;
                }
            }
        }

        return matchesTab && matchesSearch && matchesAdvanced;
    }).sort((a, b) => {
        switch (sortBy) {
            case 'price_desc':
                return (b.priceVal || 0) - (a.priceVal || 0);
            case 'price_asc':
                return (a.priceVal || 0) - (b.priceVal || 0);
            case 'tokens_desc':
                return (b.tokenPercentage || 0) - (a.tokenPercentage || 0);
            case 'tokens_asc':
                return (a.tokenPercentage || 0) - (b.tokenPercentage || 0);
            default:
                return 0;
        }
    });

    return (
        <section className="w-full py-12 md:py-20 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#0F172A]" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        Marketplace <span className="text-gray-400 font-normal">/ All Investments</span>
                    </h1>
                </div>

                {/* Controls Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">

                    {/* Left: Filters */}
                    <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                        {FILTER_TABS.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => {
                                    setActiveTab(tab);
                                    if (tab === 'Real Estate') setShowFilters(true);
                                    else setShowFilters(false);
                                }}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === tab
                                    ? 'bg-white text-gray-900 border border-gray-200 shadow-sm'
                                    : 'bg-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`ml-2 flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-lg shadow-gray-200 ${showFilters ? 'bg-[#0F172A] text-white' : 'bg-white text-gray-700 border border-gray-200'
                                }`}
                        >
                            <SlidersHorizontal size={16} />
                            Filters
                        </button>
                    </div>

                    {/* Right: Search & Sort */}
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full sm:w-64 pl-11 pr-4 py-2.5 rounded-full border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 text-sm transition-all"
                            />
                        </div>
                        <div className="relative">
                            <button
                                onClick={() => setIsSortOpen(!isSortOpen)}
                                className="w-full sm:w-auto flex items-center justify-between gap-3 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                            >
                                <span>Sort by</span>
                                <ChevronDown size={16} />
                            </button>

                            {/* Sort Dropdown */}
                            <AnimatePresence>
                                {isSortOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute right-0 top-full mt-2 w-64 bg-slate-50 rounded-xl shadow-xl border border-gray-100 py-2 z-30"
                                    >
                                        <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                            Sort by
                                        </div>
                                        {SORT_OPTIONS.map((option) => (
                                            <button
                                                key={option.value}
                                                onClick={() => {
                                                    setSortBy(option.value);
                                                    setIsSortOpen(false);
                                                }}
                                                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${sortBy === option.value ? 'font-bold text-blue-600' : 'text-gray-700'
                                                    }`}
                                            >
                                                {option.label}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Filter Panel */}
                <AnimatePresence>
                    {showFilters && (
                        <FilterPanel
                            isOpen={showFilters}
                            onClose={() => setShowFilters(false)}
                            activeTab={activeTab === 'Real Estate' ? 'Real Estate' : 'Real Estate'} // Always show if toggled on, but visual logic might prefer binding to tab
                            filters={filters}
                            setFilters={setFilters}
                            onApply={handleApplyFilters}
                        />
                    )}
                </AnimatePresence>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredInvestments.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="group bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                        >
                            {/* Image Section */}
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Top Left Overlays */}
                                <div className="absolute top-4 left-4 flex flex-col gap-1 items-start">
                                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-gray-800 shadow-sm border border-gray-100">
                                        {item.category}
                                    </div>
                                    <div className="bg-[#10B981]/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold text-white shadow-sm flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                        ESG Score: {item.esgScore}
                                    </div>
                                </div>

                                {/* Top Right Overlay */}
                                <div className="absolute top-4 right-4">
                                    <div className="bg-[#0F172A]/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm border border-gray-700">
                                        {item.roi}
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-5 flex-1 flex flex-col">
                                {/* Issuer Info */}
                                <div className="flex items-center gap-2 mb-3 border-b border-gray-50 pb-3">
                                    <img src={item.issuerLogo} alt={item.issuerName} className="w-6 h-6 rounded-full" />
                                    <span className="text-xs font-medium text-gray-500">{item.issuerName}</span>
                                </div>

                                {/* Title */}
                                <div className="mb-4">
                                    <h3 className="text-base font-bold text-[#0F172A] leading-tight mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-gray-400 font-medium">({item.tokenSymbol})</p>
                                </div>

                                {/* Metrics */}
                                <div className="space-y-3 mb-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-gray-500 uppercase font-semibold">Asset Price</span>
                                        <span className="text-sm font-bold text-gray-900">{item.assetPrice}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-gray-500 uppercase font-semibold">Token Price</span>
                                        <div className="text-right">
                                            <span className="text-sm font-bold text-gray-900 block">{item.tokenPriceETH}</span>
                                            <span className="text-[10px] text-gray-400 font-medium">({item.tokenPriceUSD})</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-xs text-gray-500 uppercase font-semibold">Available Tokens</span>
                                            <span className="text-xs font-bold text-gray-900">{item.availableTokens.toLocaleString()} / {item.totalTokens.toLocaleString()}</span>
                                        </div>
                                        <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                                            <div
                                                className={`h-full rounded-full ${item.availableTokens === 0 ? 'bg-gray-400' : 'bg-blue-600'}`}
                                                style={{ width: `${(item.availableTokens / item.totalTokens) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Action */}
                                <div className="mt-auto pt-4 border-t border-gray-50">
                                    <button className="w-full py-2.5 rounded-lg bg-[#0F172A] text-white text-sm font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
