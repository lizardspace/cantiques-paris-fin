import React from 'react';
import { Box, Text, VStack, SimpleGrid, HStack, Link, Badge, Image } from '@chakra-ui/react';

const newsArticles = [
  {
    category: "IMMOBILIER",
    date: "18 AVRIL 2024",
    title: "JEUX OLYMPIQUES ET GRAND PARIS DEVRAIENT CONTRIBUER À UNE EMBELLIE DU MARCHÉ DE L’IMMOBILIER",
    author: "L'équipe Linxea",
    authorIcon: "public/images/agavic/agaviclogo.png" // Path to the author icon image
  },
  {
    category: "IMMOBILIER",
    date: "15 MARS 2024 • 31 MAI 2024",
    title: "COMMENT FINANCER L’INVESTISSEMENT DANS UNE SCPI ?",
    author: "L'équipe Linxea",
    authorIcon: "public/images/agavic/agaviclogo.png" // Path to the author icon image
  },
  {
    category: "IMMOBILIER",
    date: "2 FÉVRIER 2023 • 10 MAI 2024",
    title: "« LA GESTION ACTIVE DE PROJET DEVIENT PRIMORDIALE AFIN DE CRÉER DE LA VALEUR ».",
    author: "L'équipe Linxea",
    authorIcon: "public/images/agavic/agaviclogo.png" // Path to the author icon image
  },
];

const SCPINews = () => {
  return (
    <Box bg="white" py={10} px={6} borderRadius="lg" mx={4}>
      <VStack spacing={8} maxW="1200px" mx="auto">
        <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="blue.900">
          Actualités des SCPI
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="100%">
          {newsArticles.map((article, index) => (
            <Box key={index} bg="blue.50" p={6} borderRadius="lg" boxShadow="md">
              <Badge colorScheme="blue" mb={4}>{article.category}</Badge>
              <Text fontSize="sm" color="gray.600" mb={2}>{article.date}</Text>
              <Text fontSize="lg" fontWeight="bold" color="blue.900" mb={4}>{article.title}</Text>
              <HStack spacing={2} align="center">
                <Image
                  borderRadius="full"
                  boxSize="30px"
                  src={article.authorIcon}
                  alt={article.author}
                />
                <Text fontSize="sm" color="gray.700">{article.author}</Text>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>
        <Link color="orange.400" href="#" fontSize="md" fontWeight="bold" mt={6}>
          Actualités SCPI
        </Link>
      </VStack>
    </Box>
  );
};

export default SCPINews;
