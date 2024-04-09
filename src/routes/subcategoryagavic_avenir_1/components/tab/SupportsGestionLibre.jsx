import React from 'react';
import { Box, Text, VStack, HStack, Button, useColorModeValue } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const SupportsGestionLibre = () => {
  // Couleur du texte peut changer en fonction du mode (clair/sombre)
  const textColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <Box borderWidth="1px" borderRadius="lg" p={5} textAlign="left">
      <VStack spacing={4} align="stretch">
        <Text fontSize="xl" fontWeight="bold" color={textColor}>
          Tous les supports disponibles
        </Text>
        <HStack justify="space-between">
          <VStack align="start">
            <Text color={textColor}>
              En gestion libre, c'est à vous de choisir la répartition de vos investissements. Sur Linxea Avenir 2, vous disposez d'un large choix de supports financiers parmi lesquels :
            </Text>
            <HStack>
              <FaCheckCircle color="green" />
              <Text color={textColor}>Plus de 600 supports couvrant tous les niveaux de risque et les différents types d'investissement (OPCVM, Immobiliers, ETF). Ces supports présentent un risque de perte en capital.</Text>
            </HStack>
            <HStack>
              <FaCheckCircle color="green" />
              <Text color={textColor}>Le + Linxea : une pré-sélection de Fonds Stars pour vous aider dans vos choix de supports et des exemples d'allocations en fonction de votre profil.</Text>
            </HStack>
          </VStack>
          <VStack align="start">
            <HStack>
              <FaCheckCircle color="green" />
              <Text color={textColor}>2 fonds euro pour sécuriser votre épargne.</Text>
            </HStack>
            <HStack>
              <FaCheckCircle color="green" />
              <Text color={textColor}>Des options vous sont proposées dans le cadre de la gestion libre pour vous aider à bien gérer votre contrat. Elles vous permettent de programmer des arbitrages qui se déclenchent en fonction de l'évolution des marchés financiers et des paramètres que vous aurez choisis.</Text>
            </HStack>
            <HStack>
              <FaCheckCircle color="green" />
              <Text color={textColor}>213 fonds labellisés et 163 fonds classés article 8 ou 9 SFDR du règlement européen Disclosure.</Text>
            </HStack>
          </VStack>
        </HStack>
        <HStack spacing={4}>
          <Button colorScheme="orange">Découvrir nos allocations stars</Button>
          <Button colorScheme="teal">Découvrir tous les supports</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default SupportsGestionLibre;
