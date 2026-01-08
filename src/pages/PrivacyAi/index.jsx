import React from 'react';
import { Box } from '@mui/material';
import HeroNew from './sections/HeroNew';
import HowItWorks from './sections/HowItWorks'; 
import Critical from './sections/Critical';

const PrivacyAi = () => {
    return (
        <Box className="bg-white text-white selection:bg-green-500 selection:text-white">

            <HeroNew/>
            <HowItWorks/>
            <Critical/>
        </Box>
    );
};

export default PrivacyAi;
