import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { FileKey, Lock, Cpu, Activity, ShieldCheck } from 'lucide-react';

const HowItWorks = () => {
    return (
        <Container maxWidth="lg" className="py-20">
            <div className="mb-16">
                <div className="relative w-fit mb-6">
                    <h2 className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        <span className="text-white">How </span>
                        <span className="text-[#10b981]">Privacy AI</span>
                        <span className="text-white"> works ?</span>
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

            <Grid container spacing={6}>
                {/* Item 1 */}
                <Grid item xs={12} md={4}>
                    <div className="flex flex-col items-start gap-4 group">
                        <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 group-hover:border-green-500 transition-colors">
                            <FileKey className="text-white group-hover:text-green-500 transition-colors" size={28} />
                        </div>
                        <Typography variant="h6" className="text-base sm:text-lg text-green-500 font-bold">Intelligent Data Segmentation</Typography>
                        <Typography className="text-gray-400 text-xs sm:text-sm leading-relaxed">Sensitive data is walled off in private, confidential or restricted. Only cryptographic proofs and essential metadata are written on-chain.</Typography>
                    </div>
                </Grid>
                {/* Item 2 */}
                <Grid item xs={12} md={4}>
                    <div className="flex flex-col items-start gap-4 group">
                        <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 group-hover:border-green-500 transition-colors">
                            <Lock className="text-white group-hover:text-green-500 transition-colors" size={28} />
                        </div>
                        <Typography variant="h6" className="text-base sm:text-lg text-green-500 font-bold">Privacy-Preserving Verification</Typography>
                        <Typography className="text-gray-400 text-xs sm:text-sm leading-relaxed">Verify ownership and compliance are verified without exposing sensitive personal or business information.</Typography>
                    </div>
                </Grid>
                {/* Item 3 */}
                <Grid item xs={12} md={4}>
                    <div className="flex flex-col items-start gap-4 group">
                        <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 group-hover:border-green-500 transition-colors">
                            <Cpu className="text-white group-hover:text-green-500 transition-colors" size={28} />
                        </div>
                        <Typography variant="h6" className="text-base sm:text-lg text-green-500 font-bold">AI-Driven Access Control</Typography>
                        <Typography className="text-gray-400 text-xs sm:text-sm leading-relaxed">Access rights adapt dynamically based on rule, jurisdiction, asset type and transaction context.</Typography>
                    </div>
                </Grid>
                {/* Item 4 */}
                <Grid item xs={12} md={4}>
                    <div className="flex flex-col items-start gap-4 group">
                        <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 group-hover:border-green-500 transition-colors">
                            <Activity className="text-white group-hover:text-green-500 transition-colors" size={28} />
                        </div>
                        <Typography variant="h6" className="text-base sm:text-lg text-green-500 font-bold">Continuous Risk Monitoring</Typography>
                        <Typography className="text-gray-400 text-xs sm:text-sm leading-relaxed">AI monitors behaviors across transactions to detect anomalies, prevent leakage and reinforce layer protection.</Typography>
                    </div>
                </Grid>
                {/* Item 5 */}
                <Grid item xs={12} md={4}>
                    <div className="flex flex-col items-start gap-4 group">
                        <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 group-hover:border-green-500 transition-colors">
                            <ShieldCheck className="text-white group-hover:text-green-500 transition-colors" size={28} />
                        </div>
                        <Typography variant="h6" className="text-base sm:text-lg text-green-500 font-bold">Off-Chain Intelligence, On-Chain Trust</Typography>
                        <Typography className="text-gray-400 text-xs sm:text-sm leading-relaxed">Sensitive data is processed securely off-chain, while settlement proofs are chain-agnostic integrity and auditability.</Typography>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HowItWorks;
