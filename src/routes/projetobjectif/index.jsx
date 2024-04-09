// src/routes/assurance_vie/AssuranceViePage.jsx
import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import ProgressBar from './components/ProgressBarBis';


const ProjetObjectif = () => {
  return (
    <Box>
      <Stack spacing={8} m={10}>
        <ProgressBar/>
      </Stack>
    </Box>
  );
};

export default ProjetObjectif;
