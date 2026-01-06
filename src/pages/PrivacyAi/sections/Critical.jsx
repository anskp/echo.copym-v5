import React from 'react';
import { Container, Typography } from '@mui/material';

const p1 = '/assets/Images/icons/privacyai1.png';
const p2 = '/assets/Images/icons/privacyai2.png';
const p3 = '/assets/Images/icons/privacyai3.png';
const p4 = '/assets/Images/icons/privacyai4.png';

const Critical = () => {
    return (
        <Container maxWidth="lg" className="py-24">
            <div className="mb-16">
                <div className="relative w-fit mb-6">
                    <h2 className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        <span className="text-white">Why </span>
                        <span className="text-[#10b981]">Privacy AI</span>
                        <span className="text-white"> is critical ?</span>
                    </h2>
                    <div className="absolute bottom-0 left-0 bg-white/20" style={{ width: 'calc(100% + 40px)', height: '1px' }}></div>
                </div>
                <div className="max-w-3xl">
                    <Typography className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                        At CopyM, privacy is <span className="text-white font-semibold">not a feature - it's a design philosophy.</span>
                    </Typography>
                    <Typography className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        We abstract blockchain complexity so users can interact with tokenized assets without ever touching gas fees, while still benefiting from full on-chain security and transparency.
                    </Typography>
                </div>
            </div>

            <div className="space-y-4">
                {/* Card 1 */}
                <div className="flex items-center bg-black border border-gray-800 rounded-sm overflow-hidden hover:border-green-500/50 transition-colors group h-24 sm:h-28 md:h-32">
                    {/* Image Placeholder */}
                    <div className="w-[30%] sm:w-[25%] md:w-[20%] h-full flex items-center justify-center p-4 bg-[#0a0a0a]">
                        <img src={p1} alt="Confidentiality" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-4 sm:p-6 flex-1 flex items-center">
                        <Typography className="text-white font-medium text-sm sm:text-base md:text-lg leading-snug" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                            Enables regulated asset tokenization <span className="font-bold">without sacrificing confidentiality</span>
                        </Typography>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex items-center bg-black border border-gray-800 rounded-sm overflow-hidden hover:border-green-500/50 transition-colors group h-24 sm:h-28 md:h-32">
                    <div className="w-[30%] sm:w-[25%] md:w-[20%] h-full flex items-center justify-center p-4 bg-[#0a0a0a]">
                        <img src={p2} alt="Data Protection" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-4 sm:p-6 flex-1 flex items-center">
                        <Typography className="text-white font-medium text-sm sm:text-base md:text-lg leading-snug" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                            Protects both investor and issuer data
                        </Typography>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex items-center bg-black border border-gray-800 rounded-sm overflow-hidden hover:border-green-500/50 transition-colors group h-24 sm:h-28 md:h-32">
                    <div className="w-[30%] sm:w-[25%] md:w-[20%] h-full flex items-center justify-center p-4 bg-[#0a0a0a]">
                        <img src={p3} alt="Enterprise Adoption" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-4 sm:p-6 flex-1 flex items-center">
                        <Typography className="text-white font-medium text-sm sm:text-base md:text-lg leading-snug" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                            Supports enterprise and institutional adoption with stricter privacy requirements
                        </Typography>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="flex items-center bg-black border border-gray-800 rounded-sm overflow-hidden hover:border-green-500/50 transition-colors group h-24 sm:h-28 md:h-32">
                    <div className="w-[30%] sm:w-[25%] md:w-[20%] h-full flex items-center justify-center p-4 bg-[#0a0a0a]">
                        <img src={p4} alt="Privacy on Ledger" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-4 sm:p-6 flex-1 flex items-center">
                        <Typography className="text-white font-medium text-sm sm:text-base md:text-lg leading-snug" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                            Prevents sensitive information from being permanently exposed on public ledgers
                        </Typography>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Critical;
