import React from 'react';
import {
  Flex,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  IconButton,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { SearchIcon, AddIcon, BellIcon, AtSignIcon } from '@chakra-ui/icons';

const Headerb = () => {
  const searchInputBg = useColorModeValue('gray.100', 'gray.700');

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p={4}
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Box>
        <Text fontSize="xl" fontWeight="bold">
          CANTIQUES PARIS
        </Text>
      </Box>
      <InputGroup maxWidth="480px" w="100%">
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.500" />} />
        <Input placeholder="Rechercher" bg={searchInputBg} />
      </InputGroup>
      <Flex alignItems="center">
        <Button size="sm" mr={2}>
          VENDRE VOS BIJOUX
        </Button>
        <Button size="sm" mr={2}>
          Se connecter
        </Button>
        <IconButton
          size="sm"
          icon={<AddIcon />}
          aria-label="Wishlist"
          mr={2}
        />
        <IconButton
          size="sm"
          icon={<BellIcon />}
          aria-label="Notifications"
          mr={2}
        />
        <IconButton
          size="sm"
          icon={<AtSignIcon />}
          aria-label="Contact"
        />
      </Flex>
    </Flex>
  );
};

export default Headerb;
