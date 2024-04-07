// src/routes/assurance_vie/AssuranceViePage.jsx
import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import FeatureGrid from './component/FeatureGrid';
import InvestmentComponent from './component/InvestmentComponent';
import ImpactBanner from './component/ImpactBanner';

const AssuranceViePage = () => {
  return (
    <Box>
      <Stack spacing={8} m={10}>
        <InvestmentComponent />
        <FeatureGrid />
        <ImpactBanner />
      </Stack>
    </Box>
  );
};

export default AssuranceViePage;
