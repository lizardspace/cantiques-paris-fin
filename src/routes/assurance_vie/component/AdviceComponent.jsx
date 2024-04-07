import React from 'react';
import { Box, Flex, Text, Button, Image } from '@chakra-ui/react';

const AdviceComponent = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="center" // This ensures content is centered, especially in a row layout
      p={{ base: 4, md: 8 }}
      bg="#3182ce"
      color="white"
      borderRadius="lg" // Adds border radius to the Flex container
    >
      <Image
        src="/public/images/agavic/undraw_remote_meeting_re_abe7.svg" // Updated path to the image
        alt="Expert Advice"
        boxSize={{ base: '150px', md: '200px' }}
        objectFit="contain"
        mr={{ base: 0, md: 8 }}
        borderRadius="md" // Optionally, add borderRadius to the Image
      />
      <Box
        flex="1"
        ml={{ base: 0, md: 8 }}
        mt={{ base: 4, md: 0 }}
        textAlign={{ base: 'center', md: 'left' }}
        borderRadius="md" // Adds borderRadius to the Box, if desired for individual components
      >
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          Besoin de conseil ?
        </Text>
        <Text fontWeight="medium" mb={4}>
          Contactez nos experts
        </Text>
        <Text fontSize="sm" mb={4}>
          Vous avez des questions complémentaires ou besoin d'aide pour effectuer vos démarches ?
        </Text>
        <Text fontSize="sm" mb={8}>
          Nos conseillers sont à votre écoute du lundi au vendredi de 9h à 18h.
        </Text>
        <Button colorScheme="blue" variant="solid">
          Nous contacter
        </Button>
      </Box>
    </Flex>
  );
};

export default AdviceComponent;
