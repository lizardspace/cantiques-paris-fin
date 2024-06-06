import React, { useState } from 'react';
import { Box, Button, VStack, Heading, Text, Flex } from '@chakra-ui/react';

const Step5 = ({ prevStep, nextStep }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    "Oui, je dois pouvoir disposer de cet argent à tout moment",
    "Oui, je dois pouvoir retirer une partie (50%) de mon argent à tout moment",
    "Non, j'ai d'autres économies disponibles rapidement",
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Box p={5}>
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Souhaitez-vous pouvoir disposer de l'argent avant l'horizon défini ?
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

export default Step5;
