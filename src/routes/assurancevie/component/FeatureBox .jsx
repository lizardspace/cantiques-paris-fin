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

const FeaturesComponent = () => {
  return (
    <Flex wrap="wrap" justifyContent="center" p={5}>
      <FeatureBox
        icon={featureIcons.lowFees}
        title="Des frais parmi les plus bas du marché"
        description="0%* de frais d'entrée, de versement et d'arbitrage en ligne *Hors SCPI, SCI, trackers et actions. D'autres frais peuvent s'appliquer."
      />
      <FeatureBox
        icon={featureIcons.dynamicFunds}
        title="Des fonds euros dynamiques et des supports innovants"
        description="OPCVM, ETF, Private Equity, SCPI, etc."
      />
      <FeatureBox
        icon={featureIcons.advice}
        title="Conseil"
        description="des conseillers en investissement financier 5/7 de 09h à 18h"
      />
      <FeatureBox
        icon={featureIcons.simplicity}
        title="Simplicité"
        description="souscription et gestion 100% en ligne"
      />
    </Flex>
  );
};

export default FeaturesComponent;
