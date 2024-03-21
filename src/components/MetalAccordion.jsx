import React, { useState } from 'react';
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
  const [showMore, setShowMore] = useState(false);

  const additionalMetals = ['Platine', 'Palladium', 'Titanium'];

  const handleToggle = () => {
    setShowMore(!showMore);
  };

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
              {/* Render additional options if showMore is true */}
              {showMore && additionalMetals.map((metal, index) => (
                <Checkbox key={index}>{metal}</Checkbox>
              ))}
              <Button 
                variant="link" 
                colorScheme="blue" 
                size="sm" 
                mt={2}
                onClick={handleToggle}
              >
                {showMore ? 'Voir moins' : 'Voir plus'}
              </Button>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default MetalAccordion;
