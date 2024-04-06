import React from 'react';
import {
  Flex,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  IconButton,
  Image, // Importez le composant Image de Chakra UI
  Text, // Importez le composant Text pour le numéro de téléphone
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
      <Flex alignItems="center">
        <Image
          src="/public/images/agavic/agaviclogo.png" // Assurez-vous que le chemin est correct
          alt="Logo Agavic"
          htmlWidth="240px" // Taille du logo doublée
          htmlHeight="auto" // Hauteur auto pour maintenir l'aspect ratio
          mr={4} // Ajoutez une marge à droite pour espacer le logo du numéro de téléphone
        />
        <Text fontWeight="bold" color="blue.800" fontSize="lg">
          +33 (0) 4 78 34 26 23
        </Text>
      </Flex>
      <InputGroup maxWidth="480px" w="100%">
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.500" />} />
        <Input placeholder="Rechercher un produit ou une information" bg={searchInputBg} />
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
