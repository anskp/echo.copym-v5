import React, { useState, useEffect } from 'react';
import { Search, SlidersHorizontal, ChevronDown, Flame, Clock, Check, X, MapPin, BadgeCheck } from 'lucide-react';
// ... existing imports

// ... inside the component loop ...

import { motion, AnimatePresence } from 'framer-motion';

// Mock Data
const MOCK_INVESTMENTS = [
    {
        id: 1,
        title: 'UK Property Tokens',
        tokenSymbol: 'UKPT',
        category: 'REAL ESTATE',
        esgScore: 'A+',
        roi: '12%',
        cagr: '15.50%',
        issuerName: 'London Estates',
        issuerLogo: 'https://ui-avatars.com/api/?name=London+Estates&background=0D8ABC&color=fff',
        assetPrice: 'AED 1M',
        tokenPriceETH: '0.015 ETH',
        tokenPriceUSD: '$45 USD',
        availableTokens: 100000,
        totalTokens: 1000000,
        status: 'coming-soon',
        image: '/assets/publicm/villa.jpeg',
        badge: 'COMING SOON',
        launchDate: 'Coming soon',
        propertyType: 'Residential',
        investmentStrategy: 'Capital Growth',
        beds: 2,
        country: 'UK',
        city: 'London',
        location: 'Kensington',
        completionStatus: 'Ready',
        priceVal: 100000,
        tokenPercentage: 100
    },
    {
        id: 2,
        title: 'Dubai Luxury Villa',
        tokenSymbol: 'DLXV',
        category: 'REAL ESTATE',
        esgScore: 'B',
        roi: '10%',
        cagr: '12.00%',
        issuerName: 'Emaar Properties',
        issuerLogo: 'https://ui-avatars.com/api/?name=Emaar&background=3B82F6&color=fff',
        assetPrice: 'AED 12M',
        tokenPriceETH: '0.25 ETH',
        tokenPriceUSD: '$750 USD',
        availableTokens: 500000,
        totalTokens: 2000000,
        status: 'open',
        image: '/assets/publicm/vilaa2.jpeg',
        badge: 'OPEN',
        launchDate: 'Live Now',
        progress: 75,
        propertyType: 'Residential',
        investmentStrategy: 'High-Yield',
        beds: 5,
        country: 'UAE',
        city: 'Dubai',
        location: 'Downtown',
        completionStatus: 'Under Construction',
        priceVal: 200000,
        tokenPercentage: 100
    },
    {
        id: 3,
        title: 'New York Penthouse',
        tokenSymbol: 'NYPH',
        category: 'REAL ESTATE',
        esgScore: 'A',
        roi: '15%',
        cagr: '18.50%',
        issuerName: 'NYC Realty',
        issuerLogo: 'https://ui-avatars.com/api/?name=NYC&background=6366F1&color=fff',
        assetPrice: '$5M',
        tokenPriceETH: '1.5 ETH',
        tokenPriceUSD: '$4,500 USD',
        availableTokens: 0,
        totalTokens: 1000000,
        status: 'sold-out',
        image: '/assets/publicm/penthouse.jpeg',
        badge: 'SOLD OUT',
        launchDate: 'Sold Out',
        progress: 100,
        propertyType: 'Residential',
        investmentStrategy: 'Prime',
        beds: 3,
        country: 'USA',
        city: 'New York',
        location: 'Manhattan',
        completionStatus: 'Ready',
        priceVal: 5000,
        tokenPercentage: 100
    },
];

const MOCK_LAND_ITEMS = [
    {
        id: 4,
        title: 'Development Plot',
        tokenSymbol: 'DEV-PLT',
        category: 'REAL ESTATE',
        esgScore: 'N/A',
        roi: '20%',
        cagr: '25.00%',
        issuerName: 'Nakheel',
        issuerLogo: 'https://ui-avatars.com/api/?name=Nakheel&background=10B981&color=fff',
        assetPrice: 'AED 5M',
        tokenPriceETH: '0.1 ETH',
        tokenPriceUSD: '$300 USD',
        availableTokens: 100000,
        totalTokens: 1000000,
        status: 'coming-soon',
        image: '/assets/publicm/plot.jpeg',
        badge: 'NEW',
        launchDate: 'Coming soon',
        propertyType: 'Land',
        investmentStrategy: 'Fix n Flip',
        country: 'UAE',
        city: 'Dubai',
        location: 'JVC',
        completionStatus: 'Off-Plan',
        priceVal: 10000,
        tokenPercentage: 0
    }
];

MOCK_INVESTMENTS.push(...MOCK_LAND_ITEMS);

