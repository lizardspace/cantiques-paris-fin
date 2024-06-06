import React, { useState } from 'react';
import { Box, Heading, Button, VStack, Text, Flex } from '@chakra-ui/react';

const Step13 = ({ prevStep, nextStep }) => {
  const [selectedContract, setSelectedContract] = useState('');
  const [view, setView] = useState('contract'); // View state: contract, placement, per

  const contracts = [
    'Linxea Avenir 2',
    'Linxea SPIRIT 2',
    'Linxea Vie',
    'Linxea Zen'
  ];

  const placements = [
    'Capitalisation',
    'Assurance vie',
    'PEA',
    'PER',
    'SCPI'
  ];

  const perContracts = [
    'Linxea PER',
    'Linxea Spirit PER',
    'Suravenir PER'
  ];

  const handleContractClick = (contract) => {
    setSelectedContract(contract);
  };

  const handlePlacementClick = (placement) => {
    if (placement === 'PER') {
      setView('per');
    } else {
      setSelectedContract(placement);
    }
  };

  return (
    <Box p={5} textAlign="center" maxW="800px" mx="auto">
      {view === 'contract' ? (
        <>
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
            <Button variant="outline" colorScheme="orange" onClick={() => setView('placement')}>
              Choisir un autre type de placement
            </Button>
          </Flex>
        </>
      ) : view === 'placement' ? (
        <>
          <Heading as="h2" size="lg" mb={6}>
            Choisissez un autre type de placement
          </Heading>
          <VStack spacing={4} mb={6}>
            {placements.map((placement) => (
              <Button
                key={placement}
                onClick={() => handlePlacementClick(placement)}
                variant={selectedContract === placement ? 'solid' : 'outline'}
                width="full"
              >
                {placement}
              </Button>
            ))}
          </VStack>
          <Flex justifyContent="center" mb={4}>
            <Button variant="outline" colorScheme="orange" onClick={() => setView('contract')}>
              Retourner à la sélection de contrat
            </Button>
          </Flex>
        </>
      ) : (
        <>
          <Heading as="h2" size="lg" mb={6}>
            Choisissez un contrat
          </Heading>
          <VStack spacing={4} mb={6}>
            {perContracts.map((perContract) => (
              <Button
                key={perContract}
                onClick={() => handleContractClick(perContract)}
                variant={selectedContract === perContract ? 'solid' : 'outline'}
                width="full"
              >
                {perContract}
              </Button>
            ))}
          </VStack>
          <Flex justifyContent="center" mb={4}>
            <Button variant="outline" colorScheme="orange" onClick={() => setView('placement')}>
              Retourner à la sélection de type de placement
            </Button>
          </Flex>
        </>
      )}
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
