// src/routes/SouscrireSCPI/etapes/Step7.jsx
import React, { useState } from 'react';
import { Box, Button, VStack, Text, HStack, Icon } from '@chakra-ui/react';
import { MdArrowBack } from "react-icons/md";

const Step7 = ({ prevStep, nextStep }) => {
  const [isUnderLegalProtection, setIsUnderLegalProtection] = useState(null);

  const handleLegalProtectionChange = (value) => {
    setIsUnderLegalProtection(value);
  };

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Êtes-vous sous protection juridique ?
      </Text>
      <VStack spacing={4} mb={6}>
        <HStack spacing={4} w="100%">
          <Button
            flex="1"
            colorScheme={isUnderLegalProtection === true ? 'blue' : 'gray'}
            onClick={() => handleLegalProtectionChange(true)}
          >
            Oui
          </Button>
          <Button
            flex="1"
            colorScheme={isUnderLegalProtection === false ? 'blue' : 'gray'}
            onClick={() => handleLegalProtectionChange(false)}
          >
            Non
          </Button>
        </HStack>
      </VStack>
      <Text fontSize="md" color="gray.600" mb={6}>
        On entend par protection juridique sous curatelle, sous tutelle ou sous sauvegarde de justice
      </Text>
      <HStack justifyContent="space-between">
        <Button onClick={prevStep} variant="link" leftIcon={<Icon as={MdArrowBack} />}>
          Précédent
        </Button>
        <Button
          colorScheme="orange"
          onClick={nextStep}
          isDisabled={isUnderLegalProtection === null} // Disable button if legal protection status is not selected
        >
          Continuer
        </Button>
      </HStack>
    </Box>
  );
};

export default Step7;
