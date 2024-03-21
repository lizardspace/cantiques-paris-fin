import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Checkbox,
  Button,
  Box,
  VStack
} from '@chakra-ui/react';

const MetalAccordion = () => {
  return (
    <Box bg="white" w="250px" boxShadow="md" borderRadius="md">
      <Accordion allowToggle defaultIndex={[0]}>
        <AccordionItem border="none">
          <h2>
            <AccordionButton _expanded={{ bg: "gray.100", color: "teal.800" }}>
              <Box flex="1" textAlign="left" fontWeight="semibold">
                MÉTAL
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack align="start" spacing={2}>
              <Checkbox>Acier</Checkbox>
              <Checkbox>Argent</Checkbox>
              <Checkbox>Or Blanc</Checkbox>
              <Checkbox>Or Gris</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm" mt={2}>
                Voir plus
              </Button>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default MetalAccordion;
