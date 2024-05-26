import React from 'react';
import { Alert, AlertIcon, AlertTitle, AlertDescription, Box } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

const InfoAlertComponent = () => {
  return (
    <Box my={4} mx={8}>
      <Alert status="info" borderRadius="lg" boxShadow="md">
        <AlertIcon as={InfoOutlineIcon} boxSize="6" mr={2} />
        <Box flex="1">
          <AlertTitle>Chez Agavic :</AlertTitle>
          <AlertDescription display="block">
            Vous pouvez passer d’un mode de gestion à l’autre gratuitement et à tout moment.
            Les deux modes de gestion sont aussi cumulables sur le même contrat (Agavic Avenir 2 et Agavic Spirit 2). Profitez-en !
          </AlertDescription>
        </Box>
      </Alert>
    </Box>
  );
};

export default InfoAlertComponent;
