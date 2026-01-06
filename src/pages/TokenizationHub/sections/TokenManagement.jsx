import React from 'react';
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
            icon: tiicon1,
            badge: '10+ Active',
            number: '01.'
        },
        {
            title: 'Portfolio Analytics',
            description: 'Advanced analytics and reporting tools for investment performance tracking.',
            icon: tiicon2,
            badge: 'Real Time',
            number: '02.'
        },
        {
            title: 'Compliance Management',
            description: 'Automated compliance monitoring and regulatory reporting for all investors.',
            icon: tiicon3,
            badge: '100% Compliant',
            number: '03.'
        },
        {
            title: 'Communication Hub',
            description: 'Integrated communication tools for investor updates and announcements.',
            icon: tiicon4,
            badge: '24/7 Support',
            number: '04.'
        }
    ];

    return (
        <section className="relative bg-white pt-10 sm:pt-16 md:pt-20 lg:pt-24 pb-10 sm:pb-16 md:pb-20 lg:pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
                {/* Section Header */}
                <div className="mb-10 sm:mb-14 px-1 sm:px-0">
                    <div className="relative w-fit mb-4 sm:mb-6">
                        <h2 className="inline-flex items-center gap-2 text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold uppercase leading-tight pb-2 sm:pb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                            <span className="text-[#15a36e]">TOKEN</span> <span className="text-black">MANAGEMENT</span>
                        </h2>
                        <div className="absolute bottom-0 left-0 bg-black/20" style={{ width: 'calc(100% + 40px)', sm: { width: 'calc(100% + 150px)' }, height: '1px' }}></div>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-600 leading-relaxed max-w-4xl" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        Comprehensive tools for managing investor relationships, compliance, and portfolio performance.
                    </p>
                </div>

                {/* Features Grid - Improved Responsive Breakpoints */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 max-w-full">
                    {managementFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{
                                scale: 1.02,
                                rotateY: index % 2 === 0 ? 3 : -3,
                                transition: { duration: 0.3 }
                            }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative rounded-xl border-[6px] sm:border-8 border-[#EEEEEE] bg-white overflow-hidden flex flex-col justify-end min-h-[420px] xs:min-h-[460px] sm:min-h-[480px] md:min-h-[500px] lg:min-h-[530px] transition-all duration-300 shadow-sm hover:shadow-xl"
                        >
                            {/* Card Number (Top Left Default) */}
                            <div className="absolute top-5 sm:top-8 left-5 sm:left-8 z-20 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#15a36e] block" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                    {feature.number}
                                </span>
                            </div>

                            {/* Top Part: Hover Image with Responsive Gradient */}
                            <div className="absolute top-0 left-0 w-full h-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden z-0">
                                <img
                                    src={cardshades}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-white via-white/40 to-transparent"></div>
                            </div>

                            {/* Content Area - Fluid Height & Spacing */}
                            <div className="relative z-10 w-full p-6 sm:p-8 flex flex-col justify-end transition-all duration-500 group-hover:h-1/2 group-hover:justify-start group-hover:pt-4 md:group-hover:pt-6">
                                {/* Icon (Fades out and collapses on hover) */}
                                <div className="transition-all duration-300 group-hover:opacity-0 group-hover:h-0 group-hover:mb-0 mb-5 sm:mb-6 overflow-hidden flex shrink-0">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-50 rounded-xl sm:rounded-2xl flex items-center justify-center">
                                        <img src={feature.icon} alt={feature.title} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                                    </div>
                                </div>

                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 sm:mb-3 leading-tight transition-all duration-300" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                    {feature.title}
                                </h3>

                                {/* Revealable Content (Hover only) */}
                                <div className="max-h-0 opacity-0 group-hover:max-h-[350px] group-hover:opacity-100 transition-all duration-300 ease-out overflow-hidden text-left flex flex-col pointer-events-none group-hover:pointer-events-auto">
                                    {feature.description && (
                                        <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed font-medium mb-0" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                            {feature.description}
                                        </p>
                                    )}

                                    {feature.badge && (
                                        <div className="flex justify-center mt-1 pb-1">
                                            <span className="inline-block bg-[#15a36e] text-white text-[10px] sm:text-[12px] font-semibold py-1.5 px-4 sm:px-6 rounded-full shadow-md whitespace-nowrap active:scale-95 transition-transform">
                                                {feature.badge}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
