import React from 'react';
import { Box, Link, SimpleGrid, Text, Center } from '@chakra-ui/react';

const FooterComponent = () => {
  return (
    <Box backgroundColor="orange.300" paddingY="4">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center" justifyContent="center">
        <Box textAlign={{ base: 'center', md: 'initial' }}>
          <Text fontWeight="bold" marginBottom="4">Conseiller en Investissements Financiers (CIF)</Text>
          <Text marginBottom="2">Membre de la CNCIF, association professionnelle agréée par l'Autorité des Marchés Financiers (AMF).</Text>
          <Text marginBottom="2">Enregistré à l'ORIAS en tant que Courtier en Assurance, activité régulée par l'Autorité de Contrôle Prudentiel et de Résolution (ACPR).</Text>
        </Box>
        <Center>
          <Box>
            <Text fontWeight="bold" marginBottom="4">Liens utiles :</Text>
            <Box as="nav" aria-label="Footer navigation">
              <Link href="#" color="white" isExternal marginBottom="2" display="block">
                Conditions générales d'utilisation
              </Link>
              <Link href="#" color="white" isExternal marginBottom="2" display="block">
                Données personnelles
              </Link>
              <Link href="#" color="white" isExternal marginBottom="2" display="block">
                Mentions légales
              </Link>
              <Link href="#" color="white" isExternal marginBottom="2" display="block">
                Cookies
              </Link>
            </Box>
          </Box>
        </Center>
      </SimpleGrid>
    </Box>
  );
};

export default FooterComponent;
