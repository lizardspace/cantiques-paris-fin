// src/routes/assurance_vie/AssuranceViePage.jsx
import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import Features from './components/Features';
import AccordionComponent from './components/AccordionComponent';


const Subscribe = () => {
  return (
    <Box>
      <Stack spacing={8} m={10}>
        <Features/>
        <AccordionComponent/>
      </Stack>
    </Box>
  );
};

export default Subscribe;
