// src/routes/SouscrireSCPI/etapes/Step6.jsx
import React, { useState } from 'react';
import { Box, Button, VStack, Text, HStack, Icon } from '@chakra-ui/react';
import { MdArrowBack } from "react-icons/md";

const Step6 = ({ prevStep, nextStep }) => {
  const [isAmerican, setIsAmerican] = useState(null);
  const [hasUSResidency, setHasUSResidency] = useState(null);

  const handleAmericanChange = (value) => {
    setIsAmerican(value);
  };

  const handleUSResidencyChange = (value) => {
    setHasUSResidency(value);
  };

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Êtes-vous de nationalité américaine ou détenez-vous une carte verte (Green Card) en cours de validité ou un numéro d’immatriculation fiscal américain (TIN) ?
      </Text>
      <VStack spacing={4} mb={6}>
        <HStack spacing={4} w="100%">
          <Button
            flex="1"
            colorScheme={isAmerican === true ? 'blue' : 'gray'}
            onClick={() => handleAmericanChange(true)}
          >
            Oui
          </Button>
          <Button
            flex="1"
            colorScheme={isAmerican === false ? 'blue' : 'gray'}
            onClick={() => handleAmericanChange(false)}
          >
            Non
          </Button>
        </HStack>
      </VStack>
      {isAmerican !== null && (
        <>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Avez-vous un lieu de résidence personnel ou un numéro de téléphone aux États-Unis ?
          </Text>
          <VStack spacing={4} mb={6}>
            <HStack spacing={4} w="100%">
              <Button
                flex="1"
                colorScheme={hasUSResidency === true ? 'blue' : 'gray'}
                onClick={() => handleUSResidencyChange(true)}
              >
                Oui
              </Button>
              <Button
                flex="1"
                colorScheme={hasUSResidency === false ? 'blue' : 'gray'}
                onClick={() => handleUSResidencyChange(false)}
              >
                Non
              </Button>
            </HStack>
          </VStack>
        </>
      )}
      <HStack justifyContent="space-between">
        <Button onClick={prevStep} variant="link" leftIcon={<Icon as={MdArrowBack} />}>
          Précédent
        </Button>
        <Button
          colorScheme="orange"
          onClick={nextStep}
          isDisabled={hasUSResidency === null} // Disable button if US residency status is not selected
        >
          Continuer
        </Button>
      </HStack>
    </Box>
  );
};

export default Step6;
