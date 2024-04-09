import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, Button, Link, VStack, List, ListItem, Flex, Text } from '@chakra-ui/react';
import { FcDownload, FcDocument, FcHome, FcPhone } from 'react-icons/fc'; // Importer les icônes spécifiques nécessaires depuis 'react-icons/fc'

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
        <FcDownload size={24} style={{ marginRight: '8px' }} /> Notre document d'entrée en relation
      </Link>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold"> {/* Making the question bold for clarity */}
                Quels sont les documents nécessaires pour souscrire?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List spacing={3}>
              <ListItem>
                <Flex alignItems="center">
                  <FcDocument size={20} style={{ marginRight: '8px' }} />
                  <Text>Pièce d'identité française à jour</Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex alignItems="center">
                  <FcDocument size={20} style={{ marginRight: '8px' }} />
                  <Text>RIB</Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex alignItems="center">
                  <FcHome size={20} style={{ marginRight: '8px' }} />
                  <Text>Justificatif de domicile de moins de 3 mois</Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex alignItems="center">
                  <FcPhone size={20} style={{ marginRight: '8px' }} />
                  <Text>Facture de téléphone mobile</Text>
                </Flex>
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold"> {/* Making the question bold for clarity */}
                Quelles sont les conditions d’éligibilité?
              </Box>
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
