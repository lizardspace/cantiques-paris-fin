import React from 'react';
import { Flex, Text, Image, Link, HStack } from '@chakra-ui/react';
import { FaFacebook, FaLinkedinIn, FaYoutube, FaInstagram, FaBuilding } from 'react-icons/fa';

const Footer = () => {
  return (
    <Flex
      as="footer"
      bg="gray.900"
      color="white"
      align="center"
      justify="space-between"
      p={4}
      wrap="wrap"
    >
      <Flex align="center" justify="center">
        <Image
          src="/images/agavic/agaviclogo.png"
          alt="Agavic Logo"
          boxSize="100px"
          objectFit="contain"
          mr={4}
        />
        <Text fontSize="lg" fontWeight="bold" mr={8}>
          Agavic
        </Text>
      </Flex>

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

      <Flex direction="column" align="center" justify="center" mr={8}>
        <Text fontSize="md" mb={2}>
          Contactez-nous
        </Text>
        <Text fontSize="sm">
          04 78 34 26 23
          <br />
          Du lundi au vendredi de 9h à 18h
        </Text>
      </Flex>

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
