import React from 'react';
import HomeCycle from '../../../components/HomeCycle';

export default function MarketplaceIntro() {
    return (
        <section className="w-full bg-white py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <div className="relative w-fit mb-6">
                        <h2 className="inline-flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-tight pb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                            <span className="text-black">What is the</span> <span className="text-[#10b981]">CopyM Marketplace</span> <span className="text-black">?</span>
                        </h2>
                        <div className="absolute bottom-0 left-0 bg-black w-full sm:w-[calc(100%+100px)]" style={{ height: '1px' }}></div>
                    </div>
                    <div className="space-y-6 text-lg text-gray-800 leading-relaxed font-medium">
                        <p>
                            The CopyM Marketplace is a secure, blockchain-powered venue where real-world and digital assets are brought on-chain, discovered and traded.
                        </p>
                        <p>
                            It connects asset owners, investors and infrastructure partners in one transparent ecosystem, enabling seamless ownership, trading and settlement.
                        </p>
                    </div>
                </div>

                {/* Cycle Animation */}
                <div className="w-full flex justify-center mt-8">
                    <HomeCycle />
                </div>
            </div>
        </section>
    );
}
