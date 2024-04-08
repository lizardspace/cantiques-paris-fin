import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from '@chakra-ui/react';

function CustomAccordion() {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Versements libres
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {/* Panel content for Versements libres */}
        </AccordionPanel>
      </AccordionItem>

      {/* Repeat for each item */}
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Versements libres programmés
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {/* Panel content for Versements libres programmés */}
        </AccordionPanel>
      </AccordionItem>
      
      {/* ... other items ... */}
    </Accordion>
  );
}

export default CustomAccordion;
