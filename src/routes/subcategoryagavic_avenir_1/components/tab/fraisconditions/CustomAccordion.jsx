import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  useTheme,
} from '@chakra-ui/react';

const ACCORDION_TITLE_COLOR = 'blue.500';
const ACCORDION_TITLE_FONT_SIZE = 'lg';
const ACCORDION_CONTENT_PADDING_BOTTOM = 4;

const ACCORDION_ITEMS = [
  { title: 'Versements libres', content: 'Contenu pour les versements libres' },
  { title: 'Versements libres programmés', content: 'Contenu pour les versements libres programmés' },
  // Add more items as needed...
];

function CustomAccordion() {
  const theme = useTheme();

  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {ACCORDION_ITEMS.map((item, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text color={theme.colors[ACCORDION_TITLE_COLOR]} fontSize={ACCORDION_TITLE_FONT_SIZE}>
                  {item.title}
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={ACCORDION_CONTENT_PADDING_BOTTOM}>
            <Text>{item.content}</Text>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default CustomAccordion;
