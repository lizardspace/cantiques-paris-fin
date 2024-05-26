import { Box, VStack, HStack, Badge, Text, Flex } from '@chakra-ui/react';
import { FcAreaChart, FcBarChart, FcLineChart } from 'react-icons/fc';

function FundPerformanceCard() {
  return (
    <Flex justifyContent="center" alignItems="center" p="6">
      <Box maxW="full" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box p="6">
          <Flex justifyContent="space-between" alignItems="center">
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
              2.50% &bull; 3.13% &bull; jusqu'à 4.12%
            </Box>
          </Flex>

          <Text
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
            textAlign="center"
          >
            Les rendements très performants des fonds euro
          </Text>

          <Text textAlign="center" my="4">
            Ces supports sont quasi-garantis en capital, totalement flexibles et sans limite d'investissement!
          </Text>

          <HStack justifyContent="space-evenly" spacing={10}>
            <VStack>
              <Box as={FcAreaChart} size="50px" />
              <Text mt={2}>2,50% nets en 2023</Text>
              <Text fontSize="sm">sur le fonds en euros "Suravenir Opportunités 2"</Text>
            </VStack>
            <VStack>
              <Box as={FcBarChart} size="50px" />
              <Text mt={2}>3,13% nets de frais de gestion en 2023</Text>
              <Text fontSize="sm">sur le fonds en euros "Nouvelle Génération"</Text>
            </VStack>
            <VStack>
              <Box as={FcLineChart} size="50px" />
              <Text mt={2}>Jusqu'à 4,12%</Text>
              <Text fontSize="sm">nets en 2023 sur le fonds en euros "Netissima"</Text>
            </VStack>
          </HStack>
          
          <Text textAlign="center" fontSize="sm" mt={4}>
            Les rendements passés ne préjugent pas des rendements futurs.
            INVESTISSEMENT POSSIBLE A 100% jusqu'au 29/02/2024.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}

export default FundPerformanceCard;
