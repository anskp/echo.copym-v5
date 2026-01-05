import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Globe, DollarSign, Users, ShieldCheck } from 'lucide-react';

const WhyItMatters = () => {
    return (
        <Container maxWidth="lg" className="py-24">
            <div className="mb-16">
                <div className="relative w-fit">
                    <h2 className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        <span className="text-white">Why </span>
                        <span className="text-[#10b981]">Zero Gas</span>
                        <span className="text-white"> matters ?</span>
                    </h2>
                    <div className="absolute bottom-0 left-0 bg-white/20" style={{ width: 'calc(100% + 40px)', height: '1px' }}></div>
                </div>
            </div>

            <Grid container spacing={8}>
                <Grid item xs={12} md={6}>
                    <div className="flex flex-col items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-2">
                            <Globe className="text-black" size={24} />
                        </div>
                        <Typography variant="h5" className="text-lg md:text-xl text-green-500 font-bold uppercase" style={{ fontFamily: 'Palanquin, sans-serif' }}>Mass adoption</Typography>
                        <Typography className="text-gray-400 text-sm md:text-base" style={{ fontFamily: 'Palanquin, sans-serif' }}>Eliminates the single biggest friction point for new users - acquiring and managing gas tokens.</Typography>
                    </div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <div className="flex flex-col items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-2">
                            <DollarSign className="text-black" size={24} />
                        </div>
                        <Typography variant="h5" className="text-lg md:text-xl text-green-500 font-bold uppercase" style={{ fontFamily: 'Palanquin, sans-serif' }}>Predictable costs</Typography>
                        <Typography className="text-gray-400 text-sm md:text-base" style={{ fontFamily: 'Palanquin, sans-serif' }}>Enterprises and institutions can onboard without volatile gas fees impacting their operational budgets.</Typography>
                    </div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <div className="flex flex-col items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-2">
                            <Users className="text-black" size={24} />
                        </div>
                        <Typography variant="h5" className="text-lg md:text-xl text-green-500 font-bold uppercase" style={{ fontFamily: 'Palanquin, sans-serif' }}>Higher participation and liquidity</Typography>
                        <Typography className="text-gray-400 text-sm md:text-base" style={{ fontFamily: 'Palanquin, sans-serif' }}>When users don't worry about gas, they operate more freely and frequently. This increases overall platform engagement.</Typography>
                    </div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <div className="flex flex-col items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-2">
                            <ShieldCheck className="text-black" size={24} />
                        </div>
                        <Typography variant="h5" className="text-lg md:text-xl text-green-500 font-bold uppercase" style={{ fontFamily: 'Palanquin, sans-serif' }}>Ideal for real-world and regulated assets</Typography>
                        <Typography className="text-gray-400 text-sm md:text-base" style={{ fontFamily: 'Palanquin, sans-serif' }}>With zero gas, you can enforce strict access controls and compliance rules without penalizing authorized users.</Typography>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default WhyItMatters;
