import React, { useState } from 'react';
import { Box, Heading, Button, VStack, Text, Flex } from '@chakra-ui/react';

const Step13 = ({ prevStep, nextStep }) => {
  const [selectedContract, setSelectedContract] = useState('');

  const contracts = [
    'Linxea Avenir 2',
    'Linxea SPIRIT 2',
    'Linxea Vie',
    'Linxea Zen'
  ];

  const handleContractClick = (contract) => {
    setSelectedContract(contract);
  };

  return (
    <Box p={5} textAlign="center" maxW="800px" mx="auto">
      <Heading as="h2" size="lg" mb={6}>
        Choisissez un contrat
      </Heading>
      <VStack spacing={4} mb={6}>
        {contracts.map((contract) => (
          <Button
            key={contract}
            onClick={() => handleContractClick(contract)}
            variant={selectedContract === contract ? 'solid' : 'outline'}
            width="full"
          >
            {contract}
          </Button>
        ))}
      </VStack>
      <Flex justifyContent="center" mb={4}>
        <Button variant="outline" colorScheme="orange">
          Choisir un autre type de placement
        </Button>
      </Flex>
      <Flex justifyContent="space-between">
        <Button onClick={prevStep} variant="outline" colorScheme="orange">
          Précédent
        </Button>
        <Button colorScheme="orange" onClick={nextStep} isDisabled={!selectedContract}>
          Continuer
        </Button>
      </Flex>
    </Box>
  );
};

export default Step13;
