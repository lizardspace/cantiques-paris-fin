import React from 'react';
import { Box, VStack, Heading, Text, Button, SimpleGrid } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';

const SouscrireDocumentation = () => {
  return (
    <Box p={5} bg="gray.100" borderRadius="xl">
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Souscrire / gérer votre contrat
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
        <VStack borderWidth="1px" borderRadius="xl" p={5} spacing={4} align="stretch" bg="white">
          <Heading as="h3" size="md">Souscription en ligne</Heading>
          <Text>
            Vous pouvez souscrire 100% en ligne si vous êtes à la fois :
            Majeur capable, Résident fiscal en France, De nationalité française.
            Dans tous les autres cas vous devrez passer par la souscription papier.
          </Text>
          <Button colorScheme="orange" leftIcon={<DownloadIcon />} borderRadius="full" _hover={{ bg: 'orange.400' }}>
            Souscrire en ligne
          </Button>
        </VStack>

        <VStack borderWidth="1px" borderRadius="xl" p={5} spacing={4} align="stretch" bg="white">
          <Heading as="h3" size="md">Souscription papier</Heading>
          <Text>
            Dans certains cas vous devrez remplir un dossier papier et nous le renvoyer par voie postale.
            Quels cas sont concernés ? les personnes mineures, les expatriés / non résidents fiscaux en France,
            les co-souscriptions, les personnes qui n'ont pas la nationalité française.
          </Text>
          <Button colorScheme="orange" leftIcon={<DownloadIcon />} borderRadius="full" _hover={{ bg: 'orange.400' }}>
            Télécharger un dossier
          </Button>
        </VStack>

        <VStack borderWidth="1px" borderRadius="xl" p={5} spacing={4} align="stretch" bg="white">
          <Heading as="h3" size="md">Documents utiles</Heading>
          <Text>
            Vous pouvez réaliser une partie des opérations de gestion (versement, arbitrage, rachat partiel...)
            directement en ligne dans votre espace assureur Suravenir.
            Pour certaines opérations spécifiques, nous vous invitons à télécharger les documents dans votre espace client Linxea
            et nous les renvoyer par courrier.
          </Text>
          <Button colorScheme="orange" leftIcon={<DownloadIcon />} borderRadius="full" _hover={{ bg: 'orange.400' }}>
            Télécharger les documents
          </Button>
        </VStack>
      </SimpleGrid>
      <Text mt={6} textAlign="center" color="gray.600">
        L'ensemble des informations présentées sur cette page sont données à titre indicatif et n'ont pas de valeur contractuelle.
        Nous vous invitons à vous reporter aux conditions générales du contrat.
      </Text>
    </Box>
  );
};

export default SouscrireDocumentation;
