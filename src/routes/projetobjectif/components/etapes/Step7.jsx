import React, { useState } from 'react';
import { Box, Button, VStack, Heading, Text, Flex, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';

const Step7 = ({ prevStep, nextStep }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Box p={5}>
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Êtes-vous de nationalité française et résident(e) fiscal(e) en France ?
      </Heading>
      <VStack spacing={4} mb={6}>
        <Button
          onClick={() => handleOptionClick('Oui')}
          variant={selectedOption === 'Oui' ? 'solid' : 'outline'}
          width="full"
        >
          Oui
        </Button>
        <Button
          onClick={() => handleOptionClick('Non')}
          variant={selectedOption === 'Non' ? 'solid' : 'outline'}
          width="full"
        >
          Non
        </Button>
        <Alert status="info">
          <AlertIcon />
          <AlertDescription>
            Si vous payez vos impôts en France (DOM inclus) vous êtes résident(e) fiscal(e) français(e).
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

export default Step7;
