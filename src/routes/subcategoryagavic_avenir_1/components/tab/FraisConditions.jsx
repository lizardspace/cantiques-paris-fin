import React from 'react';
import { Box, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import FeesTable from './fraisconditions/FeesTable';
import CustomAccordion from './fraisconditions/CustomAccordion';

function FraisConditions() {
  return (
    <>
    <Box borderWidth="1px" borderRadius="lg" p={4} maxW="sm" mx="auto">
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Des frais parmi les plus bas du marché…
      </Text>
      <Text color="orange.400" mb={4}>0% de frais d'entrée, de versement et d'arbitrage.</Text>
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        …pour un contrat accessible dès 100 € :
      </Text>
      <Text mb={4}>Versez et retirez à votre rythme et sans contrainte, votre argent reste disponible.</Text>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Versement libre dès 100 €
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Versements programmés dès 25 € par mois
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Rachat dès 100 €
        </ListItem>
      </List>
    </Box>
    <FeesTable/>
    <CustomAccordion/>
    </>
  );
}

export default FraisConditions;
