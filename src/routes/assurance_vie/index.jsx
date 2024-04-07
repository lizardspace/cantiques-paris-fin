import React from 'react';
import { Box, Flex, Heading, Text, Button, Image, VStack, HStack } from '@chakra-ui/react';

// Simulation Button and Text Component
const SimulationButton = () => {
  return (
    <VStack align="start" p={5} spacing={4} bg="orange.100" borderRadius="md">
      <Heading size="md">L'assurance-vie :</Heading>
      <Text fontSize="sm">
        Nous sélectionnons pour vous les meilleurs contrats du marché : des frais bas et un large choix de supports
      </Text>
      <Button colorScheme="orange" size="lg">Faire votre simulation</Button>
    </VStack>
  );
};

// Image and Account Balance Component
const AccountBalance = () => {
  return (
    <Flex direction="column" justify="center" align="center" ml={10}>
      <Image
        src="public/images/agavic/assurancevie1.jpg" // Replace with the correct path to your image file
        alt="Assurance Vie"
        boxSize="300px"
        objectFit="cover"
        borderRadius="md"
      />
      <Box p={5}>
        <Text fontSize="sm" color="gray.500">Evolution du contrat au 02/05/2023</Text>
        <HStack justify="space-between" w="full">
          <Text fontSize="2xl" fontWeight="bold">10 600,00 €</Text>
          <Box p={2} bg="green.200" borderRadius="md">
            <Text fontSize="sm" color="green.800">+743,00 €</Text>
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
};

// Main AssuranceVie component
const AssuranceVie = () => {
  return (
    <Box maxW="container.xl" mx="auto" p={5} boxShadow="md" bg="white">
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
        <SimulationButton />
        <AccountBalance />
      </Flex>
    </Box>
  );
};

export default AssuranceVie;
