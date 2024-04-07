import {
    Box,
    Flex,
    Text,
    VStack,
    Image,
    HStack,
    Badge
  } from '@chakra-ui/react';
  
  function FundPerformanceCard() {
    return (
      <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              2.50% &bull; 3.13% &bull; up to 4.12%
            </Box>
          </Box>
  
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            Les rendements très performants des fonds euro
          </Box>
  
          <Box>
            Ces supports sont quasi-garantis en capital, totalement flexibles et sans limite d'investissement!
          </Box>
  
          <HStack mt={4} spacing={10}>
            <VStack>
              <Image src="path_to_avenir2_image" alt="Avenir 2" />
              <Text mt={2}>2,50% nets en 2023</Text>
              <Text fontSize="sm">sur le fonds en euros "Suravenir Opportunités 2"</Text>
            </VStack>
            <VStack>
              <Image src="path_to_spirit2_image" alt="Spirit 2" />
              <Text mt={2}>3,13% nets de frais de gestion en 2023</Text>
              <Text fontSize="sm">sur le fonds en euros "Nouvelle Génération"</Text>
            </VStack>
            <VStack>
              <Image src="path_to_vie_image" alt="Vie" />
              <Text mt={2}>Jusqu'à 4,12%</Text>
              <Text fontSize="sm">nets en 2023 sur le fonds en euros "Netissima"</Text>
            </VStack>
          </HStack>
          
          <Text mt={4} fontSize="sm">
            Les rendements passés ne préjugent pas des rendements futurs. 
            INVESTISSEMENT POSSIBLE A 100% jusqu'au 29/02/2024.
          </Text>
        </Box>
      </Box>
    );
  }
  
  export default FundPerformanceCard;
  