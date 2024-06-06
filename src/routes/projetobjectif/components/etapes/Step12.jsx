import React from 'react';
import { Box, Heading, VStack, Text, Button, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Flex, Divider } from '@chakra-ui/react';

const Step12 = ({ prevStep, nextStep, chooseDifferentContract }) => {
  return (
    <Box p={5} textAlign="center" maxW="800px" mx="auto">
      <Heading as="h2" size="lg" mb={6}>
        Notre recommandation pour votre épargne
      </Heading>
      <Text fontSize="xl" fontWeight="bold" mb={8} color="orange.500">
        Un contrat d'Assurance vie Linxea SPIRIT 2
      </Text>
      <Accordion allowToggle mb={8} boxShadow="md" borderRadius="md" bg="white">
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  _expanded={{ bg: 'orange.100' }}
                  transition="background-color 0.3s ease-in-out, border-radius 0.3s ease-in-out"
                  borderRadius={isExpanded ? 'md' : 'none'}
                >
                  <Box flex="1" textAlign="left">
                    Avantages de l'assurance vie
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} transition="height 0.3s ease-in-out">
                <VStack align="start" spacing={3}>
                  <Text>
                    <strong>Disponibilité :</strong> votre argent est disponible à tout moment sans frais
                  </Text>
                  <Text>
                    <strong>Performance :</strong> des supports sans risque garantis en capital ou des unités de compte plus dynamiques
                  </Text>
                  <Text>
                    <strong>Fiscalité :</strong> une enveloppe fiscale avantageuse sur les plus-values
                  </Text>
                </VStack>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <Divider />
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  _expanded={{ bg: 'orange.100' }}
                  transition="background-color 0.3s ease-in-out, border-radius 0.3s ease-in-out"
                  borderRadius={isExpanded ? 'md' : 'none'}
                >
                  <Box flex="1" textAlign="left">
                    Avantages du Contrat Linxea Spirit 2
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} transition="height 0.3s ease-in-out">
                <VStack align="start" spacing={3}>
                  <Text>
                    <strong>Frais :</strong> 0% de frais d'entrée, de versement, d'arbitrage et de rachat
                  </Text>
                  <Text>
                    <strong>Choix :</strong> un des contrats les plus complets du marché avec + de 700 supports accessibles (fonds euro, immobilier, actions, ETF, etc)
                  </Text>
                  <Text>
                    <strong>Simplicité :</strong> souscription et gestion 100% en ligne
                  </Text>
                  <Text>
                    <strong>Flexibilité :</strong> possibilité de combiner la gestion libre et la gestion pilotée
                  </Text>
                </VStack>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
      <Flex justifyContent="center" mb={6}>
        <Button variant="outline" colorScheme="orange" onClick={chooseDifferentContract} mr={3}>
          Choisir un autre contrat
        </Button>
      </Flex>
      <Flex justifyContent="space-between">
        <Button onClick={prevStep} variant="outline" colorScheme="orange">
          Précédent
        </Button>
        <Button colorScheme="orange" onClick={nextStep}>
          Continuer
        </Button>
      </Flex>
    </Box>
  );
};

export default Step12;
