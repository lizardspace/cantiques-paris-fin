import React, { useState } from 'react';
import { Box, Text, VStack, HStack, SimpleGrid, Icon, Button, Flex } from '@chakra-ui/react';
import { FaStar, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const reviews = [
  {
    text: "Plateforme de souscription simple d’utilisation. Les conseillers sont joignables rapidement par téléphone ce qui est un vrai support. Offre large avec de nombreux supports d’actifs.",
    source: "Trustpilot",
    author: "THIERRY",
  },
  {
    text: "Excellent service client très réactif. C'est rare aujourd'hui et mérite d'être souligné. Interface bien faite pour ouvrir un compte facilement.",
    source: "Google",
    author: "CLÉMENT",
  },
  {
    text: "Interface claire, proposition de produits intéressants. Il reste plus qu’à voir si les performances seront au rendez vous.",
    source: "Google",
    author: "VINCENT",
  },
  {
    text: "Service de qualité, très satisfait. Les options de placements sont variées et les explications claires.",
    source: "Trustpilot",
    author: "MAXIME",
  },
];

const TrustSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <Box bg="blue.50" py={10} px={6} borderRadius="lg" mx={4}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} maxW="1200px" mx="auto">
        <VStack align="start" spacing={6}>
          <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="blue.900">
            Nos clients nous font confiance
          </Text>
          <Text fontSize="md" color="gray.700">
            Depuis 23 ans, la communauté d'investisseurs Linxea continue de s'agrandir : merci à vous !
          </Text>
          <HStack spacing={10}>
            <VStack align="start">
              <Text fontSize="4xl" fontWeight="bold" color="blue.900">4,3</Text>
              <Text fontSize="sm" color="gray.700">sur Trustpilot</Text>
              <HStack>
                {Array(5).fill(<FaStar color="orange" />)}
              </HStack>
            </VStack>
            <VStack align="start">
              <Text fontSize="4xl" fontWeight="bold" color="blue.900">+100k</Text>
              <Text fontSize="sm" color="gray.700">Clients contents</Text>
            </VStack>
          </HStack>
        </VStack>

        <Box position="relative" bg="white" p={6} borderRadius="lg" boxShadow="lg">
          <Text fontSize="lg" color="gray.700" mb={4}>
            {reviews[currentReview].text}
          </Text>
          <HStack justify="space-between" align="center">
            <Flex align="center">
              <Icon as={FaStar} color="orange" mr={2} />
              <Text fontSize="sm" color="gray.700" fontWeight="bold">{reviews[currentReview].source}</Text>
              <Text fontSize="sm" color="gray.700" ml={2}>{reviews[currentReview].author}</Text>
            </Flex>
            <HStack>
              <Button onClick={prevReview} variant="ghost">
                <FaArrowLeft />
              </Button>
              <Button onClick={nextReview} variant="ghost">
                <FaArrowRight />
              </Button>
            </HStack>
          </HStack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default TrustSection;
