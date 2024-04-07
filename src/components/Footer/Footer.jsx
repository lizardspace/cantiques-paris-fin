import React from 'react';
import { Flex, Text, Image, Link, HStack } from '@chakra-ui/react';
import { FaFacebook, FaLinkedinIn, FaYoutube, FaInstagram, FaBuilding } from 'react-icons/fa';

const Footer = () => {
  return (
    <Flex
      as="footer"
      bg="gray.100"
      align="center"
      justify="space-between"
      p={4}
      wrap="wrap"
    >
      <Image
        src="/images/agavic/agaviclogo.png"
        alt="Agavic Logo"
        boxSize="100px"
        objectFit="contain"
      />

      <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
        <Link href="https://www.facebook.com" isExternal>
          <FaFacebook aria-label="Facebook" />
        </Link>
        <Link href="https://www.linkedin.com" isExternal>
          <FaLinkedinIn aria-label="LinkedIn" />
        </Link>
        <Link href="https://www.youtube.com" isExternal>
          <FaYoutube aria-label="YouTube" />
        </Link>
        <Link href="https://www.instagram.com" isExternal>
          <FaInstagram aria-label="Instagram" />
        </Link>
      </HStack>

      <Text fontSize="lg">
        04 78 34 26 23
        <br />
        Du lundi au vendredi de 9h à 18h
      </Text>

      <HStack spacing={4}>
        {/* Icons representing the partners */}
        <FaBuilding aria-label="Spirica" />
        <FaBuilding aria-label="Suravenir" />
        <FaBuilding aria-label="Apicil" />
        <FaBuilding aria-label="Generali" />
      </HStack>
    </Flex>
  );
};

export default Footer;
