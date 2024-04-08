import React from 'react';
import {
  Box,
  Avatar,
  Text,
  Link,
  List,
  ListItem,
  ListIcon,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { FaArrowRight } from 'react-icons/fa';

const OpportunityComponent = () => {
  const textColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <Box display="flex" alignItems="center" p={5} bg={useColorModeValue('gray.50', 'gray.700')} borderRadius="lg">
      <Avatar src="path-to-avatar-image.png" name="Person Name" size="xl" mr={4} />

      <Box flex="1">
        <Text fontWeight="bold" color={textColor}>
          OPPORTUNITÉS DU MOMENT: Fonds en euros Suravenir Opportunités 2
        </Text>
        <List spacing={2} my={2}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="orange.400" />
            BONUS +2% net sur le rendement du fonds 2024 sur vos versements effectués en 2024.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="orange.400" />
            Versements possibles à 100 % sur le fonds.
          </ListItem>
        </List>
        <Link href="#" color="teal.500" fontWeight="bold" display="flex" alignItems="center">
          <Icon as={FaArrowRight} mr={2} />
          Découvrir les offres
        </Link>
      </Box>
    </Box>
  );
};

export default OpportunityComponent;
