import React from 'react';
import { Box, Button, Image, Text, VStack, HStack, Link, Flex } from '@chakra-ui/react';

const SCPIDescription = () => {
  return (
    <Box bgGradient="linear(to-r, blue.50, blue.100)" py={10} px={6} borderRadius="lg" boxShadow="lg" mx={4}>
      <Flex direction={{ base: 'column', md: 'row' }} maxW="1200px" mx="auto" alignItems="center" borderRadius="lg" overflow="hidden">
        <VStack align="start" spacing={6} flex="1" p={6}>
          <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="blue.900">
            La SCPI : qu'est ce que c'est, et comment ça marche ?
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700">
            La SCPI (Société Civile de Placement Immobilier) est un moyen simple
            d’investir dans l’immobilier, sans les contraintes de l’immobilier traditionnel.
            Elle permet de devenir propriétaire (associé) d’un parc immobilier.
          </Text>
          <Link color="orange.400" href="#" fontSize={{ base: 'sm', md: 'md' }} fontWeight="bold">
            Guide SCPI
          </Link>
        </VStack>
        <Box flex="1" p={6}>
          <Image
            src="public/images/maison.jpg" // Path to the image
            alt="Maison"
            borderRadius="lg"
            boxShadow="md"
            objectFit="cover"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default SCPIDescription;
