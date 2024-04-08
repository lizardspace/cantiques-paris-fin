import React from 'react';
import { Box, List, ListItem, ListIcon, Button, Text } from '@chakra-ui/react';
import { LuLeaf } from 'react-icons/lu';
import { CheckCircleIcon } from '@chakra-ui/icons';

const InvestmentComponentAvenir = () => {
  return (
    <Box
      p={5}
      shadow="2xl"
      borderWidth="1px"
      borderRadius="lg"
      bgGradient="linear(to-r, orange.100, orange.200)"
      borderColor="orange.300"
    >
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Votre Plan d'Épargne en Actions
      </Text>
      <List spacing={4}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="blue.500" />
          0% frais d'entrée, d'arbitrage et de versement
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="blue.500" />
          Gestion libre et/ou gestion pilotée
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="blue.500" />
          +600 supports disponibles (ETF, private equity, actions, SCPI...)
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="blue.500" />
          2 fonds euro pour sécuriser votre épargne
        </ListItem>
        <ListItem>
          <ListIcon as={LuLeaf} color="green.500" />
          23% de fonds responsables (Article 9 et labellisés)
        </ListItem>
      </List>
      <Button colorScheme="orange" size="lg" mt={6} boxShadow="md">
        Souscrire en ligne
      </Button>
    </Box>
  );
};

export default InvestmentComponentAvenir;
