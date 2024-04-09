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
      spacing={6}
      align="stretch"
      maxW="500px" // Limiting maximum width for better readability
      m="auto" // Centering the component horizontally
      p="20px"
      borderWidth="1px"
      borderRadius="md"
      boxShadow="lg" // Adding a subtle shadow for depth
    >
      <Button colorScheme="orange">C'est parti!</Button>
      <Link
        color="blue.500"
        textAlign="center"
        fontWeight="bold" // Making the link bold for emphasis
        display="flex"
        alignItems="center" // Aligning the icon vertically with text
      >
        <ChevronDownIcon w={6} h={6} mr={2} /> Notre document d'entrée en relation
      </Link>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold"> {/* Making the question bold for clarity */}
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
              <Box flex="1" textAlign="left" fontWeight="bold"> {/* Making the question bold for clarity */}
                Quelles sont les conditions d’éligibilité?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              Seuls les majeurs capables, de nationalité française et résidents fiscaux français peuvent ouvrir un contrat 100% en ligne.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
};

export default AccordionComponent;
