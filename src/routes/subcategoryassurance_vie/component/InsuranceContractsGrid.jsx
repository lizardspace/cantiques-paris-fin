import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  Icon,
  Alert,
  AlertIcon,
  Badge
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
        { subtitle: 'Accessible:', content: 'Ouverture dès 100€ en gestion libre et 25€/mois' },
        { subtitle: 'Diversifié:', content: '2 fonds en euros dont 1 dynamique, + 600 supports dont + 80 ETF' },
        { subtitle: 'Flexible:', content: 'La possibilité de combiner la gestion pilotée Otea Capital et la gestion libre' },
        { subtitle: 'Le + du contrat:', content: 'Une offre financière responsable avec + 150 fonds labellisés' }
      ],
    },
    {
      icon: FcDonate,
      title: 'Agavic Spirit 2',
      features: [
        { subtitle: 'Investissement responsable :', content: '+ 200 supports labellisés ISR et Solidaire' },
        { subtitle: 'Performance :', content: '0% de frais sur les versements, 0% sur les arbitrages en gestion libre' },
        { subtitle: 'Liberté :', content: 'Arbitrages gratuits, rachats partiels sans frais, 0% sur versements programmés' },
        { subtitle: 'Le + du contrat :', content: 'Une offre financière responsable avec + 150 fonds labellisés' }
      ],
    },
    {
      icon: FcInTransit,
      title: 'Agavic Zen',
      features: [
        { subtitle: 'Accessibilité :', content: 'Ouverture dès 100€, versements libres à partir de 50€' },
        { subtitle: 'Liberté :', content: '0% de frais sur les versements, arbitrages et rentes, rachats partiels sans frais' },
        { subtitle: 'Diversification :', content: '5 profils de gestion pilotée accessibles dès 100€' },
        { subtitle: 'Le + du contrat :', content: 'Une offre financière responsable avec + 150 fonds labellisés' }
      ],
    },
    {
      icon: FcBullish,
      title: 'Agavic Vie',
      features: [
        { subtitle: 'Performance :', content: '0% de frais sur versements, arbitrages, et rentes' },
        { subtitle: 'Liberté :', content: 'Rachats partiels gratuits, versements programmés 0% sur le versement initial' },
        { subtitle: 'Accessibilité :', content: 'Versements libres dès 100€ et rentes accessibles dès 30€/mois' },
        { subtitle: 'Le + du contrat :', content: 'Une offre financière responsable avec + 150 fonds labellisés' }
      ],
    },
  ];

  return (
    <Box maxW="container.xl" mx="auto" p={5}>
      <Heading mb={6} color="blue.600" fontSize="2xl" textAlign="center">Notre gamme de contrats d’assurance vie</Heading>
      <Alert status="warning" mb={6}>
        <AlertIcon />
        Agavic vous propose 4 contrats d’assurance vie à frais réduits : Agavic Avenir 2 (Suravenir), Agavic Spirit 2 (Spirica), Agavic Vie (Generali) et Agavic Zen (Apicil). Ces contrats présentent un risque de perte en capital.
      </Alert>
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
              <Icon as={contract.icon} w={16} h={16} color="green.500" />
              <Heading size="lg" textAlign="center">
                <Badge colorScheme="blue" borderRadius="full" px={2} py={1} mb={2}>
                  {contract.title}
                </Badge>
              </Heading>
              {contract.features.map((feature, featureIndex) => (
                <Text key={featureIndex} fontSize="sm" textAlign="center">
                  <Badge colorScheme="green" borderRadius="full" px={2} py={1} mb={1}>
                    {feature.subtitle}
                  </Badge>{' '}
                  {feature.content}
                </Text>
              ))}
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default InsuranceContractsGrid;
