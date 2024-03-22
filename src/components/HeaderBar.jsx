import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const HeaderBar = () => {
  return (
    <Flex
      width="100%"
      bg="blue.800"
      color="white"
      justifyContent="center"
      alignItems="center"
      p={2}
    >
      <Text fontSize="md">
        SERVICE CLIENT : +33 (0) 4 78 34 26 23
      </Text>
    </Flex>
  );
};

export default HeaderBar;
