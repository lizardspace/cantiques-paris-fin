import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Text
} from '@chakra-ui/react';

// Définir les données pour chaque section de l'accordéon
const accordionData = [
  {
    title: "Introduction à l'assurance vie",
    description: "Ajoutez ici la description de l'introduction à l'assurance vie."
  },
  {
    title: "Principe de fonctionnement",
    description: "Ajoutez ici la description du principe de fonctionnement de l'assurance vie."
  },
  {
    title: "Le cadre fiscal avantageux de l'assurance vie",
    description: "Ajoutez ici la description du cadre fiscal avantageux de l'assurance vie."
  },
  {
    title: "Quels sont les frais de l'assurance vie ?",
    description: "Ajoutez ici la description des frais de l'assurance vie."
  },
  {
    title: "Halte aux idées reçues sur l’assurance vie",
    description: "Ajoutez ici la description pour combattre les idées reçues sur l'assurance vie."
  },
  {
    title: "Questions fréquentes sur l'assurance vie",
    description: "Ajoutez ici la description des questions fréquentes sur l'assurance vie."
  }
];

function InsuranceAccordion() {
  return (
    <Accordion allowToggle>
      {accordionData.map((item, index) => (
        <AccordionItem key={index} border="none">
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  _expanded={{ bg: 'blue.100', color: 'blue.800' }}
                  px={5}
                  py={4}
                >
                  <Box flex="1" textAlign="left">
                    <Heading as="h3" size="lg">
                      {item.title}
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} px={5}>
                <Text mb={2}>
                  {item.description}
                </Text>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default InsuranceAccordion;
