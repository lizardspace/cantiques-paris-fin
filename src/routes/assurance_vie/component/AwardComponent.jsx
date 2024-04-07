import React from 'react';
import { Box, Flex, Image, Text, Badge } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const AwardComponent = () => {
  return (
    <Flex alignItems="center" justifyContent="space-around" p={5} bg="white" boxShadow="md">
      <Box>
        <Image src="/path-to-your-first-award-image.png" alt="Award 1" boxSize="100px" />
        <Text fontSize="sm" textAlign="center">France Awards PER 2023</Text>
      </Box>
      <Box>
        <Image src="/path-to-your-second-award-image.png" alt="Award 2" boxSize="100px" />
        <Text fontSize="sm" textAlign="center">Challenger Meilleurs PER 2023</Text>
      </Box>
      <Box>
        <Image src="/path-to-your-third-award-image.png" alt="Award 3" boxSize="100px" />
        <Text fontSize="sm" textAlign="center">PER Trophées d'Or 2023</Text>
      </Box>
      <Flex direction="column" alignItems="center" justifyContent="center">
        <Badge colorScheme="green" mb={2}>100 000 clients nous font confiance</Badge>
        <Badge colorScheme="orange" mb={2}>3,3 milliards d'euros confiés</Badge>
        <Badge colorScheme="yellow" mb={2}>20 ans de conception de produits d'épargne</Badge>
        <Flex alignItems="center">
          <StarIcon color="yellow.400" />
          <Text ml={2}>4,3/5 sur Trustpilot</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AwardComponent;
