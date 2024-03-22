import React from 'react';
import { Box, Text, Flex, useDisclosure } from '@chakra-ui/react';

const FullWidthBanner = () => {
  const { onOpen } = useDisclosure();

  return (
    <Flex
      width="100%"
      bg="blue.500"
      color="white"
      justifyContent="center"
      alignItems="center"
      p={4}
      onClick={onOpen}
      cursor="pointer"
    >
      <Text textAlign="center" fontWeight="bold">
        Inscrivez-vous à notre newsletter et profitez de 50€ de bon d'achat!
      </Text>
    </Flex>
  );
};

export default FullWidthBanner;
