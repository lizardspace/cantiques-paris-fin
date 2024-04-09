import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Link,
  VStack,
  List,
  ListItem,
  Text
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const AccordionComponent = () => {
  return (
    <VStack
      spacing={4}
      align="stretch"
      m="40px"
      p="20px"
      borderWidth="1px"
      borderRadius="md"
    >
      <Button colorScheme="orange">C'est parti!</Button>
      <Link color="blue.500" textAlign="center">
        <ChevronDownIcon w={6} h={6} /> Notre document d'entrée en relation
      </Link>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Quels sont les documents nécessaires pour souscrire?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List spacing={3}>
              <ListItem>Pièce d'identité française à jour</ListItem>
              <ListItem>RIB</ListItem>
              <ListItem>Justificatif de domicile de moins de 3 mois</ListItem>
              <ListItem>Facture de téléphone mobile</ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Quelles sont les conditions d’éligibilité?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Seuls les majeurs capables, de nationalité française et résidents fiscaux français peuvent ouvrir un contrat 100% en ligne.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
};

export default AccordionComponent;
