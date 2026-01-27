import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import tiicon1 from '../../../components/icons/Tokenization/tiicon1.png';
import tiicon2 from '../../../components/icons/Tokenization/tiicon2.png';
import tiicon3 from '../../../components/icons/Tokenization/tiicon3.png';
import tiicon4 from '../../../components/icons/Tokenization/tiicon4.png';
import cardshades from '../../../components/images/cardshades.png';

export default function TokenManagement() {
    const managementFeatures = [
        {
            title: 'Investor Dashboard',
            description: 'Comprehensive dashboard for tracking investments, returns, and portfolio performance.',
            icon: '/assets/Images/dashboard.png',
            badge: '10+ Active',
            number: '01.',
            scale: 'scale-125'
        },
        {
            title: 'Portfolio Analytics',
            description: 'Advanced analytics and reporting tools for tracking your entitlement performance.',
            icon: tiicon2,
            badge: 'Real Time',
            number: '02.',
            scale: 'scale-100'
        },
        {
            title: 'Compliance Management',
            description: 'Automated compliance monitoring and regulatory reporting for all your investors.',
            icon: '/assets/Images/compliance.png',
            badge: '100% Compliant',
            number: '03.',
            scale: 'scale-85'
        },
        {
            title: 'Communication Hub',
            description: 'Integrated communication tools for managing investor updates and announcements.',
            icon: tiicon4,
            badge: '24/7 Support',
            number: '04.',
            scale: 'scale-100'
        }
    ];

    return (
        <section className="relative bg-white pt-10 sm:pt-16 md:pt-20 lg:pt-24 pb-10 sm:pb-16 md:pb-20 lg:pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
                {/* Section Header */}
                <div className="mb-10 sm:mb-14 px-1 sm:px-0">
                    <div className="relative text-center mx-auto w-fit mb-4 sm:mb-6">
                        <h2 className="inline-flex items-center gap-2 text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold uppercase leading-tight pb-2 sm:pb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                            <span className="text-[#15a36e]">TOKEN</span> <span className="text-black">MANAGEMENT</span>
                        </h2>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-sm font-normal text-black leading-relaxed max-w-4xl mx-auto text-center" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        Comprehensive tools for managing investor relationships, compliance, <br className="hidden sm:block" /> and portfolio performance.
                    </p>
                </div>

                {/* Features Grid - Matching RWA Assets Design */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full">
                    {managementFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative w-full h-full"
                        >
                            <div
                                className="rounded-lg p-3 sm:p-4 lg:p-5 flex flex-col h-full min-h-[350px] sm:min-h-[420px] lg:min-h-[480px] relative transition-transform duration-300 hover:scale-[1.02]"
                                style={{
                                    background: 'linear-gradient(to bottom, rgba(251, 251, 251, 1), rgba(240, 240, 240, 1))'
                                }}
                            >
                                {/* Status Badge - Top Right */}
                                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                                    <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#dcfce7] border border-[#bbf7d0]/50 shadow-sm">
                                        <span className="text-xs sm:text-sm font-bold text-[#15a36e]" style={{ fontFamily: 'Palanquin, sans-serif' }}>{feature.badge}</span>
                                    </div>
                                </div>

                                {/* Icon - Centered */}
                                <div className="flex items-center justify-center mt-8 sm:mt-10 lg:mt-12 mb-3 sm:mb-4 lg:mb-5 h-[100px] sm:h-[140px] md:h-[160px] lg:h-[180px]">
                                    <img
                                        src={feature.icon}
                                        alt={feature.title}
                                        className={`w-full h-full object-contain transform ${feature.scale}`}
                                    />
                                </div>

                                {/* Info Section */}
                                <div className="flex flex-col flex-grow text-left space-y-1.5">
                                    <h3
                                        className="text-lg sm:text-xl lg:text-[19px] font-bold text-black min-h-[48px] sm:min-h-[56px] lg:min-h-[64px] flex items-center whitespace-nowrap"
                                        style={{ fontFamily: 'Palanquin, sans-serif' }}
                                    >
                                        {feature.title}
                                    </h3>

                                    <p
                                        className="text-sm text-gray-600 leading-snug flex-grow min-h-[72px]"
                                        style={{ fontFamily: 'Palanquin, sans-serif' }}
                                    >
                                        {feature.description}
                                    </p>

                                    {/* Know More Button - Filled Design */}
                                    <div className="mt-6 sm:mt-8 flex justify-center">
                                        <Link to="/marketplace" className="group inline-flex items-center justify-between min-w-[120px] sm:min-w-[150px] bg-[#15a36e] border border-[#15a36e] hover:bg-[#15a36e] rounded-full p-1 transition-all duration-300 w-fit cursor-pointer">
                                            <span className="pl-4 pr-2 text-white font-semibold text-xs sm:text-sm" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                                Know more
                                            </span>
                                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center transition-all duration-300">
                                                <svg
                                                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#15a36e]"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="3"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                </svg>
                                            </div>
                                        </Link>
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
