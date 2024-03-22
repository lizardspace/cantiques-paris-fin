import React from 'react';
import {
  Flex,
  HStack,
  Text,
  IconButton,
  Spacer,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react';
import { EmailIcon, AtSignIcon } from '@chakra-ui/icons';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';

const HeaderTopBar = () => {
  return (
    <Flex
      as="header"
      p={4}
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px"
      borderColor="gray.200"
    >
      {/* Align À propos, Nos services, Nos engagements in a single line using HStack */}
      <HStack spacing={8}>
        <Text cursor="pointer" _hover={{ textDecoration: 'underline', color: 'blue.500' }}>À propos</Text>
        <Text cursor="pointer" _hover={{ textDecoration: 'underline', color: 'blue.500' }}>Nos services</Text>
        <Text cursor="pointer" _hover={{ textDecoration: 'underline', color: 'blue.500' }}>Nos engagements</Text>
      </HStack>

      <Spacer />

      <HStack spacing={2}>
        <IconButton
          size="sm"
          icon={<FaFacebook />}
          aria-label="Facebook"
        />
        <IconButton
          size="sm"
          icon={<FaInstagram />}
          aria-label="Instagram"
        />
        <IconButton
          size="sm"
          icon={<EmailIcon />}
          aria-label="Email"
        />
        <Menu>
          <MenuButton as={Button} rightIcon={<BsGlobe />}>
            FR
          </MenuButton>
          <MenuList>
            <MenuItem minH="40px">
              <Text fontSize="sm">EN</Text>
              {/* Adjusted the icon size */}
              <AtSignIcon boxSize="1.5em" ml="3" />
            </MenuItem>
            <MenuItem minH="40px">
              <Text fontSize="sm">FR</Text>
              <AtSignIcon boxSize="1.5em" ml="3" />
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};

export default HeaderTopBar;
