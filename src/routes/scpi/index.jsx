import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import SCPIComponent from './components/SCPIComponent';



const SCPI = () => {
  return (
    <Box>
      <Stack spacing={8} m={10}>
        <SCPIComponent/>
      </Stack>
    </Box>
  );
};

export default SCPI;