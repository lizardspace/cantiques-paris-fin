import React from 'react';
import { Flex, Box, Text, Image, Link, HStack } from '@chakra-ui/react';
import { FaFacebook, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

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
        src="/path-to-your-logo.png"
        alt="Linxea Logo"
        boxSize="100px"
        objectFit="contain"
      />

      <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
        <Link href="https://www.facebook.com" isExternal>
          <FaFacebook />
        </Link>
        <Link href="https://www.linkedin.com" isExternal>
          <FaLinkedinIn />
        </Link>
        <Link href="https://www.youtube.com" isExternal>
          <FaYoutube />
        </Link>
        <Link href="https://www.instagram.com" isExternal>
          <FaInstagram />
        </Link>
      </HStack>

      <Text fontSize="lg">
        01 45 67 34 22
        <br />
        Du lundi au vendredi de 9h à 18h
      </Text>

      <HStack spacing={4}>
        {/* Add images for each partner logo */}
        <Image src="/path-to-spirica-logo.png" alt="Spirica Logo" boxSize="50px" />
        <Image src="/path-to-suravenir-logo.png" alt="Suravenir Logo" boxSize="50px" />
        <Image src="/path-to-apicil-logo.png" alt="Apicil Logo" boxSize="50px" />
        <Image src="/path-to-generali-logo.png" alt="Generali Logo" boxSize="50px" />
      </HStack>
    </Flex>
  );
};

export default Footer;
