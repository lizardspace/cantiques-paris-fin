// src/routes/assurance_vie/AssuranceViePage.jsx
import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import InvestmentComponentAvenir from './components/InvestmentComponentAvenir';
import PerformanceComponent from './components/PerformanceComponent';


const AssuranceViePage = () => {
  return (
    <Box>
      <Stack spacing={8} m={10}>
        <InvestmentComponentAvenir/>
        <PerformanceComponent/>
      </Stack>
    </Box>
  );
};

export default AssuranceViePage;
