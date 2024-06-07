import React from 'react';
import { Box, Text, VStack, HStack, Link, Image, Icon } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const SupportSection = () => {
  return (
    <Box bg="white" py={10} px={6} borderRadius="lg" boxShadow="md" mx={4} display={{ md: 'flex' }} alignItems="center">
      <VStack spacing={6} align="start" flex={1}>
        <HStack>
          <Text fontSize="sm" color="gray.500" fontWeight="bold">Support</Text>
          <Box h="1px" bg="gray.300" flex={1} />
          <HStack spacing={-2}>
            <Image borderRadius="full" boxSize="24px" src="public/images/avatar1.jpg" alt="Person 1" />
            <Image borderRadius="full" boxSize="24px" src="public/images/avatar2.jpg" alt="Person 2" />
            <Image borderRadius="full" boxSize="24px" src="public/images/avatar3.jpg" alt="Person 3" />
          </HStack>
        </HStack>
        <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="blue.900">
          Besoin de conseils avant d’investir ?
        </Text>
        <Text>
          <Link color="orange.400" href="#">Laissez-nous un message</Link> ou appelez-nous sur le <Link color="orange.400" href="tel:0145673422">01 45 67 34 22</Link>.
          Nos conseillers sont à votre écoute du lundi au vendredi de 9h à 18h. Consultez les articles de notre <Link color="orange.400" href="#">Centre d’Aide</Link> et trouvez
          toutes les réponses à vos questions.
        </Text>
        <HStack spacing={4}>
          <Link href="#" isExternal>
            <Icon as={FaFacebookF} w={6} h={6} color="blue.600" />
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaInstagram} w={6} h={6} color="blue.600" />
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaLinkedinIn} w={6} h={6} color="blue.600" />
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaYoutube} w={6} h={6} color="blue.600" />
          </Link>
        </HStack>
      </VStack>
      <Box flex={1} mt={{ base: 6, md: 0 }} ml={{ md: 6 }}>
        <Image src="public/images/phone.jpg" alt="Phone" borderRadius="lg" boxShadow="lg" />
      </Box>
    </Box>
  );
};

export default SupportSection;
