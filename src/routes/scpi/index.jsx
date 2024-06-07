import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import SCPIComponent from './components/SCPIComponent';
import SCPIFeatures from './components/SCPIFeatures';
import SCPIDescription from './components/SCPIDescription';
import ForestAndViticultureComponent from './components/ForestAndViticultureComponent';
import InvestmentOptions from './components/InvestmentOptions';
import SCPIList from './components/SCPIList';



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
      </Stack>
    </Box>
  );
};

export default SCPI;