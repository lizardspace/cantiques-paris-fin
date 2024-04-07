import React from 'react';
import { Box, Flex, Text, Button, VStack, Image } from '@chakra-ui/react';
import { FiCheckCircle } from 'react-icons/fi';

// SVG Line Chart
const MiniChart = () => {
  return (
    <Image
      src="public/images/agavic/undraw_growth_analytics_re_pyxf.svg"
      alt="Growth Analytics"
      borderRadius="md"
      mb={4}
    />
  );
};

// Simulation Button and Text Component
const SimulationButton = () => {
  return (
    <VStack align="center" p={8} spacing={6} bg="#FFA500" borderRadius="md" width="300px" boxShadow="lg">
      <Box as={FiCheckCircle} boxSize="48px" color="white" />
      <Text fontWeight="bold" fontSize="2xl">L'assurance-vie :</Text>
      <Text fontSize="lg" textAlign="center">
        Nous sélectionnons pour vous les meilleurs contrats du marché : des frais bas et un large choix de supports
      </Text>
      <Button colorScheme="orange" size="lg">Faire votre simulation</Button>
    </VStack>
  );
};

// Main AssuranceVie component
const AssuranceVie = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-around" p={8} bg="#F7FAFC" borderRadius="md" boxShadow="lg">
      <SimulationButton />
      <MiniChart />
    </Flex>
  );
};

export default AssuranceVie;
