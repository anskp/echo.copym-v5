import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { FileKey, Lock, Cpu, Activity, ShieldCheck, Eye, Server, UserCheck, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const PrivacyAi = () => {
    return (
        <Box className="min-h-screen bg-black text-white selection:bg-green-500 selection:text-white pt-20">
            {/* Hero Section */}
            <Container maxWidth="xl" className="relative pb-24 pt-10">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography variant="h6" className="text-sm md:text-base text-green-500 font-mono mb-4 tracking-wider uppercase">
                                PRIVACY AI
                            </Typography>
                            <Typography variant="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Privacy AI is CopyM's intelligent privacy layer.
                            </Typography>
                            <Typography className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg">
                                It protects sensitive asset, user and transaction data while enabling compliant tokenization on public and hybrid blockchains.
                            </Typography>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={6} className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative z-10 flex justify-center"
                        >
                            {/* 3D Shield Representation */}
                            <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
                                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-[80px]"></div>
                                <ShieldCheck size={300} className="text-green-500 relative z-10 drop-shadow-[0_0_50px_rgba(34,197,94,0.5)]" strokeWidth={1} />
                                <Lock size={100} className="absolute text-white z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-lg" />
                            </div>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>


            {/* How Privacy AI works */}
            <Container maxWidth="lg" className="py-20">
                <div className="mb-16">
                    <Typography variant="h3" className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
                        How <span className="text-green-500">Privacy AI</span> works ?
                    </Typography>
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


            {/* Why Privacy AI is Critical */}
            <Container maxWidth="lg" className="py-24">
                <div className="mb-16">
                    <Typography variant="h3" className="text-2xl sm:text-3xl font-bold mb-6">
                        Why <span className="text-green-500">Privacy AI</span> is critical ?
                    </Typography>
                    <div className="max-w-3xl">
                        {/* Repeating the intro text as per design, but correcting 'zero gas' to 'privacy' */}
                        <Typography className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                            At CopyM, privacy is <span className="text-white font-semibold">not a feature - it's a design philosophy.</span>
                        </Typography>
                        <Typography className="text-gray-400 text-sm sm:text-base leading-relaxed">
                            We abstract blockchain complexity so users can interact with tokenized assets without ever touching gas fees, while still benefiting from full on-chain security and transparency.
                        </Typography>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Card 1 */}
                    <div className="flex items-stretch bg-black border border-gray-800 rounded-lg overflow-hidden hover:border-green-500/50 transition-colors group">
                        {/* Image Placeholder */}
                        <div className="w-1/3 min-w-[120px] md:min-w-[200px] min-h-32 bg-gradient-to-br from-green-900/40 to-black flex items-center justify-center p-4 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                            <Shield className="text-green-500/80 group-hover:scale-110 transition-transform duration-500" size={48} />
                        </div>
                        <div className="p-6 flex-1 flex items-center">
                            <Typography className="text-white font-medium text-base sm:text-lg leading-snug">Enables regulated asset tokenization <span className="font-bold">without sacrificing confidentiality</span></Typography>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex items-stretch bg-black border border-gray-800 rounded-lg overflow-hidden hover:border-green-500/50 transition-colors group">
                        <div className="w-1/3 min-w-[120px] md:min-w-[200px] min-h-32 bg-gradient-to-br from-green-900/40 to-black flex items-center justify-center p-4 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                            <UserCheck className="text-green-500/80 group-hover:scale-110 transition-transform duration-500" size={48} />
                        </div>
                        <div className="p-6 flex-1 flex items-center">
                            <Typography className="text-white font-medium text-base sm:text-lg leading-snug">Protects both investor and issuer data</Typography>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex items-stretch bg-black border border-gray-800 rounded-lg overflow-hidden hover:border-green-500/50 transition-colors group">
                        <div className="w-1/3 min-w-[120px] md:min-w-[200px] min-h-32 bg-gradient-to-br from-green-900/40 to-black flex items-center justify-center p-4 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                            <Server className="text-green-500/80 group-hover:scale-110 transition-transform duration-500" size={48} />
                        </div>
                        <div className="p-6 flex-1 flex items-center">
                            <Typography className="text-white font-medium text-base sm:text-lg leading-snug">Supports enterprise and institutional adoption with stricter privacy requirements</Typography>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex items-stretch bg-black border border-gray-800 rounded-lg overflow-hidden hover:border-green-500/50 transition-colors group">
                        <div className="w-1/3 min-w-[120px] md:min-w-[200px] min-h-32 bg-gradient-to-br from-green-900/40 to-black flex items-center justify-center p-4 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                            <Eye className="text-green-500/80 group-hover:scale-110 transition-transform duration-500" size={48} />
                        </div>
                        <div className="p-6 flex-1 flex items-center">
                            <Typography className="text-white font-medium text-base sm:text-lg leading-snug">Prevents sensitive information from being permanently exposed on public ledgers</Typography>
                        </div>
                    </div>

                </div>
            </Container>

        </Box>
    );
};

export default PrivacyAi;
