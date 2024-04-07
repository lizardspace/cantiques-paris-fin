// src/routes/assurance_vie/AssuranceViePage.jsx
import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import FeatureGrid from './component/FeatureGrid';
import InvestmentComponent from './component/InvestmentComponent';
import ImpactBanner from './component/ImpactBanner';
import InfoBanner from './component/InfoBanner';
import SavingsSimulator from './component/SavingsSimulator';
import SubscriptionComponent from './component/SubscriptionComponent';
import FundPerformanceCard from './component/FundPerformanceCard';
import ManagementModesComponent from './component/ManagementModesComponent';
import InfoAlert from './component/InfoAlert';
import InsuranceContractsGrid from './component/InsuranceContractsGrid';
import FinancialServicesComponent from './component/FinancialServicesComponent';
import InsuranceRisksComponent from './component/InsuranceRisksComponent';
import InsuranceAccordion from './component/InsuranceAccordion';

const AssuranceViePage = () => {
  return (
    <Box>
      <Stack spacing={8} m={10}>
        <InvestmentComponent />
        <FeatureGrid />
        <ImpactBanner />
        <InfoBanner/>
        <SavingsSimulator/>
        <FundPerformanceCard/>
        <ManagementModesComponent/>
        <InfoAlert/>
        <InsuranceContractsGrid/>
        <FinancialServicesComponent/>
        <InsuranceRisksComponent/>
        <InsuranceAccordion/>
      </Stack>
    </Box>
  );
};

export default AssuranceViePage;
