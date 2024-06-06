import React, { useState } from 'react';
import { Box, Button, VStack, Heading, Text, Input, Flex, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';

const Step3 = ({ prevStep, nextStep }) => {
  const [amount, setAmount] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    setIsValid(value >= 0);
  };

  return (
    <Box p={5}>
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Quel montant souhaitez-vous verser chaque mois ?
      </Heading>
      <VStack spacing={4} mb={6}>
        <Input
          placeholder="Minimum : 0"
          value={amount}
          onChange={handleChange}
          type="number"
          min="0"
        />
        <Alert status="info">
          <AlertIcon />
          <AlertDescription>
            Optez pour la simplicité ! En investissant chaque mois, vous épargnez progressivement, sans y penser. Vous êtes automatiquement prélevé(e) du montant que vous souhaitez, modifiable à tout moment, et toujours sans frais ! Vous pouvez par exemple commencer avec 100€.
          </AlertDescription>
        </Alert>
      </VStack>
      <Flex justifyContent="space-between">
        <Button onClick={prevStep}>
          Précédent
        </Button>
        <Button onClick={nextStep} isDisabled={!isValid}>
          Continuer
        </Button>
      </Flex>
    </Box>
  );
};

export default Step3;
