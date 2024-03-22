import React from 'react';
import {
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Navbar = () => {
  return (
    <Flex justifyContent="center" p={4} borderBottom="1px" borderColor="gray.200" bg="white">
      {/* Wrap each navigation item in a Menu component if it has a dropdown */}
      <Menu>
        <MenuButton as={Text} cursor="pointer" mx={2} _hover={{ textDecoration: 'underline' }}>
          Nouveautés <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          {/* Dropdown items */}
          <MenuItem>New Item 1</MenuItem>
          <MenuItem>New Item 2</MenuItem>
        </MenuList>
      </Menu>

      {/* Repeat for each top-level navigation item */}
      <Menu>
        <MenuButton as={Text} cursor="pointer" mx={2} _hover={{ textDecoration: 'underline' }}>
          Tous les Bijoux <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          {/* Dropdown items */}
          <MenuItem>Jewelry Item 1</MenuItem>
          <MenuItem>Jewelry Item 2</MenuItem>
        </MenuList>
      </Menu>

      {/* Other menu items */}
      <Text mx={2} cursor="pointer" _hover={{ textDecoration: 'underline' }}>Bijoux Signés</Text>
      <Text mx={2} cursor="pointer" _hover={{ textDecoration: 'underline' }}>Bijoux Vintage</Text>
      <Text mx={2} cursor="pointer" _hover={{ textDecoration: 'underline' }}>Montres</Text>
      <Text mx={2} cursor="pointer" _hover={{ textDecoration: 'underline' }}>Nos boutiques</Text>

      {/* Spacer */}
      <Box flex="1"></Box>

      {/* Align these items to the right */}
      <Text mx={2} cursor="pointer" _hover={{ textDecoration: 'underline' }}>Contactez-Nous</Text>
      <Text mx={2} cursor="pointer" _hover={{ textDecoration: 'underline' }}>Livraison & Retours</Text>
      <Text mx={2} cursor="pointer" _hover={{ textDecoration: 'underline' }}>Estimation Bijou</Text>
    </Flex>
  );
};

export default Navbar;
