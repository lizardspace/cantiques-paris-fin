import React from 'react';
import { Box, Button, Link, Flex, useColorModeValue, HStack } from '@chakra-ui/react';
import { TfiArrowCircleRight } from "react-icons/tfi";

function SubscriptionComponent() {
  const buttonBgColor = '#3182ce'; // Using the color you provided directly
  const textColor = useColorModeValue('white', 'gray.800');

  return (
    <Flex align="center" justify="center">
      <Box p={4} borderRadius="md" shadow="md">
        <HStack spacing={4}>
          <Button rightIcon={<TfiArrowCircleRight />} backgroundColor={buttonBgColor} color={textColor}>
            Souscrire en ligne
          </Button>
          <Link
            href="#"
            isExternal
            color={buttonBgColor}
            display="flex"
            alignItems="center"
            textDecoration="underline"
            _hover={{ textDecoration: 'none' }}
          >
            Voir la simulation détaillée <TfiArrowCircleRight style={{ marginLeft: '0.5rem' }} />
          </Link>
        </HStack>
      </Box>
    </Flex>
  );
}

export default SubscriptionComponent;
