import {
    Grid,
    Box,
    Image,
    Text,
    Heading,
    Container,
    VStack,
    Divider
  } from '@chakra-ui/react';
  
  function InsuranceContractsGrid() {
    return (
      <Container maxW="container.xl" py={5}>
        <Heading mb={4} textAlign="center">
          Notre gamme de contrats d’assurance vie
        </Heading>
        <Text mb={6} textAlign="center">
          Linxea vous propose 4 contrats d’assurance vie à frais réduits : Linxea Avenir 2 (Suravenir), Linxea Spirit 2 (Spirica), Linxea Vie (Generali) et Linxea Zen (Apicil). Ces contrats présentent un risque de perte en capital.
        </Text>
        <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={6}>
          { /* Repeat this Box for each contract, replacing the Image src and texts accordingly */ }
          {['Avenir 2', 'Spirit 2', 'Zen', 'Vie'].map((contract) => (
            <VStack
              key={contract}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={5}
              align="stretch"
              bg="white"
              boxShadow="md"
            >
              <Image src={`path_to_${contract.toLowerCase()}_image.png`} alt={contract} boxSize="100px" objectFit="cover" m="auto" />
              <Divider my={3} />
              <Text fontWeight="bold" textAlign="center">Le contrat idéal pour...</Text>
              <Text textAlign="center">Accessible: Ouverture dès 100€ en gestion libre et 25€/mois</Text>
              <Text textAlign="center">Diversifié: 2 fonds en euros dont 1 dynamique, + 600 supports dont + 80 ETF</Text>
              {/* Add more Text components for other details */}
              <Divider my={3} />
              <Text textAlign="center" color="orange.400" fontWeight="bold">Le + du contrat: Une offre...</Text>
            </VStack>
          ))}
        </Grid>
      </Container>
    );
  }
  
  export default InsuranceContractsGrid;
  