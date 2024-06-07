// src/routes/SouscrireSCPI/etapes/Step9.jsx
import React from 'react';
import { Box, Button, VStack, Text, Input, HStack, Divider, FormControl, FormLabel, Link, Icon } from '@chakra-ui/react';
import { MdArrowBack } from "react-icons/md";

const Step9 = ({ prevStep, nextStep }) => {
  return (
    <Box textAlign="center">
      <VStack spacing={6} mb={6}>
        <HStack spacing={8} w="100%">
          <Box flex="1" textAlign="left">
            <Text fontSize="xl" fontWeight="bold">
              Pas encore client ? Rejoignez-nous !
            </Text>
            <Button colorScheme="orange" size="lg" mt={4}>
              Créer un compte
            </Button>
          </Box>
          <Divider orientation="vertical" height="120px" />
          <Box flex="1" textAlign="left">
            <Text fontSize="xl" fontWeight="bold">
              Déjà client ? Connectez-vous !
            </Text>
            <FormControl id="email" mt={4}>
              <FormLabel>Identifiant ou email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" mt={4}>
              <FormLabel>Mot de passe</FormLabel>
              <Input type="password" />
            </FormControl>
            <HStack justify="space-between" mt={2}>
              <Link color="blue.500" href="#">
                Identifiant oublié
              </Link>
              <Link color="blue.500" href="#">
                Mot de passe oublié
              </Link>
            </HStack>
            <Button colorScheme="gray" mt={4} w="full" isDisabled>
              Se connecter
            </Button>
          </Box>
        </HStack>
      </VStack>
      <VStack spacing={4} mb={6}>
        <HStack spacing={4}>
          <Text fontSize="lg" fontWeight="bold">
            Leader indépendant de l’épargne en ligne
          </Text>
        </HStack>
        <HStack spacing={4}>
          <Text fontSize="lg" fontWeight="bold">
            +100 000 clients heureux
          </Text>
        </HStack>
        <HStack spacing={4}>
          <Text fontSize="lg" fontWeight="bold">
            20 ans de conception de produits d’épargne, pour vous
          </Text>
        </HStack>
      </VStack>
      <HStack justifyContent="space-between">
        <Button onClick={prevStep} variant="link" leftIcon={<Icon as={MdArrowBack} />}>
          Précédent
        </Button>
        <Button colorScheme="orange" onClick={nextStep}>
          Suivant
        </Button>
      </HStack>
    </Box>
  );
};

export default Step9;
