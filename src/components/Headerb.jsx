import React from 'react';
import {
  Flex,
  Box,
  Input,
  InputGroup,
  InputRightAddon, // Use InputRightAddon for placing the icon in a styled box to the right
  Button,
  IconButton,
  Image,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { SearchIcon, AddIcon, BellIcon, AtSignIcon } from '@chakra-ui/icons';

const Headerb = () => {
  const searchInputBg = useColorModeValue('gray.100', 'gray.700');

  // Function to handle search icon click event
  const handleSearchClick = () => {
    console.log("Search clicked!");
    // Implement your search functionality here
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p={4}
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Flex alignItems="center">
        <Image
          src="/public/images/agavic/agaviclogo.png"
          alt="Logo Agavic"
          htmlWidth="240px"
          htmlHeight="auto"
          mr={4}
        />
        <Text fontWeight="bold" color="blue.800" fontSize="lg">
          +33 (0) 4 78 34 26 23
        </Text>
      </Flex>
      <InputGroup maxWidth="480px" w="100%">
        <Input
          placeholder="Rechercher un produit ou une information"
          bg={searchInputBg}
        />
        {/* InputRightAddon with IconButton inside */}
        <InputRightAddon children={
          <IconButton
            icon={<SearchIcon />}
            aria-label="Search"
            size="sm"
            colorScheme="blue" // Sets the icon button color scheme to blue
            onClick={handleSearchClick} // Adds click functionality
            _hover={{ bg: "blue.600" }} // Changes background on hover
          />
        } />
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
