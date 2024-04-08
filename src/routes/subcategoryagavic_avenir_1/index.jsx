// src/routes/assurance_vie/AssuranceViePage.jsx
import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import InvestmentComponentAvenir from './components/InvestmentComponentAvenir';


const AssuranceViePage = () => {
  return (
    <Box>
      <Stack spacing={8} m={10}>
        <InvestmentComponentAvenir/>
      </Stack>
    </Box>
  );
};

export default AssuranceViePage;
