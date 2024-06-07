import React from 'react';
import { Box, Text, SimpleGrid, VStack, Checkbox } from '@chakra-ui/react';

const SCPIRendement = () => {
  return (
    <Box bg="white" py={10} px={6} borderRadius="lg" boxShadow="md" mx={4}>
      <VStack spacing={8} maxW="1200px" mx="auto" align="start">
        <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="blue.900">
          SCPI de rendement
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="100%">
          <Box>
            <Text fontSize="lg" fontWeight="bold" color="gray.700" mb={4}>
              Catégories
            </Text>
            <VStack align="start" spacing={2}>
              <Checkbox>Bureau</Checkbox>
              <Checkbox>Commerce</Checkbox>
              <Checkbox>Diversifiée</Checkbox>
              <Checkbox>Hôtellerie</Checkbox>
              <Checkbox>Logistique</Checkbox>
              <Checkbox>Résidentiel</Checkbox>
              <Checkbox>Santé</Checkbox>
            </VStack>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold" color="gray.700" mb={4}>
              Zones d'investissement
            </Text>
            <VStack align="start" spacing={2}>
              <Checkbox>Étranger</Checkbox>
              <Checkbox>France</Checkbox>
              <Checkbox>Paris / Île-de-France</Checkbox>
              <Checkbox>Régions</Checkbox>
            </VStack>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold" color="gray.700" mb={4}>
              Capitalisation
            </Text>
            <VStack align="start" spacing={2}>
              <Checkbox>&lt; 100 M €</Checkbox>
              <Checkbox>entre 100 M € et 500 M €</Checkbox>
              <Checkbox>entre 500 M et 1 Md €</Checkbox>
              <Checkbox>&gt; 1 Md €</Checkbox>
            </VStack>
          </Box>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default SCPIRendement;
