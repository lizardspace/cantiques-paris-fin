import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  Input,
  Button,
  VStack,
  Box
} from '@chakra-ui/react';

const SearchAccordion = () => {
  return (
    <Box bg="white" w="250px" boxShadow="md" borderRadius="md" p={4}>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem border="none">
          <h2>
            <AccordionButton _expanded={{ bg: "gray.50" }}>
              <Box flex="1" textAlign="left" fontWeight="semibold">
                AUTRES MAISONS
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack align="stretch" spacing={3}>
              <Input placeholder="Options de recherche" />
              <List spacing={2}>
                <ListItem>Boivin</ListItem>
                <ListItem>Chanteloup</ListItem>
                <ListItem>Christofle</ListItem>
                <ListItem>Clozeau</ListItem>
                <ListItem>Fabergé</ListItem>
                <ListItem>
                  <Button variant="link" colorScheme="blue" size="sm">
                    Voir plus
                  </Button>
                </ListItem>
              </List>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default SearchAccordion;
