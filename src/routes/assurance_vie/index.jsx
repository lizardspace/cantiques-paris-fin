import React from 'react';
import { Box, Flex, Heading, Text, Button, VStack, Badge, Image } from '@chakra-ui/react';

// SVG Line Chart
const MiniChart = () => {
  return (
    <svg width="100" height="50" viewBox="0 0 100 50">
      <polyline
        fill="none"
        stroke="#FFA500"
        strokeWidth="2"
        points="
          0,40
          20,30
          40,35
          60,20
          80,25
          100,10
        "
      />
    </svg>
  );
};

// Simulation Button and Text Component
const SimulationButton = () => {
  return (
    <VStack align="start" p={5} spacing={4} bg="orange.100" borderRadius="md">
      <Heading size="md" fontWeight="bold">L'assurance-vie :</Heading>
      <Text fontSize="sm">
        Nous sélectionnons pour vous les meilleurs contrats du marché : des frais bas et un large choix de supports
      </Text>
      <Button colorScheme="orange" size="lg">Faire votre simulation</Button>
    </VStack>
  );
};

// Image, Account Balance and Chart Component
const AccountBalance = () => {
  return (
    <Box position="relative"  h="auto">
      <Image
        src="public/images/agavic/undraw_growth_analytics_re_pyxf.svg" // New SVG image path
        alt="Growth Analytics"
        objectFit="cover"
        borderRadius="md"
        w="100%"
      />
      <Box position="absolute" top="1" right="1" p={1} bg="white" borderRadius="md">
        <Text fontSize="md" fontWeight="bold">10 600,00 €</Text>
        <Badge colorScheme="green">+743,00 €</Badge>
      </Box>
      <Box position="absolute" bottom="1" left="1" bg="white" p={1} borderRadius="md">
        <Text fontSize="xs" color="gray.500">Evolution du contrat</Text>
        <Text fontSize="xs" color="gray.500">au 02/05/2023</Text>
        <MiniChart />
      </Box>
    </Box>
  );
};

// Main AssuranceVie component
const AssuranceVie = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" p={5} bg="white" borderRadius="md" boxShadow="md">
      <SimulationButton />
      <AccountBalance />
    </Flex>
  );
};

export default AssuranceVie;