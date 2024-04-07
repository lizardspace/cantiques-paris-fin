import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Image,
  VStack,
  HStack
} from '@chakra-ui/react';

// Component for displaying the simulation button and text
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

// Component to display the image and the account balance
const AccountBalance = () => {
  return (
    <Flex direction="column" justify="center" align="center" ml={10}>
      <Image src="/images/agavic/assurancevie1.jpg" alt="Assurance Vie" boxSize="300px" objectFit="cover" borderRadius="md" />
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

// Main component
const InvestmentComponent = () => {
  return (
    <Box maxW="container.xl" mx="auto" p={5} boxShadow="md" bg="white">
      <Flex direction={{ base: 'column', md: 'row' }} align="center">
        <SimulationButton />
        <AccountBalance />
      </Flex>
    </Box>
  );
};

export default InvestmentComponent;
