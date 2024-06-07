// src/routes/assurance_vie/AssuranceViePage.jsx
import React from 'react';
import { Box, Stack } from '@chakra-ui/react';

import MultiStepForm from './components/MultiStepForm';


const Subscribe = () => {
  return (
    <Box>
      <Stack spacing={8} m={10}>
        <MultiStepForm/>
      </Stack>
    </Box>
  );
};

export default Subscribe;