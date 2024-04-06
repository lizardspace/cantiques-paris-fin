import React from 'react';
import {
  Flex,
  Box,
  Input,
  InputGroup,
  InputRightElement, // Change to InputRightElement for the icon button
  Button,
  IconButton,
  Image,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { SearchIcon, ChevronRightIcon, AddIcon, BellIcon, AtSignIcon } from '@chakra-ui/icons';

const Headerb = () => {
  const searchInputBg = useColorModeValue('gray.100', 'gray.700');

  // Function to handle search icon click event
  const handleSearchClick = () => {
    // Implement your search functionality here
    console.log("Search clicked!");
  };

  // Custom styling for the buttons based on the blue theme
  const buttonStyle = {
    size: 'md',
    fontWeight: 'bold',
    borderRadius: 'full',
    boxShadow: 'md',
    _hover: {
      boxShadow: 'lg',
    },
  };

  // Custom styling for the IconButton components
  const iconButtonStyle = {
    ...buttonStyle, // Spread the button styles to maintain consistency
    backgroundColor: 'blue.500', // Set the default background color
    color: 'white', // Set the icon color
    _hover: {
      backgroundColor: 'blue.600', // Darken the button on hover
    },
    // Add more styles if needed
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p={4}
      borderBottom="1px"
      borderColor="gray.200"
      wrap="wrap"
    >
      <Flex alignItems="center">
        <Image
          src="/images/agavic/agaviclogo.png"
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
        <Input placeholder="Rechercher un produit ou une information" bg={searchInputBg} />
        <InputRightElement>
          <IconButton
            icon={<SearchIcon />}
            aria-label="Search"
            size="md"
            {...iconButtonStyle}
            onClick={handleSearchClick}
          />
        </InputRightElement>
      </InputGroup>
      <Flex alignItems="center" my={2}>
        <Button {...buttonStyle} colorScheme="blue" mr={2} rightIcon={<ChevronRightIcon />}>
          Souscrire en ligne
        </Button>
        <Button {...buttonStyle} colorScheme="blue" mr={2} rightIcon={<ChevronRightIcon />}>
          Espace client
        </Button>
        {/* Apply iconButtonStyle to each IconButton */}
        <IconButton
          aria-label="Add to Wishlist"
          icon={<AddIcon />}
          {...iconButtonStyle}
          mr={2}
        />
        <IconButton
          aria-label="Notifications"
          icon={<BellIcon />}
          {...iconButtonStyle}
          mr={2}
        />
        <IconButton
          aria-label="Contact"
          icon={<AtSignIcon />}
          {...iconButtonStyle}
        />
      </Flex>
    </Flex>
  );
};

export default Headerb;
