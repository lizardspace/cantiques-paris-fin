import React, { useState } from 'react';
import { Box, Button, VStack, Heading, Flex } from '@chakra-ui/react';

const Step9 = ({ prevStep, nextStep }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    "Pour moi",
    "Pour mon conjoint et moi",
    "Pour mon enfant mineur",
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Box p={5}>
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Pour qui souhaitez-vous souscrire ?
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

export default Step9;
