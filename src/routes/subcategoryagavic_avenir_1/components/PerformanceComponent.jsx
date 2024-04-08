import React from 'react';
import { Box, Text, Link, Divider } from '@chakra-ui/react';

const PerformanceComponent = () => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      padding={5}
      textAlign="center"
      backgroundColor="white"
      boxShadow="lg"
    >
      <Text fontSize="xl" fontWeight="bold" marginBottom={3}>
        Profil équilibré
      </Text>
      <Text fontSize="5xl" fontWeight="extrabold" marginBottom={3}>
        4,08% <Text as="span" fontSize="xl">/ an</Text>
      </Text>
      <Text fontSize="sm" marginBottom={3}>
        Performances annualisées des 10 dernières années des allocations stars Linxea
      </Text>
      <Link color="teal.500" href="#" fontWeight="bold">
        Découvrir nos allocations stars
      </Link>
      <Divider my={4} />
      <Text fontSize="xs">
        Profil incluant des unités de comptes qui comportent un risque de perte en capital. Les performances passées ne préjugent pas des performances futures.
      </Text>
    </Box>
  );
};

export default PerformanceComponent;
