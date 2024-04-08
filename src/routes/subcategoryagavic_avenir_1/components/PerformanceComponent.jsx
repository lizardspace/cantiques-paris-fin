import React from 'react';
import { Box, Text, Link, Divider, Alert, AlertIcon, useColorModeValue } from '@chakra-ui/react';
import { FaRegStar } from 'react-icons/fa';

const PerformanceComponent = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      padding={5}
      textAlign="center"
      bg={bgColor}
      borderColor={borderColor}
      boxShadow="xl"
    >
      <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
        <FaRegStar color="#FFD700" />
        <Text fontSize="xl" fontWeight="bold" ml={2}>
          Profil équilibré
        </Text>
        <FaRegStar color="#FFD700" />
      </Box>

      <Text fontSize="5xl" fontWeight="extrabold" marginBottom={3}>
        4,08% <Text as="span" fontSize="xl" verticalAlign="top">/ an</Text>
      </Text>

      <Alert status="info" borderRadius="md" mb={3}>
        <AlertIcon />
        Performances annualisées des 10 dernières années des allocations stars Linxea
      </Alert>

      <Link color="teal.500" href="#" fontWeight="bold">
        🔍 Découvrir nos allocations stars
      </Link>

      <Divider my={4} />

      <Text fontSize="xs">
        Profil incluant des unités de comptes qui comportent un risque de perte en capital. Les performances passées ne préjugent pas des performances futures.
      </Text>
    </Box>
  );
};

export default PerformanceComponent;
