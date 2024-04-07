import { Box, Flex, Heading, Text, VStack, HStack, Icon } from '@chakra-ui/react';
// If you're using React Icons, import them like this:
// import { GiMoneyStack, ... } from 'react-icons/gi';

function InsuranceRisksComponent() {
  // This could be your data structure, you can replace it with actual icons and text.
  const risks = [
    {
      icon: /* Your transferability icon here */,
      title: 'Transférabilité limitée :',
      description: 'Transfert possible uniquement au sein d’une même compagnie d’assurance'
    },
    {
      icon: /* Your capital icon here */,
      title: 'Capital et rendement non garantis',
      description: 'Risque de perte en capital en cas d’investissement en unités de compte'
    },
    {
      icon: /* Your fees icon here */,
      title: 'Frais applicables',
      description: 'Des frais de gestion annuels s’appliquent ainsi que certains frais de transaction en fonction des supports et des contrats'
    },
    {
      icon: /* Your tax icon here */,
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
            <Icon as={risk.icon} w={10} h={10} color="orange.500" />
            <Text fontWeight="bold">{risk.title}</Text>
            <Text textAlign="center">{risk.description}</Text>
          </VStack>
        ))}
      </HStack>
    </Box>
  );
}

export default InsuranceRisksComponent;
