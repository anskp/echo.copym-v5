import React from 'react';
import { Container, Typography } from '@mui/material';
import { Fuel, ArrowRightLeft, Zap, Layers, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
    return (
        <Container maxWidth="lg" className="py-24">
            <div className="mb-20">
                <div className="relative w-fit">
                    <h2 className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        <span className="text-white">How </span>
                        <span className="text-[#10b981]">Zero Gas</span>
                        <span className="text-white"> works ?</span>
                    </h2>
                    <div className="absolute bottom-0 left-0 bg-white/20" style={{ width: 'calc(100% + 40px)', height: '1px' }}></div>
                </div>
            </div>

            <div className="space-y-24">
                {/* Item 1 */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="w-64 h-64 bg-gray-900/50 rounded-3xl border border-gray-800 flex items-center justify-center relative overflow-hidden group hover:border-green-500/50 transition-colors duration-500">
                            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <Fuel size={64} className="text-green-500" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <Typography variant="h4" className="text-xl md:text-2xl font-bold text-green-500 mb-4 uppercase" style={{ fontFamily: 'Palanquin, sans-serif' }}>GAS ABSTRACTION</Typography>
                        <Typography className="text-gray-400 text-base md:text-lg" style={{ fontFamily: 'Palanquin, sans-serif' }}>Users never need to hold native blockchain tokens. All transaction costs are handled at the protocol level.</Typography>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="w-64 h-64 bg-gray-900/50 rounded-3xl border border-gray-800 flex items-center justify-center relative overflow-hidden group hover:border-green-500/50 transition-colors duration-500">
                            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <ArrowRightLeft size={64} className="text-green-500" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <Typography variant="h4" className="text-xl md:text-2xl font-bold text-green-500 mb-4 uppercase" style={{ fontFamily: 'Palanquin, sans-serif' }}>META-TRANSACTIONS</Typography>
                        <Typography className="text-gray-400 text-base md:text-lg" style={{ fontFamily: 'Palanquin, sans-serif' }}>Users simply review and sign transactions. CopyM submits them on-chain and pays gas on the user's behalf.</Typography>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="w-64 h-64 bg-gray-900/50 rounded-3xl border border-gray-800 flex items-center justify-center relative overflow-hidden group hover:border-green-500/50 transition-colors duration-500">
                            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <Zap size={64} className="text-green-500" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <Typography variant="h4" className="text-xl md:text-2xl font-bold text-green-500 mb-4 uppercase" style={{ fontFamily: 'Palanquin, sans-serif' }}>SPONSORED TRANSACTIONS</Typography>
                        <Typography className="text-gray-400 text-base md:text-lg" style={{ fontFamily: 'Palanquin, sans-serif' }}>CopyM sponsors gas for key interactions such as asset issuance, marketplace trades, ownership transfers, and yield distributions.</Typography>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="w-64 h-64 bg-gray-900/50 rounded-3xl border border-gray-800 flex items-center justify-center relative overflow-hidden group hover:border-green-500/50 transition-colors duration-500">
                            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <Layers size={64} className="text-green-500" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <Typography variant="h4" className="text-xl md:text-2xl font-bold text-green-500 mb-4 uppercase" style={{ fontFamily: 'Palanquin, sans-serif' }}>OPTIMIZED INFRASTRUCTURE</Typography>
                        <Typography className="text-gray-400 text-base md:text-lg" style={{ fontFamily: 'Palanquin, sans-serif' }}>The platform runs on high-throughput, low-cost blockchain layers, making the zero-gas model economically sustainable.</Typography>
                    </div>
                </div>

                {/* Item 5 */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="w-64 h-64 bg-gray-900/50 rounded-3xl border border-gray-800 flex items-center justify-center relative overflow-hidden group hover:border-green-500/50 transition-colors duration-500">
                            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <CheckCircle size={64} className="text-green-500" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <Typography variant="h4" className="text-xl md:text-2xl font-bold text-green-500 mb-4 uppercase" style={{ fontFamily: 'Palanquin, sans-serif' }}>ENTERPRISE-GRADE UX</Typography>
                        <Typography className="text-gray-400 text-base md:text-lg" style={{ fontFamily: 'Palanquin, sans-serif' }}>Transactions feel instant and intuitive. No gas sliders, no out-of-eth errors - just clear confirmations.</Typography>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default HowItWorks;
