import React from 'react';
import { Box, Flex, Text, Button, Image } from '@chakra-ui/react';

const AdviceComponent = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="center" 
      p={{ base: 4, md: 8 }}
      bg="#3182ce"
      color="white"
      borderRadius="lg"
      textAlign="center" 
      width="100%" 
    >
      <Image
        src="/public/images/agavic/undraw_remote_meeting_re_abe7.svg"
        alt="Expert Advice"
        boxSize={{ base: '150px', md: '200px' }}
        objectFit="contain"
        mr={{ base: 0, md: 8 }}
        borderRadius="md"
      />
      <Box
        flex="1"
        ml={{ base: 0, md: 8 }}
        mt={{ base: 4, md: 0 }}
        borderRadius="md"
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
