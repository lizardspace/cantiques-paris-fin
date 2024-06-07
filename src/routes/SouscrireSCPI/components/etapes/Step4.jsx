// src/routes/SouscrireSCPI/etapes/Step4.jsx
import React, { useState } from 'react';
import { Box, Button, Input, VStack, Text, HStack, Icon } from '@chakra-ui/react';
import { MdArrowBack } from "react-icons/md";

const Step4 = ({ prevStep, nextStep }) => {
  const [birthDate, setBirthDate] = useState('');

  const handleInputChange = (e) => {
    setBirthDate(e.target.value);
  };

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Quelle est votre date de naissance ?
      </Text>
      <VStack spacing={4} mb={6}>
        <Input
          placeholder="JJ/MM/AAAA"
          value={birthDate}
          onChange={handleInputChange}
          size="lg"
        />
      </VStack>
      <HStack justifyContent="space-between">
        <Button onClick={prevStep} variant="link" leftIcon={<Icon as={MdArrowBack} />}>
          Précédent
        </Button>
        <Button
          colorScheme="orange"
          onClick={nextStep}
          isDisabled={!birthDate} // Disable button if birthDate is empty
        >
          Continuer
        </Button>
      </HStack>
    </Box>
  );
};

export default Step4;
