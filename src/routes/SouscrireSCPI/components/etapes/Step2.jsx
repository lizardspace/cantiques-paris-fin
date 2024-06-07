// src/routes/SouscrireSCPI/etapes/Step2.jsx
import React from 'react';
import { Box, Button, VStack, Text, HStack } from '@chakra-ui/react';

const Step2 = ({ prevStep, nextStep }) => {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Vous souhaitez souscrire
      </Text>
      <VStack spacing={4}>
        <Button size="lg" w="100%" variant="outline" onClick={nextStep}>
          En pleine propriété
        </Button>
        <Button size="lg" w="100%" variant="outline" onClick={nextStep}>
          En démembrement
        </Button>
        <Button size="lg" w="100%" variant="outline" onClick={nextStep}>
          Je ne sais pas encore
        </Button>
      </VStack>
      <HStack mt={6} justifyContent="space-between">
        <Button onClick={prevStep} variant="link">
          ← Précédent
        </Button>
      </HStack>
    </Box>
  );
};

export default Step2;
