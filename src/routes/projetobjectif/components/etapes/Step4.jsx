import React, { useState } from 'react';
import { Box, Button, VStack, Heading, Text, Flex, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';

const Step4 = ({ prevStep, nextStep }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    'Moins de 2 ans',
    '2 à 8 ans',
    '9 à 15 ans',
    'Plus de 15 ans',
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Box p={5}>
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Dans combien de temps envisagez-vous de récupérer cet argent ?
      </Heading>
      <VStack spacing={4} mb={6}>
        {options.map((option) => (
          <Button
            key={option}
            onClick={() => handleOptionClick(option)}
            variant={selectedOption === option ? 'solid' : 'outline'}
            width="full"
          >
            {option}
          </Button>
        ))}
        <Alert status="info">
          <AlertIcon />
          <AlertDescription>
            L'horizon de placement correspond à la durée pendant laquelle votre épargne sera mobilisée. 
            Cette information va nous permettre de vous proposer un produit d'épargne en accord avec votre projet.
          </AlertDescription>
        </Alert>
      </VStack>
      <Flex justifyContent="space-between">
        <Button onClick={prevStep}>
          Précédent
        </Button>
        <Button onClick={nextStep} isDisabled={!selectedOption}>
          Continuer
        </Button>
      </Flex>
    </Box>
  );
};

export default Step4;
