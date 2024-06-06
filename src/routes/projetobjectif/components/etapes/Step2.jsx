import React, { useState } from 'react';
import { Box, Button, VStack, Heading, Text, Input, Flex, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';

const Step2 = ({ prevStep, nextStep }) => {
  const [amount, setAmount] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    setIsValid(value >= 100);
  };

  return (
    <Box p={5}>
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Quel montant souhaitez-vous placer pour commencer ?
      </Heading>
      <VStack spacing={4} mb={6}>
        <Input
          placeholder="Minimum : 100"
          value={amount}
          onChange={handleChange}
          type="number"
          min="100"
        />
        <Alert status="info">
          <AlertIcon />
          <AlertDescription>
            Le montant indiqué de votre versement initial doit être impérativement disponible sur le compte bancaire associé à votre souscription.
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

export default Step2;
