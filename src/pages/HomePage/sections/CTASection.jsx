import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import ctavdo from '../../../components/Videos/ctavdos.mp4';

export default function CTASection() {
    return (
        <section className="relative w-full h-[40vh] sm:h-[45vh] lg:h-[80vh] overflow-hidden bg-black">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={ctavdo} type="video/mp4" />
                </video>
                {/* Dark Overlay for better text legibility */}
                <div className="absolute inset-0 bg-black/40 z-[5]" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full h-full flex items-center justify-center px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight max-w-4xl mx-auto" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        Turning assets into opportunities
                    </h2>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-white px-5 py-2 sm:px-10 sm:py-4 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 rounded-full group"
                    >
                        <span className="text-base sm:text-lg md:text-lg lg:text-xl text-black font-semibold" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                            Invest in the revolution
                        </span>
                        <FiArrowUpRight className="text-xl sm:text-2xl text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
