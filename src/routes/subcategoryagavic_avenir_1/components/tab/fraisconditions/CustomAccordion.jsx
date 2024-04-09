import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { FaAngleDown } from 'react-icons/fa'; // Import the down arrow icon

const accordionData = [
    {
      title: 'Versements libres',
      details: [
        { label: 'Versement initial minimum', value: '100 €' },
        { label: 'Versement complémentaire minimum', value: '100 €' },
        { label: 'Minimum par support', value: '25 €' },
        { label: 'Frais', value: '0% (hors SCPI, SCI et ETF)' },
        { label: 'Date de valeur', value: 'J+2 jours ouvrés si réalisé par prélèvement en ligne avant 20h' },
      ],
    },
    {
      title: 'Versements libres programmés',
      details: [
        { label: 'Fréquence', value: 'Mensuel' },
        { label: 'Montant', value: 'Variable' },
        { label: 'Plafond', value: 'Aucun' },
        // Add other details as needed...
      ],
    },
    {
      title: 'Arbitrages',
      details: [
        { label: 'Frais', value: '0.5% du montant arbitré, minimum 5 €' },
        { label: 'Délai', value: 'J+3 jours ouvrés' },
        // Add other details as needed...
      ],
    },
    // Add other sections as needed...
  ];
  

function CustomAccordion() {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {accordionData.map((section, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton _hover={{ color: '#3182ce' }}> {/* Add hover effect */}
              <Box flex="1" textAlign="left">
                <Text fontSize="lg" fontWeight="bold">
                  {section.title}
                </Text>
              </Box>
              <AccordionIcon as={FaAngleDown} /> {/* Use down arrow icon */}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {section.details && Array.isArray(section.details) ? (
              <VStack align="stretch" spacing={4}>
                {section.details.map((detail, detailIndex) => (
                  <HStack key={detailIndex} justify="space-between">
                    <Text fontWeight="semibold">{detail.label}:</Text>
                    <Text>{detail.value}</Text>
                  </HStack>
                ))}
              </VStack>
            ) : (
              <Text>No details available.</Text>
            )}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default CustomAccordion;
