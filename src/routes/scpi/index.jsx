import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import SCPIComponent from './components/SCPIComponent';
import SCPIFeatures from './components/SCPIFeatures';
import SCPIDescription from './components/SCPIDescription';
import ForestAndViticultureComponent from './components/ForestAndViticultureComponent';
import InvestmentOptions from './components/InvestmentOptions';
import SCPIList from './components/SCPIList';
import SCPIAdvantages from './components/SCPIAdvantages';
import SCPIRisks from './components/SCPIRisks';
import TrustSection from './components/TrustSection';
import SCPINews from './components/SCPINews';
import SCPResources from './components/SCPResources';
import SCPIQuestions from './components/SCPIQuestions';
import SupportSection from './components/SupportSection';



const SCPI = () => {
  return (
    <Box>
      <Stack spacing={8} m={10}>
        <SCPIComponent/>
        <SCPIFeatures/>
        <SCPIDescription/>
        <ForestAndViticultureComponent/>
        <InvestmentOptions/>
        <SCPIList/>
        <SCPIAdvantages/>
        <SCPIRisks/>
        <TrustSection/>
        <SCPINews/>
        <SCPResources/>
        <SCPIQuestions/>
        <SupportSection/>
      </Stack>
    </Box>
  );
};

export default SCPI;