import React, { useState } from 'react';
import { Box, Heading, Button, VStack, Text, Flex, Link } from '@chakra-ui/react';

const Step13 = ({ prevStep, nextStep }) => {
  const [selectedContract, setSelectedContract] = useState('');
  const [view, setView] = useState('contract'); // View state: contract, placement, per, unavailable

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
    } else if (placement === 'Assurance vie') {
      setView('contract');
    } else {
      setView('unavailable');
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
      ) : view === 'per' ? (
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
      ) : (
        <>
          <Heading as="h2" size="lg" mb={4} color="red.500">
            Aïe !
          </Heading>
          <Text mb={6}>
            La souscription en ligne n'est pas ouverte aux PEA (mais on y travaille...).
            <br />
            Vous pouvez cependant souscrire à un contrat PEA en téléchargeant un kit de souscription papier.
          </Text>
          <Button colorScheme="orange" mb={6}>
            Contactez-nous
          </Button>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Text fontWeight="bold" mb={2}>
              Besoin d'aide ?
            </Text>
            <Link color="orange.500" href="#">
              Contactez-nous en ligne
            </Link>
            <Text>
              ou par téléphone : 01 45 67 34 22
              <br />
              du lundi au vendredi de 9h à 18h sans interruption.
            </Text>
          </Box>
          <Flex justifyContent="space-between" mt={6}>
            <Button onClick={() => setView('placement')} variant="outline" colorScheme="orange">
              Précédent
            </Button>
          </Flex>
        </>
      )}
      {view !== 'unavailable' && (
        <Flex justifyContent="space-between">
          <Button onClick={prevStep} variant="outline" colorScheme="orange">
            Précédent
          </Button>
          <Button colorScheme="orange" onClick={nextStep} isDisabled={!selectedContract}>
            Continuer
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default Step13;
