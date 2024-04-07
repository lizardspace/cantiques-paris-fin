import React from 'react';
import { Box, Text, Heading, Flex, Image } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Image src="/images/agavic/undraw_page_not_found_re_e9o6.svg" alt="Page non trouvée" maxW="400px" mx="auto" />
      <Heading as="h1" fontSize="3xl" mt={6} mb={4}>
        Page non trouvée
      </Heading>
      <Text fontSize="xl" color="gray.600" mb={6}>
        Désolé, la page que vous recherchez n'existe pas.
      </Text>
      <Flex justify="center">
        <Text fontSize="lg" color="blue.500" textDecoration="underline">
          <a href="/">Retour à la page d'accueil</a>
        </Text>
      </Flex>
    </Box>
  );
};

export default NotFound;
