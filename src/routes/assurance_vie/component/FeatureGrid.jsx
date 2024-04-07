import React from 'react';
import { Box, SimpleGrid, Text, Icon, Center, VStack } from '@chakra-ui/react';
import { AiOutlineDollar, AiOutlinePieChart, AiOutlineCustomerService, AiOutlineCheckCircle } from 'react-icons/ai';

// Subcomponent for each feature
const Feature = ({ icon, title, description }) => {
  return (
    <Center p={5} shadow="md" borderWidth="1px" borderRadius="md" flexDirection="column">
      <Icon as={icon} w={10} h={10} color="orange.400" />
      <VStack spacing={2}>
        <Text fontWeight="bold">{title}</Text>
        <Text textAlign="center">{description}</Text>
      </VStack>
    </Center>
  );
};

// Main component
const FeaturesGrid = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
      <Feature
        icon={AiOutlineDollar}
        title="Des frais parmi les plus bas du marché"
        description="0.6% de frais d’entrée, de versement et d’arbitrage en ligne *Hors SCPI, SCI, trackers et actions. D'autres frais peuvent s'appliquer."
      />
      <Feature
        icon={AiOutlinePieChart}
        title="Des fonds euros dynamiques et des supports innovants"
        description="OPCVM, ETF, Private Equity, SCPI, etc."
      />
      <Feature
        icon={AiOutlineCustomerService}
        title="Conseil"
        description="des conseillers en investissement financier 5/7 de 09h à 18h"
      />
      <Feature
        icon={AiOutlineCheckCircle}
        title="Simplicité"
        description="souscription et gestion 100% en ligne"
      />
    </SimpleGrid>
  );
};

export default FeaturesGrid;
