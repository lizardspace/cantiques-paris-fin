import React, { useState } from 'react';
import { Box, Button, VStack, Heading, Text, Input, Flex, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';

const Step6 = ({ prevStep, nextStep }) => {
  const [birthdate, setBirthdate] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setBirthdate(value);
    // Simple date format validation (DD/MM/YYYY)
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    setIsValid(regex.test(value));
  };

  return (
    <Box p={5}>
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Quelle est votre date de naissance ?
      </Heading>
      <VStack spacing={4} mb={6}>
        <Input
          placeholder="JJ/MM/AAAA"
          value={birthdate}
          onChange={handleChange}
        />
        <Alert status="info">
          <AlertIcon />
          <AlertDescription>
            Nous vous posons cette question pour vous proposer un produit d'épargne en cohérence avec votre âge.
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

export default Step6;