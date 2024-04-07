import React from 'react';
import { Box, Flex, Text, Icon, Badge, VStack, HStack } from '@chakra-ui/react';
import { GiTrophyCup } from 'react-icons/gi';
import { BsStarFill } from 'react-icons/bs';

const AwardComponent = () => {
  return (
    <Flex
      wrap="wrap"
      alignItems="center"
      justifyContent="center"
      p={5}
      bg="white"
      boxShadow="md"
      textAlign="center"
    >
      <VStack m={4}>
        <Icon as={GiTrophyCup} w={20} h={20} color="yellow.400" />
        <Text fontSize="sm">France Awards PER 2023</Text>
      </VStack>
      
      <VStack m={4}>
        <Icon as={GiTrophyCup} w={20} h={20} color="gray.400" />
        <Text fontSize="sm">Challenger Meilleurs PER 2023</Text>
      </VStack>
      
      <VStack m={4}>
        <Icon as={GiTrophyCup} w={20} h={20} color="green.400" />
        <Text fontSize="sm">PER Trophées d'Or 2023</Text>
      </VStack>
      
      <VStack m={4} alignItems="center" justifyContent="center">
        <Badge colorScheme="green" mb={2} p={2}>100 000 clients nous font confiance</Badge>
        <Badge colorScheme="orange" mb={2} p={2}>3,3 milliards d'euros confiés</Badge>
        <Badge colorScheme="yellow" mb={2} p={2}>20 ans de conception de produits d'épargne</Badge>
        <HStack alignItems="center">
          <Icon as={BsStarFill} w={10} h={10} color="yellow.400" />
          <Text ml={2}>4,3/5 sur Trustpilot</Text>
        </HStack>
      </VStack>
    </Flex>
  );
}

export default AwardComponent;
