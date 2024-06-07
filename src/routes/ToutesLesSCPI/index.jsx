// src/routes/assurance_vie/AssuranceViePage.jsx
import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import SCPIRendement from './components/SCPIRendement';


const ToutesLesSCPI = () => {
  return (
    <Box>
      <Stack spacing={8} m={10}>
        <SCPIRendement/>
      </Stack>
    </Box>
  );
};

export default ToutesLesSCPI;
