import React from 'react';
import {
  Box,
  Heading,
  Text,
  Link,
  Image,
  HStack,
  VStack,
  Tooltip,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons'; // This is an example icon from Chakra UI

const InfoBanner = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.700'); // Adjusts color based on light or dark mode

  return (
    <Box
      p={6}
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="lg"
      boxShadow="lg"
      bg={bgColor}
      align="center"
      justify="center"
    >
      <HStack spacing={{ base: 4, md: 10 }} w="full">
        <VStack align="start" spacing={4} flex={1}>
          <HStack spacing={2}>
            <Heading as="h2" size="lg" color="gray.700">
              L'assurance-vie c'est quoi ?
            </Heading>
            <Tooltip label="Plus d'informations" fontSize="md" placement="right" hasArrow>
              <span>
                <Icon as={InfoIcon} color="blue.500" w={5} h={5} />
              </span>
            </Tooltip>
          </HStack>
          <Text fontSize="md" color="gray.600">
            L'assurance-vie est un produit d’épargne accessible à tous qui permet de préparer financièrement tous ses projets. Très souple et aux avantages fiscaux inégalés, c'est très logiquement le placement préféré des français.
          </Text>
          <Link color="blue.500" href="#" isExternal>
            Découvrez l'assurance vie
          </Link>
        </VStack>
        <Box flex={1} maxW={{ base: "100%", md: "40%" }} position="relative">
          <Image
            src="/images/agavic/undraw_meeting_re_i53h.svg"
            alt="Illustration of people discussing finance"
            borderRadius="md"
            boxSize="150px" // This controls the size of the image
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default InfoBanner;
