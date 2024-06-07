import React from 'react';
import { Box, Button, Text, VStack, HStack, Link, Flex } from '@chakra-ui/react';
import { FaCalculator } from 'react-icons/fa';

const InvestmentOptions = () => {
  return (
    <Box bg="white" py={10} px={6} borderRadius="lg" boxShadow="lg" mx={4}>
      <VStack spacing={8} maxW="1200px" mx="auto">
        <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="blue.900">
          4 manières pour investir en SCPI
        </Text>
        <Flex direction={{ base: 'column', lg: 'row' }} spacing={6} w="100%">
          <VStack align="start" spacing={4} flex="1">
            <Text fontSize="xl" fontWeight="bold" color="blue.900">Pleine-propriété</Text>
            <Text fontSize="md" color="gray.700">
              Acheter des parts de SCPI en pleine-propriété vous permet de générer des revenus complémentaires immédiatement.
            </Text>
          </VStack>
          <VStack align="start" spacing={4} flex="1">
            <Text fontSize="xl" fontWeight="bold" color="blue.900">Nue-propriété</Text>
            <Text fontSize="md" color="gray.700">
              Acheter en nue-propriété (démembrement) temporaire vous fait bénéficier d’une décote sur le prix d’achat des parts de SCPI. Pendant une durée choisie, vous ne touchez pas de loyer. À l’échéance, vous percevez les loyers sur un nombre plus important de parts.
            </Text>
            <Link color="orange.400" href="#" fontSize="sm" fontWeight="bold">En savoir plus</Link>
            <HStack spacing={2} align="center">
              <FaCalculator color="orange.400" />
              <Link color="orange.400" href="#" fontSize="sm" fontWeight="bold">Simulateur Nue-propriété</Link>
            </HStack>
          </VStack>
          <VStack align="start" spacing={4} flex="1">
            <Text fontSize="xl" fontWeight="bold" color="blue.900">Acheter à crédit</Text>
            <Text fontSize="md" color="gray.700">
              Acheter vos parts de SCPI à crédit vous permet d’utiliser votre capacité d’emprunt et de bénéficier d'un effet de levier pour vous constituer un patrimoine immobilier !
            </Text>
            <Link color="orange.400" href="#" fontSize="sm" fontWeight="bold">En savoir plus</Link>
            <HStack spacing={2} align="center">
              <FaCalculator color="orange.400" />
              <Link color="orange.400" href="#" fontSize="sm" fontWeight="bold">Simulateur SCPI à Crédit</Link>
            </HStack>
          </VStack>
          <VStack align="start" spacing={4} flex="1" bg="blue.50" p={6} borderRadius="lg">
            <Text fontSize="xl" fontWeight="bold" color="blue.900">Assurance-vie ou PER</Text>
            <Text fontSize="md" color="gray.700">
              Acheter des SCPI en assurance-vie / PER vous permet de profiter d'une fiscalité avantageuse, de tickets d'entrée plus bas ainsi que d'une liquidité de vos parts.
            </Text>
            <Link color="orange.400" href="#" fontSize="sm" fontWeight="bold">En savoir plus</Link>
          </VStack>
        </Flex>
        <HStack spacing={4} mt={8}>
          <Button colorScheme="orange" size="lg">
            Souscrire en ligne
          </Button>
          <Button variant="outline" size="lg">
            Être contacté(e)
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default InvestmentOptions;
