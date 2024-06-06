import React, { useState } from 'react';
import { Box, Button, VStack, Heading, Text, Flex, useToast } from '@chakra-ui/react';

const Step1 = ({ nextStep }) => {
  const [selectedGoals, setSelectedGoals] = useState([]);
  const toast = useToast();

  const goals = [
    'Placer efficacement mes économies',
    'Transmettre mon patrimoine',
    'Préparer ma retraite',
    'Anticiper en cas de coup dur',
    'Réduire mes impôts',
  ];

  const handleGoalClick = (goal) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter((item) => item !== goal));
    } else if (selectedGoals.length < 3) {
      setSelectedGoals([...selectedGoals, goal]);
    } else {
      toast({
        title: 'Limite atteinte',
        description: 'Vous ne pouvez sélectionner que 3 projets maximum',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={5}>
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Pourquoi souhaitez-vous mettre de l'argent de côté ?
      </Heading>
      <Text textAlign="center" mb={6} color="orange.500">
        Sélectionnez votre/vos projets par ordre de priorité (3 maximum)
      </Text>
      <VStack spacing={4} mb={6}>
        {goals.map((goal) => (
          <Button
            key={goal}
            onClick={() => handleGoalClick(goal)}
            variant={selectedGoals.includes(goal) ? 'solid' : 'outline'}
            width="full"
          >
            {selectedGoals.includes(goal) ? `${selectedGoals.indexOf(goal) + 1}. ${goal}` : goal}
          </Button>
        ))}
      </VStack>
      <Flex justifyContent="space-between">
        <Box /> {/* This empty Box is to balance the Flex layout for the 'Continuer' button */}
        <Button onClick={nextStep} isDisabled={selectedGoals.length === 0}>
          Continuer
        </Button>
      </Flex>
    </Box>
  );
};

export default Step1;
