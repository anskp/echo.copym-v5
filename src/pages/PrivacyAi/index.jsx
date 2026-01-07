import React from 'react';
import { Box } from '@mui/material';
import HeroNew from './sections/HeroNew';
import HowItWorks from './sections/HowItWorks'; 


const PrivacyAi = () => {
    return (
        <Box className="bg-white text-white selection:bg-green-500 selection:text-white">

            <HeroNew/>
            <HowItWorks/>
            
        </Box>
    );
};

export default PrivacyAi;