const FILTER_TABS = ['All', 'Real Estate', 'Commodities', 'Arts', 'Sports', 'Carbon Credits'];

const PROPERTY_TYPES = ['All', 'Residential', 'Commercial', 'Land', 'Multi-Units'];
const INVESTMENT_STRATEGIES = ['Capital Growth', 'High-Yield', 'Prime', 'Fix n Flip'];
const COMPLETION_STATUSES = ['All', 'Ready', 'Under Construction', 'Off-Plan'];

const BED_OPTIONS = ['1', '2', '3', '4', '5', '6'];

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

    const toggleInvestmentStrategy = (strategy) => {
        const current = localFilters.selectedInvestmentStrategies || [];
        const updated = current.includes(strategy)
            ? current.filter(s => s !== strategy)
            : [...current, strategy];
        updateFilter('selectedInvestmentStrategies', updated);
    };

    if (!isOpen || activeTab !== 'Real Estate') return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-4 md:p-5 mb-8 overflow-visible z-20 relative"
        >
            <div className="flex flex-col gap-4">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        Real Estate <ChevronDown size={20} />
                    </h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X size={24} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    {/* Left Column */}
                    <div className="flex flex-col gap-4">
                        {/* Property Types */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-3">Property Type</label>
                            <div className="flex flex-wrap gap-2">
                                {PROPERTY_TYPES.map(type => (
                                    <button
                                        key={type}
                                        onClick={() => {
                                            updateFilter('selectedPropertyType', type === localFilters.selectedPropertyType ? '' : type);
                                            if (type !== localFilters.selectedPropertyType) updateFilter('selectedInvestmentStrategies', []);
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

                        {/* Investment Strategies - Shows for ALL property types */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-3">
                                Investment Strategy
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                {INVESTMENT_STRATEGIES.map(strategy => (
                                    <button
                                        key={strategy}
                                        onClick={() => toggleInvestmentStrategy(strategy)}
                                        className={`px-3 py-2 rounded-lg text-sm text-left transition-colors flex items-center justify-between group ${(localFilters.selectedInvestmentStrategies || []).includes(strategy)
                                            ? 'bg-blue-50 text-blue-700 font-semibold'
                                            : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        <span className="truncate mr-1">{strategy}</span>
                                        {(localFilters.selectedInvestmentStrategies || []).includes(strategy) && <Check size={14} className="flex-shrink-0" />}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-4">
                        {/* Completion Status - Shows for Residential, Commercial, Multi-Units (NOT Land) */}
                        <AnimatePresence>
                            {(localFilters.selectedPropertyType === 'Residential' || localFilters.selectedPropertyType === 'Commercial' || localFilters.selectedPropertyType === 'Multi-Units') && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                >
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Completion Status</label>
                                    <div className="flex flex-wrap gap-2">
                                        {COMPLETION_STATUSES.map(status => (
                                            <button
                                                key={status}
                                                onClick={() => updateFilter('completionStatus', status)}
                                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${localFilters.completionStatus === status
                                                    ? 'bg-[#0F172A] text-white border-[#0F172A]'
                                                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                                                    }`}
                                            >
                                                {status}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Location Filters - Shows for ALL property types */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-3">Location</label>
                            <div className="flex flex-col sm:flex-row gap-2">
                                {/* Country */}
                                <div className="relative flex-1">
                                    <select
                                        className="w-full appearance-none bg-white border border-gray-200 text-gray-900 py-2.5 px-3 pr-8 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={localFilters.country || ''}
                                        onChange={(e) => updateFilter('country', e.target.value)}
                                    >
                                        <option value="">Country</option>
                                        <option value="UK">UK</option>
                                        <option value="UAE">UAE</option>
                                        <option value="USA">USA</option>
                                    </select>
                                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                </div>

                                {/* City */}
                                <div className="relative flex-1">
                                    <select
                                        className="w-full appearance-none bg-white border border-gray-200 text-gray-900 py-2.5 px-3 pr-8 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        value={localFilters.city || ''}
                                        onChange={(e) => updateFilter('city', e.target.value)}
                                    >
                                        <option value="">City</option>
                                        <option value="Dubai">Dubai</option>
                                        <option value="London">London</option>
                                        <option value="New York">New York</option>
                                    </select>
                                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                </div>

                                {/* Search */}
                                <div className="relative flex-[1.5]">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Search size={14} className="text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                                        value={localFilters.location || ''}
                                        onChange={(e) => updateFilter('location', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Bedrooms - Only for Residential */}
                        {localFilters.selectedPropertyType === 'Residential' && (
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1.5">Bedrooms</label>
                                <button
                                    onClick={() => setIsBedsDropdownOpen(!isBedsDropdownOpen)}
                                    className="w-full flex items-center justify-between bg-white border border-gray-200 text-gray-700 text-sm font-medium py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <span className="truncate mr-2">
                                        {localFilters.minBeds === 'Any' && localFilters.maxBeds === 'Any'
                                            ? 'Any'
                                            : `${localFilters.minBeds} - ${localFilters.maxBeds}`}
                                    </span>
                                    <ChevronDown size={16} className="flex-shrink-0" />
                                </button>
                                <AnimatePresence>
                                    {isBedsDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute top-full left-0 mt-2 w-full sm:w-[480px] bg-white rounded-xl shadow-2xl border border-gray-100 p-5 z-50 flex flex-col sm:flex-row gap-4"
                                        >
                                            <div className="flex-1">
                                                <label className="block text-xs font-bold text-gray-500 mb-1.5">Min Bedrooms</label>
                                                <div className="relative">
                                                    <select
                                                        className="w-full appearance-none bg-white border border-gray-200 text-gray-900 py-2.5 px-3 pr-8 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                                                        value={localFilters.minBeds}
                                                        onChange={(e) => updateFilter('minBeds', e.target.value)}
                                                    >
                                                        <option value="Any">Any</option>
                                                        {BED_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                                    </select>
                                                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                                </div>
                                            </div>
                                            <div className="hidden sm:flex items-center pt-5 text-gray-400">-</div>
                                            <div className="flex-1">
                                                <label className="block text-xs font-bold text-gray-500 mb-1.5">Max Bedrooms</label>
                                                <div className="relative">
                                                    <select
                                                        className="w-full appearance-none bg-white border border-gray-200 text-gray-900 py-2.5 px-3 pr-8 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                                                        value={localFilters.maxBeds}
                                                        onChange={(e) => updateFilter('maxBeds', e.target.value)}
                                                    >
                                                        <option value="Any">Any</option>
                                                        {BED_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                                    </select>
                                                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end pt-4 border-t border-gray-50 mt-4">
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
    const [isBedsDropdownOpen, setIsBedsDropdownOpen] = useState(false);
    const [sortBy, setSortBy] = useState('price_desc'); // Default sort

    // Filter State
    const [filters, setFilters] = useState({
        minBeds: 'Any',
        maxBeds: 'Any',
        propertyValueRange: [0, 4000000],
        selectedPropertyType: '',
        selectedInvestmentStrategies: [],
        country: '',
        city: '',
        location: '',
        completionStatus: 'All'
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
            if (filters.selectedPropertyType && filters.selectedPropertyType !== 'All' && item.propertyType !== filters.selectedPropertyType) {
                matchesAdvanced = false;
            }
            // Investment Strategy
            if (matchesAdvanced && filters.selectedInvestmentStrategies.length > 0 && !filters.selectedInvestmentStrategies.includes(item.investmentStrategy)) {
                matchesAdvanced = false;
            }
            // Country
            if (matchesAdvanced && filters.country && item.country !== filters.country) {
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
            // Completion Status
            if (matchesAdvanced && filters.completionStatus !== 'All' && item.completionStatus !== filters.completionStatus) {
                matchesAdvanced = false;
            }
            // Beds
            if (matchesAdvanced && (filters.minBeds !== 'Any' || filters.maxBeds !== 'Any')) {
                const itemBeds = item.beds || 0;
                let min = 0;
                let max = 100;

                if (filters.minBeds !== 'Any') {
                    min = parseInt(filters.minBeds);
                }

                if (filters.maxBeds !== 'Any') {
                    max = parseInt(filters.maxBeds);
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

                {/* Controls Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">

                    {/* Left: Filters */}
                    <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                        {FILTER_TABS.map((tab) => {
                            const isClickable = tab === 'All' || tab === 'Real Estate';
                            return (
                                <button
                                    key={tab}
                                    disabled={!isClickable}
                                    onClick={() => {
                                        if (isClickable) {
                                            setActiveTab(tab);
                                            if (tab === 'Real Estate') setShowFilters(true);
                                            else setShowFilters(false);
                                        }
                                    }}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === tab
                                        ? 'bg-white text-gray-900 border border-gray-200 shadow-sm'
                                        : isClickable
                                            ? 'bg-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                                            : 'bg-transparent text-gray-900 cursor-not-allowed'
                                        }`}
                                >
                                    {tab}
                                </button>
                            );
                        })}
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
                                className="w-full sm:w-64 pl-11 pr-4 py-2.5 rounded-full border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 text-sm text-gray-900 placeholder-gray-400 transition-all"
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
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-[320px] border border-gray-100"
                        >
                            {/* Sliding Container */}
                            <div className="absolute inset-0 flex w-[200%] transition-transform duration-500 ease-in-out -translate-x-0 group-hover:-translate-x-1/2">

                                {/* 1. Initial State (Full Image View) */}
                                <div className="w-1/2 h-full relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Gradient Overlay for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                    {/* Top Badges */}
                                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                                        <div className="bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-md text-[9px] font-extrabold uppercase tracking-widest text-[#0F172A] shadow-lg">
                                            {item.category}
                                        </div>
                                        <img src="/assets/publicm/verify.png" alt="Verified" className="h-[36px] w-auto object-contain drop-shadow-lg" />
                                    </div>

                                    <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
                                        <div className="bg-[#0F172A] px-2 py-0.5 rounded-md text-white shadow-lg border border-gray-700/50 flex items-center gap-1">
                                            <span className="text-[10px] font-bold text-white">{item.roi}</span>
                                            <span className="text-[8px] font-bold text-gray-400 tracking-wider uppercase">PROJECTED ROI</span>
                                        </div>
                                        <div className="bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-md text-[9px] font-bold text-[#0F172A] shadow-lg border border-white/20">
                                            {item.cagr} CAGR
                                        </div>
                                    </div>

                                    {/* Bottom Info on Cover */}
                                    <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                                        <div className="flex items-center gap-1.5 mb-1">
                                            <img src={item.issuerLogo} alt={item.issuerName} className="w-5 h-5 rounded-full border border-white/30" />
                                            <span className="text-[10px] font-medium text-gray-200">{item.issuerName}</span>
                                        </div>
                                        <h3 className="text-lg font-bold leading-tight mb-0.5 font-palanquin">{item.title}</h3>
                                        <p className="text-xs text-gray-300 font-medium mb-3">{item.tokenSymbol}</p>

                                        <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-wide text-gray-400">
                                            <span>DETAILS</span>
                                            <svg className="w-3 h-3 animate-bounce-x" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Hover State (Split View) - Occupies right half of the 200% width container */}
                                <div className="w-1/2 h-full flex">
                                    {/* Left side of the split (Retained Image Strip) */}
                                    <div className="w-[35%] h-full relative overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover scale-150"
                                        />
                                        <div className="absolute inset-0 bg-[#0F172A]/40 backdrop-blur-[2px]"></div>
                                    </div>

                                    {/* Right side of the split (Details Panel) */}
                                    <div className="w-[65%] h-full bg-white p-4 flex flex-col justify-between">
                                        <div>
                                            <h4 className="text-sm font-bold text-[#0F172A] leading-tight mb-2 line-clamp-2">{item.title}</h4>
                                            <div className="flex flex-wrap gap-1.5 mb-3">
                                                <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[9px] font-bold text-gray-600">{item.investmentStrategy}</span>
                                                <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[9px] font-bold text-gray-600 animate-pulse">{item.status === 'coming-soon' ? 'Coming Soon' : 'Sold Out'}</span>
                                            </div>

                                            <div className="space-y-2.5">
                                                <div className="flex justify-between items-center border-b border-gray-50 pb-1.5">
                                                    <span className="text-[9px] text-gray-400 font-semibold uppercase">Asset Price</span>
                                                    <span className="text-xs font-bold text-[#0F172A]">{item.assetPrice}</span>
                                                </div>
                                                <div className="flex justify-between items-center border-b border-gray-50 pb-1.5">
                                                    <span className="text-[9px] text-gray-400 font-semibold uppercase">Token Price</span>
                                                    <div className="text-right">
                                                        <span className="text-xs font-bold text-[#0F172A] block">{item.tokenPriceETH}</span>
                                                        <span className="text-[9px] text-gray-400">{item.tokenPriceUSD}</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex justify-between items-center mb-1">
                                                        <span className="text-[9px] text-gray-400 font-semibold uppercase">Available Tokens</span>
                                                        <span className="text-[9px] font-bold text-[#0F172A]">{item.availableTokens.toLocaleString()}</span>
                                                    </div>
                                                    <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                                                        <div
                                                            className={`h-full rounded-full ${item.availableTokens === 0 ? 'bg-gray-400' : 'bg-[#0F172A]'}`}
                                                            style={{ width: `${(item.availableTokens / item.totalTokens) * 100}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="w-full py-2.5 rounded-lg bg-[#0F172A] hover:bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase transition-colors shadow-lg shadow-gray-200 mt-2">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
