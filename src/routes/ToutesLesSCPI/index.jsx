// src/routes/assurance_vie/AssuranceViePage.jsx
import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import SCPIList from './components/SCPIList';


const ToutesLesSCPI = () => {
  return (
    <Box>
      <Stack spacing={8} m={10}>
        <SCPIList/>
      </Stack>
    </Box>
  );
};

export default ToutesLesSCPI;
