import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { Fuel, ArrowRightLeft, Zap, Layers, CheckCircle, Globe, DollarSign, Users, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import zerogasHero from '../../components/images/zerogashero.png';

const ZeroGas = () => {
    return (
        <Box className="min-h-screen bg-black text-white selection:bg-green-500 selection:text-white pt-20">
            {/* Hero Section */}
            <div className="relative w-full overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={zerogasHero}
                        alt="Zero Gas Hero"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <Container maxWidth="xl" className="relative z-10 pb-24 pt-10">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-left"
                            >
                                <Typography variant="h6" className="text-sm md:text-base text-[#10b981] font-bold mb-4 tracking-wider uppercase" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                    Zero Gas EXPERIENCE
                                </Typography>
                                <Typography variant="h1" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                    Zero Gas by design
                                </Typography>
                                <Typography className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                    CopyM delivers zero-gas tokenization by abstracting blockchain fees through meta-transactions and sponsored execution.
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


                            </motion.div>

                        </Grid>
                    </Grid>
                </Container>
            </div>


            {/* Intro Section */}
            <div className="bg-black py-20 relative overflow-hidden">
                <Container maxWidth="lg">
                    <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-green-900 to-transparent opacity-50"></div>
                    <Typography variant="h3" className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
                        <span className="text-green-500">Zero Gas</span> at CopyM ?
                    </Typography>
                    <div className="max-w-4xl">
                        <Typography className="text-gray-300 text-xl leading-relaxed mb-6">
                            At CopyM, zero gas is <span className="text-white font-semibold">not a feature - it's a design philosophy.</span>
                        </Typography>
                        <Typography className="text-gray-400 text-lg leading-relaxed">
                            We abstract blockchain complexity so users can interact with tokenized assets without ever touching gas fees, while still benefiting from full on-chain security and transparency.
                        </Typography>
                    </div>
                    {/* Network graphic placeholder */}
                    <div className="mt-16 relative h-64 w-full rounded-2xl border border-green-900/30 bg-gradient-to-b from-green-900/10 to-transparent flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[80%] h-[1px] bg-green-500/30"></div>
                            <div className="absolute w-32 h-20 bg-black border border-green-500 rounded-xl flex flex-col items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.4)] z-10">
                                <div className="text-green-500 font-bold text-lg">0 GAS</div>
                                <div className="text-gray-400 text-xs text-center">FEE</div>
                            </div>
                            <div className="absolute left-[20%] w-12 h-12 bg-green-900/40 border border-green-500/50 rounded-lg animate-pulse"></div>
                            <div className="absolute right-[20%] w-12 h-12 bg-green-900/40 border border-green-500/50 rounded-lg animate-pulse delay-75"></div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* How it works */}
            <Container maxWidth="lg" className="py-24">
                <div className="mb-20 pb-4 border-b border-gray-800">
                    <Typography variant="h3" className="text-3xl font-bold">
                        How <span className="text-green-500">Zero Gas</span> works ?
                    </Typography>
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
                            <Typography variant="h4" className="text-2xl font-bold text-green-500 mb-4">GAS ABSTRACTION</Typography>
                            <Typography className="text-gray-400 text-lg">Users never need to hold native blockchain tokens. All transaction costs are handled at the protocol level.</Typography>
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
                            <Typography variant="h4" className="text-2xl font-bold text-green-500 mb-4">META-TRANSACTIONS</Typography>
                            <Typography className="text-gray-400 text-lg">Users simply review and sign transactions. CopyM submits them on-chain and pays gas on the user's behalf.</Typography>
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
                            <Typography variant="h4" className="text-2xl font-bold text-green-500 mb-4">SPONSORED TRANSACTIONS</Typography>
                            <Typography className="text-gray-400 text-lg">CopyM sponsors gas for key interactions such as asset issuance, marketplace trades, ownership transfers, and yield distributions.</Typography>
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
                            <Typography variant="h4" className="text-2xl font-bold text-green-500 mb-4">OPTIMIZED INFRASTRUCTURE</Typography>
                            <Typography className="text-gray-400 text-lg">The platform runs on high-throughput, low-cost blockchain layers, making the zero-gas model economically sustainable.</Typography>
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
                            <Typography variant="h4" className="text-2xl font-bold text-green-500 mb-4">ENTERPRISE-GRADE UX</Typography>
                            <Typography className="text-gray-400 text-lg">Transactions feel instant and intuitive. No gas sliders, no out-of-eth errors - just clear confirmations.</Typography>
                        </div>
                    </div>
                </div>
            </Container>


            {/* Why it Matters */}
            <Container maxWidth="lg" className="py-24">
                <div className="mb-16">
                    <Typography variant="h3" className="text-3xl font-bold">
                        Why <span className="text-green-500">Zero Gas</span> matters ?
                    </Typography>
                </div>

                <Grid container spacing={8}>
                    <Grid item xs={12} md={6}>
                        <div className="flex flex-col items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-2">
                                <Globe className="text-black" size={24} />
                            </div>
                            <Typography variant="h5" className="text-green-500 font-bold">Mass adoption</Typography>
                            <Typography className="text-gray-400">Eliminates the single biggest friction point for new users - acquiring and managing gas tokens.</Typography>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className="flex flex-col items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-2">
                                <DollarSign className="text-black" size={24} />
                            </div>
                            <Typography variant="h5" className="text-green-500 font-bold">Predictable costs</Typography>
                            <Typography className="text-gray-400">Enterprises and institutions can onboard without volatile gas fees impacting their operational budgets.</Typography>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className="flex flex-col items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-2">
                                <Users className="text-black" size={24} />
                            </div>
                            <Typography variant="h5" className="text-green-500 font-bold">Higher participation and liquidity</Typography>
                            <Typography className="text-gray-400">When users don't worry about gas, they operate more freely and frequently. This increases overall platform engagement.</Typography>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className="flex flex-col items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-2">
                                <ShieldCheck className="text-black" size={24} />
                            </div>
                            <Typography variant="h5" className="text-green-500 font-bold">Ideal for real-world and regulated assets</Typography>
                            <Typography className="text-gray-400">With zero gas, you can enforce strict access controls and compliance rules without penalizing authorized users.</Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    );
};

export default ZeroGas;
