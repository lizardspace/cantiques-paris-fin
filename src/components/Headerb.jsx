import React from 'react';
import {
  Flex,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  IconButton,
  Image,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { SearchIcon, ChevronRightIcon, AddIcon, BellIcon, AtSignIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Headerb = () => {
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  const searchInputBg = useColorModeValue('gray.100', 'gray.700');

  const handleSearchClick = () => {
    console.log("Search clicked!");
  };

  const buttonStyle = {
    size: 'md',
    fontWeight: 'bold',
    borderRadius: 'full',
    boxShadow: 'md',
    _hover: {
      boxShadow: 'lg',
    },
  };

  const iconButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'blue.500',
    color: 'white',
    _hover: {
      backgroundColor: 'blue.600',
    },
  };

  const handleSubscriptionClick = () => {
    navigate('/subscribe'); // Navigate to '/subscribe' route using navigate function
  };

  const handleClientSpaceClick = () => {
    navigate('/client-space'); // Navigate to '/client-space' route using navigate function
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
        <Button {...buttonStyle} colorScheme="blue" mr={2} rightIcon={<ChevronRightIcon />} onClick={handleSubscriptionClick}>
          Souscrire en ligne
        </Button>
        <Button {...buttonStyle} colorScheme="blue" mr={2} rightIcon={<ChevronRightIcon />} onClick={handleClientSpaceClick}>
          Espace client
        </Button>
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
