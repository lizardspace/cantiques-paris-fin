import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  ListIcon,
  Box
} from '@chakra-ui/react';
import { FaGem } from 'react-icons/fa'; // Placeholder icon, replace with specific icons for each gemstone

// Define a custom list item component for gemstones
const GemstoneItem = ({ icon, children }) => (
  <ListItem>
    <ListIcon as={icon} color="currentColor" />
    {children}
  </ListItem>
);

// The main component for the gemstone accordion
const GemstoneAccordion = () => {
  return (
    <Box bg="white" w="250px" boxShadow="md" borderRadius="md">
      <Accordion allowToggle>
        <AccordionItem border="none">
          <h2>
            <AccordionButton _expanded={{ bg: "gray.100", color: "teal.800" }}>
              <Box flex="1" textAlign="left">
                PIERRE DE CENTRE
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List spacing={3}>
              <GemstoneItem icon={FaGem} color="gray.400">Diamant</GemstoneItem>
              <GemstoneItem icon={FaGem} color="red.500">Rubis</GemstoneItem>
              <GemstoneItem icon={FaGem} color="blue.500">Saphir</GemstoneItem>
              <GemstoneItem icon={FaGem} color="green.500">Émeraude</GemstoneItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default GemstoneAccordion;
