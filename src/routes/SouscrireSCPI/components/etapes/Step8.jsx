// src/routes/SouscrireSCPI/etapes/Step8.jsx
import React from 'react';
import { Box, Button, VStack, Text, HStack, Icon } from '@chakra-ui/react';
import { MdArrowBack } from "react-icons/md";

const Step8 = ({ prevStep, nextStep }) => {
  return (
    <Box textAlign="center">
      <VStack spacing={6} mb={6}>
        <Text fontSize="5xl">🎉🥳</Text>
        <Text fontSize="3xl" fontWeight="bold">
          Bravo !
        </Text>
        <Text fontSize="lg" color="gray.600">
          Vous allez pouvoir souscrire vos SCPI en ligne.
        </Text>
        <Text fontSize="md" color="gray.600">
          Pour cela et afin de sauvegarder vos réponses, veuillez vous connecter ou créer votre compte Linxea.
        </Text>
      </VStack>
      <HStack justifyContent="space-between">
        <Button onClick={prevStep} variant="link" leftIcon={<Icon as={MdArrowBack} />}>
          Précédent
        </Button>
        <Button colorScheme="orange" onClick={nextStep}>
          Suivant
        </Button>
      </HStack>
    </Box>
  );
};

export default Step8;
