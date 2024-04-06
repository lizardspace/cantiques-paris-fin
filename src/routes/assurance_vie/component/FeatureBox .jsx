import React from 'react';
import { Flex, Box, Icon, Text, VStack } from '@chakra-ui/react';
import { CheckCircleIcon, TimeIcon, HamburgerIcon, EditIcon } from '@chakra-ui/icons';

// You can replace these icons with the ones you are actually using
const featureIcons = {
  lowFees: CheckCircleIcon,
  dynamicFunds: TimeIcon,
  advice: HamburgerIcon,
  simplicity: EditIcon,
};

const FeatureBox = ({ icon, title, description }) => {
  return (
    <Flex
      direction={{ base: 'row', md: 'column' }}
      alignItems="center"
      bg="gray.100"
      p={5}
      borderRadius="lg"
      boxShadow="md"
      width={{ base: 'full', md: 'auto' }}
      m={2}
    >
      <Icon as={icon} w={10} h={10} color="orange.400" mb={4} />
      <VStack align="start">
        <Text fontWeight="bold">{title}</Text>
        <Text fontSize="sm">{description}</Text>
      </VStack>
    </Flex>
  );
};

export default FeatureBox;
