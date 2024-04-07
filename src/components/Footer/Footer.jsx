import React from 'react';
import { Flex, Text, Image, Link, HStack, Stack, IconButton, Icon } from '@chakra-ui/react';
import { FaFacebook, FaLinkedinIn, FaYoutube, FaInstagram, FaBuilding, FaPhone } from 'react-icons/fa';

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
      <Flex align="center">
        <Image
          src="/images/agavic/agaviclogo.png"
          alt="Agavic Logo"
          boxSize="100px"
          objectFit="contain"
          mr={4}
        />
        <Stack spacing={1}>
          <Text fontSize="lg" fontWeight="bold">
            Agavic
          </Text>
          <Text fontSize="sm">Your Trusted Partner</Text>
        </Stack>
      </Flex>

      <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
        <IconButton
          as={Link}
          href="https://www.facebook.com"
          icon={<Icon as={FaFacebook} />}
          aria-label="Facebook"
          isExternal
          variant="ghost"
        />
        <IconButton
          as={Link}
          href="https://www.linkedin.com"
          icon={<Icon as={FaLinkedinIn} />}
          aria-label="LinkedIn"
          isExternal
          variant="ghost"
        />
        <IconButton
          as={Link}
          href="https://www.youtube.com"
          icon={<Icon as={FaYoutube} />}
          aria-label="YouTube"
          isExternal
          variant="ghost"
        />
        <IconButton
          as={Link}
          href="https://www.instagram.com"
          icon={<Icon as={FaInstagram} />}
          aria-label="Instagram"
          isExternal
          variant="ghost"
        />
      </HStack>

      <Stack align="center" justify="center" mr={8}>
        <Text fontSize="md" mb={2}>
          Contactez-nous
        </Text>
        <HStack>
          <Icon as={FaPhone} />
          <Text fontSize="sm">04 78 34 26 23</Text>
        </HStack>
        <Text fontSize="xs">Du lundi au vendredi de 9h à 18h</Text>
      </Stack>

      <HStack spacing={4}>
        {/* Icons representing the partners */}
        <Icon as={FaBuilding} aria-label="Spirica" boxSize={6} />
        <Icon as={FaBuilding} aria-label="Suravenir" boxSize={6} />
        <Icon as={FaBuilding} aria-label="Apicil" boxSize={6} />
        <Icon as={FaBuilding} aria-label="Generali" boxSize={6} />
      </HStack>
    </Flex>
  );
};

export default Footer;
