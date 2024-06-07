import React from 'react';
import { Box, Text, VStack, SimpleGrid, Icon } from '@chakra-ui/react';
import { FaHandHoldingUsd, FaChartLine, FaClipboardCheck } from 'react-icons/fa';

const SCPIRisks = () => {
  const risks = [
    {
      icon: FaHandHoldingUsd,
      title: "Risque de perte en capital",
      description: "Les valeurs des parts de SCPI sont soumises aux variations du marché de l’immobilier",
    },
    {
      icon: FaChartLine,
      title: "Revenus non garantis",
      description: "Les loyers distribués peuvent varier à la hausse comme à la baisse",
    },
    {
      icon: FaClipboardCheck,
      title: "Risque de liquidité",
      description: "La SCPI est un placement peu liquide. La revente peut être plus ou moins facile en fonction de l’évolution du marché immobilier",
    },
  ];

  return (
    <Box bg="white" py={10} px={6} borderRadius="lg" boxShadow="lg" mx={4}>
      <VStack spacing={8} maxW="1200px" mx="auto">
        <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="blue.900">
          Les risques des SCPI
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="100%">
          {risks.map((risk, index) => (
            <VStack key={index} spacing={4} textAlign="center" bg="blue.50" p={6} borderRadius="lg" boxShadow="md">
              <Icon as={risk.icon} w={10} h={10} color="orange.400" />
              <Text fontSize="xl" fontWeight="bold" color="blue.900">{risk.title}</Text>
              <Text fontSize="md" color="gray.700">{risk.description}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default SCPIRisks;
