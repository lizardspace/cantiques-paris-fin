import React from 'react';
import {
  Flex,
  Text,
  Box,
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

const HeaderTopb = () => {
  return (
    <Flex
      as="footer"
      p={4}
      justifyContent="space-between"
      alignItems="center"
      borderTop="1px"
      borderColor="gray.200"
    >
      <Box>
        <Text cursor="pointer" mx={2} _hover={{ textDecoration: 'underline' }}>À propos</Text>
        <Text cursor="pointer" mx={2} _hover={{ textDecoration: 'underline' }}>Nos services</Text>
        <Text cursor="pointer" mx={2} _hover={{ textDecoration: 'underline' }}>Nos engagements</Text>
      </Box>

      <Spacer />

      <Box>
        <IconButton
          size="sm"
          icon={<FaFacebook />}
          aria-label="Facebook"
          mr={2}
        />
        <IconButton
          size="sm"
          icon={<FaInstagram />}
          aria-label="Instagram"
          mr={2}
        />
        <IconButton
          size="sm"
          icon={<EmailIcon />}
          aria-label="Email"
          mr={2}
        />
        <Menu>
          <MenuButton as={Button} rightIcon={<BsGlobe />}>
            FR
          </MenuButton>
          <MenuList>
            <MenuItem minH="48px">
              <span>EN</span>
              <AtSignIcon boxSize="2em" mr="2" />
            </MenuItem>
            <MenuItem minH="40px">
              <span>FR</span>
              <AtSignIcon boxSize="2em" mr="2" />
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default HeaderTopb;
