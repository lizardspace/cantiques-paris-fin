import React from 'react';
import { Box, Text, Center, useColorModeValue } from '@chakra-ui/react';
import { GiPlantSeed } from 'react-icons/gi'; // Replace with the correct icon

const ImpactBanner = () => {
  const bgColor = useColorModeValue('green.500', 'green.200'); // Ensures color mode compatibility
  const textColor = useColorModeValue('white', 'gray.800');

  return (
    <Center
      bg={bgColor}
      w="full"
      p={4}
      color={textColor}
      borderRadius="lg" // This adds the border radius
      boxShadow="0px 8px 24px rgba(0, 0, 0, 0.1)" // This adds shadow for depth
      flexDirection="row" // Ensures proper alignment of items in a row
      justifyContent="center" // Centers items horizontally
      alignItems="center" // Centers items vertically
    >
      <GiPlantSeed size="24px" style={{ marginRight: '8px' }} /> {/* Replace with the correct icon */}
      <Text fontSize="lg" fontWeight="bold">
        Impact: 80 fonds article 9 et plus de 300 fonds labellisés sur 1440 fonds disponibles
      </Text>
    </Center>
  );
};

export default ImpactBanner;
