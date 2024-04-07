// src/routes/assurance_vie/AssuranceViePage.jsx
import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import FeatureGrid from './component/FeatureGrid';
import InvestmentComponent from './component/InvestmentComponent';

const AssuranceViePage = () => {
  return (
    <Box>
      <Stack spacing={8} m={10}>
        <InvestmentComponent />
        <FeatureGrid />
      </Stack>
    </Box>
  );
};

export default AssuranceViePage;
