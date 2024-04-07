import React from 'react';
import { Box, Flex, Text, Button, VStack, Image, Icon } from '@chakra-ui/react';
import { FiCheckCircle } from 'react-icons/fi';

// SVG Line Chart
const MiniChart = () => {
  return (
    <Image
      src="public/images/agavic/undraw_growth_analytics_re_pyxf.svg"
      alt="Growth Analytics"
      borderRadius="md"
      mb={2} // Ajuster la marge inférieure pour réduire l'espace entre le SVG et les autres composants
      maxHeight="150px" // Définir une hauteur maximale pour réduire la taille du SVG
    />
  );
};

// Simulation Button and Text Component
const SimulationButton = () => {
  return (
    <VStack align="center" p={8} spacing={6} bg="#3182ce" borderRadius="xl" width="300px" boxShadow="lg">
      <Icon as={FiCheckCircle} boxSize="48px" color="white" />
      <Text fontWeight="bold" fontSize="2xl" color="white">L'assurance-vie 💼</Text>
      <Text fontSize="lg" textAlign="center" color="white">
        Nous sélectionnons pour vous les meilleurs contrats du marché : des frais bas et un large choix de supports
      </Text>
      <Button colorScheme="orange" size="lg">Faire votre simulation</Button>
    </VStack>
  );
};

// Main InvestmentComponent component
const InvestmentComponent = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-around" p={8} bg="#F7FAFC" borderRadius="xl" boxShadow="xl">
      <SimulationButton />
      <MiniChart />
    </Flex>
  );
};

export default InvestmentComponent;
