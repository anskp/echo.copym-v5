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
            isSpecial: true,
            number: '01.'
        },
        {
            title: 'Portfolio Analytics',
            icon: tiicon2,
            number: '02.'
        },
        {
            title: 'Compliance Management',
            icon: tiicon3,
            number: '03.'
        },
        {
            title: 'Communication Hub',
            icon: tiicon4,
            number: '04.'
        }
    ];

    return (
        <section className="relative bg-white pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
                {/* Section Header */}
                <div className="mb-8 sm:mb-12">
                    <div className="relative w-fit mb-4">
                        <h2 className="inline-flex items-center gap-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase leading-tight pb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                            <span className="text-[#15a36e]">TOKEN</span> <span className="text-black">MANAGEMENT</span>
                        </h2>
                        <div className="absolute bottom-0 left-0 bg-black/20" style={{ width: 'calc(100% + 150px)', height: '1px' }}></div>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-600 leading-relaxed max-w-4xl" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        Comprehensive tools for managing investor relationships, compliance, and portfolio performance.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {managementFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{
                                scale: 1.02,
                                rotateY: index !== 0 ? 5 : 0,
                                transition: { duration: 0.3 }
                            }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative rounded-[30px] border-8 border-[#EEEEEE] bg-white overflow-hidden flex flex-col p-6 sm:p-8 min-h-[400px] sm:min-h-[450px] justify-end"
                        >
                            {/* Background image filled inside the card (appears on hover for 2, 3, 4) */}
                            {index !== 0 && (
                                <div
                                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden"
                                >
                                    <img
                                        src={cardshades}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}

                            {/* Background Pattern for Special Card (Card 01) */}
                            {index === 0 && (
                                <div
                                    className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%2315a36e' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
                                        backgroundSize: '40px 40px'
                                    }}
                                ></div>
                            )}

                            {/* Card Content */}
                            <div className="absolute top-6 sm:top-8 left-6 sm:left-8 z-10">
                                <span className="text-3xl sm:text-4xl font-bold text-[#15a36e] block" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                    {feature.number}
                                </span>
                            </div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-white/90">
                                    <img src={feature.icon} alt={feature.title} className="w-8 h-8 object-contain" />
                                </div>

                                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 leading-tight transition-colors group-hover:text-black" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                    {feature.title}
                                </h3>

                                {feature.description && (
                                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-4 transition-colors group-hover:text-gray-700 font-medium" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                        {feature.description}
                                    </p>
                                )}

                                {feature.badge && (
                                    <span className="inline-block bg-[#15a36e] text-white text-[10px] font-bold py-1 px-3 rounded-full">
                                        {feature.badge}
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
