// src/routes/assurance_vie/AssuranceViePage.jsx
import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import SCPIRendement from './components/SCPIRendement';
import SCPIList from './components/SCPIList';


const ToutesLesSCPI = () => {
  return (
    <Box>
      <Stack spacing={8} m={10}>
        <SCPIRendement/>
        <SCPIList/>
      </Stack>
    </Box>
  );
};

export default ToutesLesSCPI;
