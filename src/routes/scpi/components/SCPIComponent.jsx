import React from 'react';
import { Box, Button, Image, Text, VStack, HStack, Link, Badge } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const SCPIComponent = () => {
  const navigate = useNavigate();

  const handleSubscribeClick = () => {
    navigate('/scpi/souscrire');
  };

  return (
    <Box
      bgGradient="linear(to-r, blue.50, blue.100)"
      p={10}
      borderRadius="md"
      boxShadow="lg"
      maxW="900px"
      mx="auto"
      mt={10}
    >
      <VStack spacing={6} align="start">
        <HStack spacing={4} align="start">
          <Box>
            <Badge colorScheme="green" borderRadius="full" px={3} py={1}>
              Label ISR
            </Badge>
          </Box>
        </HStack>
        <HStack spacing={8}>
          <Box flex="1">
            <Text fontSize="3xl" fontWeight="bold" lineHeight="shorter">
              SCPI : l’investissement locatif, sans ses contraintes
            </Text>
            <Text fontSize="lg" mt={4}>
              Percevez des revenus réguliers grâce aux SCPI. Accédez aux meilleurs produits du marché.
            </Text>
            <HStack spacing={4} mt={6}>
              <Button colorScheme="orange" size="lg" onClick={handleSubscribeClick}>
                Souscrire en ligne
              </Button>
              <Button variant="outline" size="lg">
                Être contacté(e)
              </Button>
            </HStack>
            <Link color="orange.400" href="#" mt={4} display="inline-block">
              Toutes les SCPI
            </Link>
          </Box>
          <Box flex="1">
            <Image
              borderRadius="md"
              src="public/images/immobilier.jpg" // Path to the image
              alt="Immobilier"
              objectFit="cover"
              boxShadow="md"
            />
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default SCPIComponent;
