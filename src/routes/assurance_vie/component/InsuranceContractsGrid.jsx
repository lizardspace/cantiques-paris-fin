import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  Icon
} from '@chakra-ui/react';
import {
  FcAssistant,
  FcDonate,
  FcInTransit,
  FcBullish
} from 'react-icons/fc';

function InsuranceContractsGrid() {
  const contracts = [
    {
      icon: FcAssistant,
      title: 'Agavic Avenir 2',
      features: [
        'Accessible: Ouverture dès 100€ en gestion libre et 25€/mois',
        'Diversifié: 2 fonds en euros dont 1 dynamique, + 600 supports dont + 80 ETF',
        'Flexible: La possibilité de combiner la gestion pilotée Otea Capital et la gestion libre',
        'Le + du contrat: Une offre financière responsable avec + 150 fonds labellisés'
      ],
    },
    {
      icon: FcDonate,
      title: 'Agavic Spirit 2',
      features: [
        'Investissement responsable : + 200 supports labellisés ISR et Solidaire',
        'Performance : 0% de frais sur les versements, 0% sur les arbitrages en gestion libre',
        'Liberté : Arbitrages gratuits, rachats partiels sans frais, 0% sur versements programmés',
        'Le + du contrat : Une offre financière responsable avec + 150 fonds labellisés'
      ],
    },
    {
      icon: FcInTransit,
      title: 'Agavic Zen',
      features: [
        'Accessibilité : Ouverture dès 100€, versements libres à partir de 50€',
        'Liberté : 0% de frais sur les versements, arbitrages et rentes, rachats partiels sans frais',
        'Diversification : 5 profils de gestion pilotée accessibles dès 100€',
        'Le + du contrat : Une offre financière responsable avec + 150 fonds labellisés'
      ],
    },
    {
      icon: FcBullish,
      title: 'Agavic Vie',
      features: [
        'Performance : 0% de frais sur versements, arbitrages, et rentes',
        'Liberté : Rachats partiels gratuits, versements programmés 0% sur le versement initial',
        'Accessibilité : Versements libres dès 100€ et rentes accessibles dès 30€/mois',
        'Le + du contrat : Une offre financière responsable avec + 150 fonds labellisés'
      ],
    },
  ];

  return (
    <Box maxW="container.xl" mx="auto" p={5}>
      <Heading mb={6}>Notre gamme de contrats d’assurance vie</Heading>
      <Text mb={6} textAlign="center">
          Agavic vous propose 4 contrats d’assurance vie à frais réduits : Agavic Avenir 2 (Suravenir), Agavic Spirit 2 (Spirica), Agavic Vie (Generali) et Agavic Zen (Apicil). Ces contrats présentent un risque de perte en capital.
        </Text>
      <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={6}>
        {contracts.map((contract, index) => (
          <GridItem key={index}>
            <VStack
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={5}
              align="stretch"
              bg="white"
              boxShadow="sm"
              spacing={4}
            >
              <Icon as={contract.icon} w={16} h={16} color="orange.400" />
              <Heading size="md" textAlign="center">{contract.title}</Heading>
              {contract.features.map((feature, featureIndex) => (
                <Text key={featureIndex} fontSize="sm" textAlign="center">{feature}</Text>
              ))}
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default InsuranceContractsGrid;
