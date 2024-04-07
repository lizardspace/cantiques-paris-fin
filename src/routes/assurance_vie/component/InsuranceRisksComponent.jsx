import { Box, Flex, Heading, Text, VStack, HStack } from '@chakra-ui/react';
import { FcAutomatic, FcApproval, FcCurrencyExchange, FcSurvey } from "react-icons/fc";

function InsuranceRisksComponent() {
  const risks = [
    {
      icon: FcAutomatic,
      title: 'Transférabilité limitée :',
      description: 'Transfert possible uniquement au sein d’une même compagnie d’assurance'
    },
    {
      icon: FcApproval,
      title: 'Capital et rendement non garantis',
      description: 'Risque de perte en capital en cas d’investissement en unités de compte'
    },
    {
      icon: FcCurrencyExchange,
      title: 'Frais applicables',
      description: 'Des frais de gestion annuels s’appliquent ainsi que certains frais de transaction en fonction des supports et des contrats'
    },
    {
      icon: FcSurvey,
      title: 'Fiscalité',
      description: 'Fiscalité applicable en fonction de la date des versements et de l’âge du contrat.'
    }
  ];

  return (
    <Box p={5} boxShadow="md" borderRadius="lg">
      <Heading mb={4} as="h3" size="lg" textAlign="center">
        Les risques de l'assurance-vie :
      </Heading>
      <HStack justifyContent="space-between" alignItems="flex-start">
        {risks.map((risk, index) => (
          <VStack key={index} p={4} spacing={3} align="center">
            {<risk.icon size={30} color="orange" />} {/* Utilisation des crochets pour évaluer l'expression */}
            <Text fontWeight="bold">{risk.title}</Text>
            <Text textAlign="center">{risk.description}</Text>
          </VStack>
        ))}
      </HStack>
    </Box>
  );
}

export default InsuranceRisksComponent;
