// src/routes/SouscrireSCPI/etapes/Step1.jsx
import React from 'react';
import { Box, Button, Text, VStack, HStack } from '@chakra-ui/react';

const Step1 = ({ nextStep }) => {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>Vous souhaitez souscrire</Text>
      <HStack spacing={4}>
        <Button onClick={nextStep}>À titre personnel</Button>
        <Button onClick={nextStep}>Via une société</Button>
      </HStack>
    </Box>
  );
};

export default Step1;
