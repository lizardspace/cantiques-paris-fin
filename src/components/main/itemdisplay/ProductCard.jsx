import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Select,
  Stack,
  Divider,
  Link,
} from '@chakra-ui/react';

function ProductCard() {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" p={4} m={4}>
      <Heading mb={6}>Solitaire et alliance Or blanc Diamants</Heading>
      <Text fontSize="xl" fontWeight="bold">
        1,290.00 €
      </Text>
      <Text mb={3}>Livraison gratuite sécurisée FR & UE | Expédition sous 1-2 Jours</Text>
      <Text mb={3}>Vendeur professionnel | Avec certificat d'expertise</Text>
      <Text mb={3}>Ou 430 €/mois - 3x sans frais avec alma</Text>
      <Box>
        <Text mb={1}>Taille: 52</Text>
        <Select placeholder="Select size" mb={3}>
          <option value="52">52</option>
          {/* Add more sizes as needed */}
        </Select>
      </Box>
      <Stack direction="row" spacing={4} mb={3}>
        <Button flex={1} colorScheme="black" variant="solid">
          AJOUTER AU PANIER
        </Button>
        <Button flex={1} variant="outline">
          FAIRE UNE OFFRE DE PRIX
        </Button>
      </Stack>
      <Divider mb={3} />
      <Text mb={3}>Ensemble de 2 bagues, un solitaire et une alliance en or blanc 14 carats sertie de diamants d'environ 0.34 cts G / VS taille brillant.</Text>
      <Text mb={3}>Poids: 4.90 grammes</Text>
      <Text mb={3}>Taille de doigt: 52 / 16.5 mm / US 6</Text>
      <Text mb={3}>Poinçons francs coquille.</Text>
      <Text mb={3}>Excellent état.</Text>
      <Text mb={3}>Réf: M89292B2086/</Text>
      <Text mb={3}>Référence 58 Facettes : 8956691579209</Text>
      <Link color="teal.500" href="#" mb={3}>
        PRENDRE RDV
      </Link>
      <Text mb={3}>Livraison & Retours gratuits. Livré depuis...</Text>
    </Box>
  );
}

export default ProductCard;
