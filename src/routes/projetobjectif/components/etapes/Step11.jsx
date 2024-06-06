import React, { useState } from 'react';
import { Box, Button, VStack, Heading, Flex, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';

const Step11 = ({ prevStep, nextStep }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    "Je refuse de prendre des risques",
    "J'accepte de prendre des risques limités",
    "J'accepte de prendre des risques",
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Box p={5}>
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Quel type d'investisseur êtes-vous ?
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
            Nous vous posons cette question pour vous proposer le meilleur produit d'épargne.
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

export default Step11;
