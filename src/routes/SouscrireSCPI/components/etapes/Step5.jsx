// src/routes/SouscrireSCPI/etapes/Step5.jsx
import React, { useState } from 'react';
import { Box, Button, Input, VStack, Text, HStack, Icon, Select, Alert, AlertIcon } from '@chakra-ui/react';
import { MdArrowBack } from "react-icons/md";

const Step5 = ({ prevStep, nextStep }) => {
  const [nationality, setNationality] = useState('Française');
  const [isResident, setIsResident] = useState(null);

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const handleResidentChange = (value) => {
    setIsResident(value);
  };

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Quelle est votre nationalité ?
      </Text>
      <VStack spacing={4} mb={6}>
        <HStack spacing={2} w="100%">
          <Select
            value={nationality}
            onChange={handleNationalityChange}
            size="lg"
            flex="1"
          >
            <option value="Française">Française</option>
            <option value="Autre">Autre</option>
            {/* Add more options as needed */}
          </Select>
          <Icon as={MdArrowBack} boxSize={6} />
        </HStack>
        <Text fontSize="xl" fontWeight="bold" mt={4}>
          Êtes-vous résident(e) fiscal(e) français(e) ?
        </Text>
        <HStack spacing={4} w="100%">
          <Button
            flex="1"
            colorScheme={isResident === true ? 'blue' : 'gray'}
            onClick={() => handleResidentChange(true)}
          >
            Oui
          </Button>
          <Button
            flex="1"
            colorScheme={isResident === false ? 'blue' : 'gray'}
            onClick={() => handleResidentChange(false)}
          >
            Non
          </Button>
        </HStack>
        <Alert status="info" borderRadius="md" mt={4}>
          <AlertIcon />
          Si vous payez vos impôts en France (DOM inclus) vous êtes résident(e) fiscal(e) français(e)
        </Alert>
      </VStack>
      <HStack justifyContent="space-between">
        <Button onClick={prevStep} variant="link" leftIcon={<Icon as={MdArrowBack} />}>
          Précédent
        </Button>
        <Button
          colorScheme="orange"
          onClick={nextStep}
          isDisabled={isResident === null} // Disable button if resident status is not selected
        >
          Continuer
        </Button>
      </HStack>
    </Box>
  );
};

export default Step5;
