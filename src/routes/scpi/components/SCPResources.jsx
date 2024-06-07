import React from 'react';
import { Box, Text, VStack, SimpleGrid, HStack, Link, Icon } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';

const resources = [
  {
    title: "SCPI en direct ou SCPI en assurance vie : que choisir ?",
    author: "L'équipe Linxea",
    description: "L’investissement en Sociétés Civiles de Placement Immobilier (SCPI) vous interpelle ? Avant toute chose, sachez qu’il est possible d’acheter des parts de SCPI en direct, c’est-à-dire directement auprès de la société de gestion immobilière et / ou d’un intermédiaire (courtier en ligne, banque...) ou de les loger au sein de votre contrat d’assurance vie (ou votre Plan d’Épargne Retraite PER)."
  },
  {
    title: "Tout savoir sur les SCPI",
    author: "L'équipe Linxea",
    description: "Découvrez les sociétés civiles de placement immobilier (SCPI), un placement prisé en France. Ces placements immobiliers locatifs offrent un moyen de se ..."
  },
  {
    title: "Les SCPI fiscales : un dispositif à ne pas négliger",
    author: "L'équipe Linxea",
    description: "Beaucoup moins nombreuses que les SCPI de rendement, les SCPI fiscales offrent de nombreux avantages aux particuliers qui souhaitent diminuer leur charge ..."
  },
];

const SCPResources = () => {
  return (
    <Box bg="white" py={10} px={6} borderRadius="lg" mx={4}>
      <VStack spacing={8} maxW="1200px" mx="auto">
        <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="blue.900">
          SCPI : Ressources complémentaires
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="100%">
          {resources.map((resource, index) => (
            <Box key={index} bg="blue.50" p={6} borderRadius="lg" boxShadow="md">
              <Text fontSize="lg" fontWeight="bold" color="blue.900" mb={2}>{resource.title}</Text>
              <HStack spacing={2} align="center" mb={2}>
                <Icon as={FaUser} color="gray.600" />
                <Text fontSize="sm" color="gray.700">{resource.author}</Text>
              </HStack>
              <Text fontSize="md" color="gray.700">{resource.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
        <Link color="orange.400" href="#" fontSize="md" fontWeight="bold" mt={6}>
          L’essentiel sur les SCPI
        </Link>
      </VStack>
    </Box>
  );
};

export default SCPResources;
