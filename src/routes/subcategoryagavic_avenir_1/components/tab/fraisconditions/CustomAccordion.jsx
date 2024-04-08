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
        // Add the respective details for programmable free payments here...
      ],
    },
    {
      title: 'Arbitrages',
      details: [
        // Add the respective details for arbitrages here...
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
            <AccordionButton _hover={{ color: 'blue' }}> {/* Add hover effect */}
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
