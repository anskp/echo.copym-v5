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
        subType: 'Apartment',
        beds: 2,
        country: 'UK',
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
        roi: '15%',
        cagr: '18.20%',
        issuerName: 'Emaar Properties',
        issuerLogo: 'https://ui-avatars.com/api/?name=Emaar+Properties&background=10B981&color=fff',
        assetPrice: 'AED 500k',
        tokenPriceETH: '0.010 ETH',
        tokenPriceUSD: '$30 USD',
        availableTokens: 50000,
        totalTokens: 500000,
        status: 'coming-soon',
        image: '/assets/publicm/vilaa2.jpeg',
        badge: 'COMING SOON',
        launchDate: 'Coming soon',
        propertyType: 'Residential',
        subType: 'Villa',
        beds: 5,
        country: 'UAE',
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
        roi: '8%',
        cagr: '10.50%',
        issuerName: 'NY Developers',
        issuerLogo: 'https://ui-avatars.com/api/?name=NY+Developers&background=F59E0B&color=fff',
        assetPrice: 'AED 2M',
        tokenPriceETH: '0.050 ETH',
        tokenPriceUSD: '$150 USD',
        availableTokens: 0,
        totalTokens: 1000000,
        status: 'sold-out',
        image: '/assets/publicm/penthouse.jpeg',
        badge: 'SOLD OUT',
        launchDate: 'Sold Out',
        progress: 100,
        propertyType: 'Residential',
        subType: 'Penthouse',
        beds: 3,
        country: 'USA',
        city: 'New York',
        location: 'Manhattan',
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
        image: '/assets/publicm/villa.jpeg',
        badge: 'NEW',
        launchDate: 'Coming soon',
        propertyType: 'Land',
        subType: 'Plot',
        zonedFor: 'Residential',
        country: 'UAE',
        city: 'Dubai',
        location: 'JVC',
        priceVal: 10000,
        tokenPercentage: 0
    }
];

MOCK_INVESTMENTS.push(...MOCK_LAND_ITEMS);

const FILTER_TABS = ['All', 'Real Estate'];

const PROPERTY_TYPES = ['Residential', 'Commercial', 'Land', 'Multiple Units', 'Off Plan'];
const RESIDENTIAL_SUBTYPES = [
    'Apartment', 'Villa', 'Townhouse', 'Penthouse',
    'Hotel Apartment', 'Residential Building', 'Residential Floor', 'Villa Compound'
];

const COMMERCIAL_SUBTYPES = [
    'Office', 'Retail', 'Industrial', 'Staff Accomm', 'Shop', 'Warehouse',
    'Commercial Floor', 'Commercial Building', 'Commercial Villa', 'Factory', 'Showroom', 'Other'
];

const ZONED_FOR_OPTIONS = ['Residential', 'Commercial', 'Retail', 'Industrial', 'Mixed Use'];
const HIDE_BEDS_FOR = ['Land', 'Multiple Units', 'Off Plan'];

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
    const [isZonedForDropdownOpen, setIsZonedForDropdownOpen] = useState(false);

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
                                    if (type !== localFilters.selectedPropertyType) updateFilter('selectedSubTypes', []);
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
                    {(localFilters.selectedPropertyType === 'Residential' || localFilters.selectedPropertyType === 'Commercial') && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                        >
                            <label className="block text-sm font-bold text-gray-700 mb-4">
                                {localFilters.selectedPropertyType} Type
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                {(localFilters.selectedPropertyType === 'Residential' ? RESIDENTIAL_SUBTYPES : COMMERCIAL_SUBTYPES).map(type => (
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
                    {/* Conditional: Beds OR Zoned For */}
                    <div className="relative">
                        {HIDE_BEDS_FOR.includes(localFilters.selectedPropertyType) ? (
                            /* Zoned For Filter */
                            <>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Zoned For</label>
                                <button
                                    onClick={() => setIsZonedForDropdownOpen(!isZonedForDropdownOpen)}
                                    className="w-full sm:w-60 flex items-center justify-between bg-white border border-gray-200 text-gray-700 text-sm font-medium py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <span className="truncate mr-2">
                                        {(localFilters.zonedFor && localFilters.zonedFor.length > 0)
                                            ? `${localFilters.zonedFor.length} Selected`
                                            : 'Any'}
                                    </span>
                                    <ChevronDown size={16} className="flex-shrink-0" />
                                </button>
                                <AnimatePresence>
                                    {isZonedForDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute top-full left-0 mt-2 w-full sm:w-60 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 z-50 max-h-60 overflow-y-auto"
                                        >
                                            {ZONED_FOR_OPTIONS.map((option) => (
                                                <button
                                                    key={option}
                                                    onClick={() => {
                                                        const current = localFilters.zonedFor || [];
                                                        let newSelected;
                                                        if (current.includes(option)) {
                                                            newSelected = current.filter(t => t !== option);
                                                        } else {
                                                            newSelected = [...current, option];
                                                        }
                                                        updateFilter('zonedFor', newSelected);
                                                    }}
                                                    className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center justify-between ${(localFilters.zonedFor || []).includes(option)
                                                        ? 'bg-blue-50 text-blue-700 font-semibold'
                                                        : 'text-gray-600 hover:bg-gray-50'
                                                        }`}
                                                >
                                                    {option}
                                                    {(localFilters.zonedFor || []).includes(option) && <Check size={14} />}
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </>
                        ) : (
                            /* Beds Filter */
                            <>
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
                            </>
                        )}
                    </div>

                    {/* Location Filters */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
                        <div className="flex flex-col sm:flex-row gap-3">
                            {/* Country Dropdown */}
                            <div className="relative w-full sm:w-1/3">
                                <select
                                    className="w-full appearance-none bg-white border border-gray-200 text-gray-900 py-3 px-4 pr-8 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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

                            {/* City Dropdown */}
                            <div className="relative w-full sm:w-1/3">
                                <select
                                    className="w-full appearance-none bg-white border border-gray-200 text-gray-900 py-3 px-4 pr-8 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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

                            {/* Search Bar */}
                            <div className="relative w-full sm:w-1/3">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search size={14} className="text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full h-full pl-9 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                                    value={localFilters.location || ''}
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
        country: '',
        city: '',
        location: '',
        zonedFor: []
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
            // Zoned For
            if (matchesAdvanced && filters.zonedFor && filters.zonedFor.length > 0 && !filters.zonedFor.includes(item.zonedFor)) {
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
                                                <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[9px] font-bold text-gray-600">{item.subType}</span>
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
