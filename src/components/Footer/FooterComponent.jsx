import React from 'react';
import { Box, Link, SimpleGrid, Text } from '@chakra-ui/react';

// Assuming you want to make this a separate component
const FooterComponent = () => {
  return (
    <Box backgroundColor="orange.300" paddingY="4" paddingX="8">
      <SimpleGrid columns={5} spacing={10}>
        <Box>
          <Text fontWeight="bold">Conseiller en Investissements Financiers (CIF)</Text>
          <Text>Membre de la CNCIF, association professionnelle agréée par l'Autorité des Marchés Financiers (AMF).</Text>
          <Text>Enregistré à l'ORIAS en tant que Courtier en Assurance, activité régulée par l'Autorité de Contrôle Prudentiel et de Résolution (ACPR).</Text>
        </Box>
        <Box as="nav" aria-label="Footer navigation">
          <Link href="#" color="white" isExternal>
            Conditions générales d'utilisation
          </Link>
          <Link href="#" color="white" isExternal marginTop="2">
            Données personnelles
          </Link>
          <Link href="#" color="white" isExternal marginTop="2">
            Mentions légales
          </Link>
          <Link href="#" color="white" isExternal marginTop="2">
            Cookies
          </Link>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default FooterComponent;
