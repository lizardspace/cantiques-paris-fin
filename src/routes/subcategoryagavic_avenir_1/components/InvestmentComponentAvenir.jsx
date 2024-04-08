import React from 'react';
import { Box, List, ListItem, ListIcon, Button } from '@chakra-ui/react';
import { LuLeaf } from 'react-icons/lu'; // Faire attention, cette icône doit exister dans la bibliothèque react-icons, autrement choisir une icône appropriée.
import { CheckCircleIcon } from '@chakra-ui/icons';

const InvestmentComponentAvenir = () => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" backgroundColor="orange.100">
      <List spacing={3}>
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
      <Button colorScheme="orange" mt={4}>
        Souscrire en ligne
      </Button>
    </Box>
  );
};

export default InvestmentComponentAvenir;
