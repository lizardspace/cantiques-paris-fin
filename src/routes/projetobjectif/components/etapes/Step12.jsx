import React from 'react';
import { Box, Heading, VStack, Text, Button, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Flex } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const Step12 = ({ prevStep, nextStep, chooseDifferentContract }) => {
  return (
    <Box p={5} textAlign="center">
      <Heading as="h2" size="lg" mb={4}>
        Notre recommandation pour votre épargne
      </Heading>
      <Text fontSize="xl" fontWeight="bold" mb={6} color="orange.500">
        Un contrat d'Assurance vie Linxea SPIRIT 2
      </Text>
      <Accordion allowToggle mb={6}>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Avantages de l'assurance vie
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Avantages du Contrat Linxea Spirit 2
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>

          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Flex justifyContent="center" mb={4}>
        <Button variant="outline" colorScheme="orange" onClick={chooseDifferentContract}>
          Choisir un autre contrat
        </Button>
      </Flex>
      <Flex justifyContent="space-between">
        <Button onClick={prevStep}>
          Précédent
        </Button>
        <Button colorScheme="orange" onClick={nextStep}>
          Continuer
        </Button>
      </Flex>
    </Box>
  );
};

export default Step12;
