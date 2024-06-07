import React from 'react';
import { Box, Button, Text, VStack, SimpleGrid, Icon } from '@chakra-ui/react';
import { FaHandHoldingUsd, FaChartLine, FaChalkboardTeacher, FaClipboardCheck } from 'react-icons/fa';

const SCPIAdvantages = () => {
  const advantages = [
    {
      icon: FaHandHoldingUsd,
      title: "Des rendements attractifs",
      description: "Le rendement annuel moyen des SCPI a toujours été supérieur à 4,00%/an.",
    },
    {
      icon: FaChartLine,
      title: "Aucune gestion immobilière",
      description: "Fini les tracass administratifs de l'immobilier traditionnel ! La société de gestion s’occupe de tout.",
    },
    {
      icon: FaChalkboardTeacher,
      title: "Accessible à tous",
      description: "Pas besoin d'apport. Certaines SCPI sont accessibles à partir de quelques centaines d’euros seulement.",
    },
    {
      icon: FaClipboardCheck,
      title: "Mutualisation des risques",
      description: "Les risques locatifs sont répartis entre plusieurs biens et plusieurs locataires.",
    },
  ];

  return (
    <Box bg="white" py={10} px={6} borderRadius="lg" boxShadow="lg" mx={4}>
      <VStack spacing={8} maxW="1200px" mx="auto">
        <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="blue.900">
          Les avantages des SCPI
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} w="100%">
          {advantages.map((advantage, index) => (
            <VStack key={index} spacing={4} textAlign="center">
              <Icon as={advantage.icon} w={10} h={10} color="orange.400" />
              <Text fontSize="xl" fontWeight="bold" color="blue.900">{advantage.title}</Text>
              <Text fontSize="md" color="gray.700">{advantage.description}</Text>
            </VStack>
          ))}
        </SimpleGrid>
        <Button colorScheme="orange" size="lg" mt={8}>
          Être contacté(e)
        </Button>
      </VStack>
    </Box>
  );
};

export default SCPIAdvantages;
