import React from 'react';
import { Box, SimpleGrid, Text, VStack, Icon, Flex } from '@chakra-ui/react';
import { FaHandHoldingUsd, FaChartLine, FaChalkboardTeacher, FaClipboardCheck } from 'react-icons/fa';

const features = [
  {
    icon: FaHandHoldingUsd,
    title: "Offre de SCPI",
    description: "+70 SCPI sélectionnées parmi toutes les SCPI du marché",
  },
  {
    icon: FaChartLine,
    title: "Souscription en ligne",
    description: "+20 SCPI disponibles directement en ligne",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Expertise",
    description: "Un pôle de conseil immobilier à votre service",
  },
  {
    icon: FaClipboardCheck,
    title: "Sur-mesure",
    description: "Des manières d’investir adaptées à votre situation : pleine-propriété, démembrement ou crédit",
  },
];

const SCPIFeatures = () => {
  return (
    <Box bg="white" py={10}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} maxW="1200px" mx="auto" px={4}>
        {features.map((feature, index) => (
          <Flex
            key={index}
            direction="column"
            align="center"
            bg="white"
            p={6}
            borderRadius="md"
            boxShadow="md"
            transition="all 0.3s ease-in-out"
          >
            <Icon as={feature.icon} w={10} h={10} color="orange.400" mb={4} />
            <Text fontSize="lg" fontWeight="bold" color="blue.800" mb={2}>{feature.title}</Text>
            <Text fontSize="md" color="gray.600" textAlign="center">{feature.description}</Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SCPIFeatures;
