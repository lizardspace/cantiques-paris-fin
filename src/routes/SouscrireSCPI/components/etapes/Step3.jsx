// src/routes/SouscrireSCPI/etapes/Step3.jsx
import React, { useState } from 'react';
import { Box, Button, VStack, Text, HStack, Icon, Alert, AlertIcon } from '@chakra-ui/react';
import { MdArrowBack } from "react-icons/md";

const Step3 = ({ prevStep, nextStep }) => {
  const [selectedOption, setSelectedOption] = useState('Pour moi');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Pour qui souhaitez-vous souscrire ?
      </Text>
      <VStack spacing={4} mb={6}>
        <Button
          size="lg"
          w="100%"
          variant={selectedOption === 'Pour moi' ? 'solid' : 'outline'}
          colorScheme={selectedOption === 'Pour moi' ? 'blue' : 'gray'}
          onClick={() => handleOptionClick('Pour moi')}
        >
          Pour moi
        </Button>
        <Button
          size="lg"
          w="100%"
          variant={selectedOption === 'Pour mon conjoint et moi' ? 'solid' : 'outline'}
          colorScheme={selectedOption === 'Pour mon conjoint et moi' ? 'blue' : 'gray'}
          onClick={() => handleOptionClick('Pour mon conjoint et moi')}
        >
          Pour mon conjoint et moi
        </Button>
        <Button
          size="lg"
          w="100%"
          variant={selectedOption === 'Pour mon enfant mineur' ? 'solid' : 'outline'}
          colorScheme={selectedOption === 'Pour mon enfant mineur' ? 'blue' : 'gray'}
          onClick={() => handleOptionClick('Pour mon enfant mineur')}
        >
          Pour mon enfant mineur
        </Button>
      </VStack>
      <Alert status="info" mb={6}>
        <AlertIcon />
        Les co-souscriptions sont possibles pour les couples mariés ou pacsés ayant la même résidence fiscale.
      </Alert>
      <HStack justifyContent="space-between">
        <Button onClick={prevStep} variant="link" leftIcon={<Icon as={MdArrowBack} />}>
          Précédent
        </Button>
        <Button colorScheme="orange" onClick={nextStep}>
          Continuer
        </Button>
      </HStack>
    </Box>
  );
};

export default Step3;
