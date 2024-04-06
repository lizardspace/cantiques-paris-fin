import React from 'react';
import {
  Flex,
  Box,
  Input,
  InputGroup,
  InputRightAddon,
  Button,
  IconButton,
  Image,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { SearchIcon, ChevronRightIcon, AddIcon, BellIcon, AtSignIcon } from '@chakra-ui/icons'; // Updated to include ChevronRightIcon

const Headerb = () => {
  const searchInputBg = useColorModeValue('gray.100', 'gray.700');

  // Function to handle search icon click event
  const handleSearchClick = () => {
    console.log("Search clicked!");
    // Implement your search functionality here
  };

  // Custom styling for the buttons based on the image inspiration
  const buttonStyle = {
    size: 'md', // Make buttons larger
    fontWeight: 'bold',
    borderRadius: 'full', // Fully rounded borders
    paddingX: '1.5rem', // Horizontal padding
    boxShadow: 'md', // Medium shadow for depth
    _hover: { boxShadow: 'lg' }, // Larger shadow on hover for a nice effect
    // Adjust colors, sizes, and other properties as needed
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p={4}
      borderBottom="1px"
      borderColor="gray.200"
      wrap="wrap" // Wrap elements for responsiveness
    >
      <Flex alignItems="center">
        <Image
          src="/public/images/agavic/agaviclogo.png"
          alt="Logo Agavic"
          htmlWidth="240px"
          htmlHeight="auto"
          mr={4}
        />
        <Text fontWeight="bold" color="blue.800" fontSize="lg" display={{ base: 'none', md: 'block' }}>
          +33 (0) 4 78 34 26 23
        </Text>
      </Flex>
      <InputGroup maxWidth="480px" w="100%" my={2}>
        <Input
          placeholder="Rechercher un produit ou une information"
          bg={searchInputBg}
        />
        <InputRightAddon>
          <IconButton
            icon={<SearchIcon />}
            aria-label="Search"
            size="sm"
            colorScheme="blue"
            onClick={handleSearchClick}
            _hover={{ bg: "blue.600" }}
          />
        </InputRightAddon>
      </InputGroup>
      <Flex alignItems="center" my={2}>
        <Button {...buttonStyle} colorScheme="orange" mr={2} rightIcon={<ChevronRightIcon />}>
          Souscrire en ligne
        </Button>
        <Button {...buttonStyle} colorScheme="orange" mr={2} rightIcon={<ChevronRightIcon />}>
          Espace client
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
