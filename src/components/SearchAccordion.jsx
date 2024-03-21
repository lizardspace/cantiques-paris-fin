import React, { useState } from 'react';
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
  Box
} from '@chakra-ui/react';

const SearchAccordion = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const additionalHouses = ['Lalique', 'Baccarat', 'Van Cleef & Arpels'];

  return (
    <Box bg="white" w="250px" boxShadow="md" borderRadius="md">
      <Accordion allowToggle defaultIndex={[0]}>
        <AccordionItem border="none">
          <h2>
            <AccordionButton _expanded={{ bg: "gray.100", color: "teal.800" }}>
              <Box flex="1" textAlign="left" fontWeight="semibold">
                AUTRES MAISONS
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List spacing={3}>
              <ListItem>
                <Input placeholder="Options de recherche" variant="filled" size="sm" />
              </ListItem>
              <ListItem>Boivin</ListItem>
              <ListItem>Chanteloup</ListItem>
              <ListItem>Christofle</ListItem>
              <ListItem>Clozeau</ListItem>
              <ListItem>Fabergé</ListItem>
              {/* Conditional rendering of additional items */}
              {showMore && additionalHouses.map((house, index) => (
                <ListItem key={index}>{house}</ListItem>
              ))}
              <ListItem>
                <Button variant="link" colorScheme="blue" size="sm" onClick={handleToggle}>
                  {showMore ? 'Voir moins' : 'Voir plus'}
                </Button>
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default SearchAccordion;
