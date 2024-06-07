import React from 'react';
import { Box, Image, Text, VStack, HStack, Link, Flex } from '@chakra-ui/react';

const ForestAndViticultureComponent = () => {
  return (
    <Box bg="white" py={10} px={6} borderRadius="lg" boxShadow="lg" mx={4}>
      <Flex direction={{ base: 'column', md: 'row' }} maxW="1200px" mx="auto" alignItems="center" borderRadius="lg" overflow="hidden">
        <Box flex="1" p={6}>
          <Image
            src="public/images/foret.jpg" // Path to the image
            alt="Foret"
            borderRadius="lg"
            boxShadow="md"
            objectFit="cover"
          />
        </Box>
        <VStack align="start" spacing={6} flex="1" p={6}>
          <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="blue.900">
            Les groupements forestiers et viticoles : des solutions d'investissement pertinentes pour la défiscalisation
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.700">
            Les Groupements Forestiers Viticoles ou GFV permettent aux épargnants de diversifier leur patrimoine en investissant dans des parts de forêts ou vignobles.
          </Text>
          <Link color="orange.400" href="#" fontSize={{ base: 'sm', md: 'md' }} fontWeight="bold">
            Groupements forestiers et viticoles
          </Link>
        </VStack>
      </Flex>
    </Box>
  );
};

export default ForestAndViticultureComponent;
