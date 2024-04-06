import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'}>
        Sorry, the page you are looking for does not exist.
      </Text>
    </Box>
  );
};

export default NotFound;
