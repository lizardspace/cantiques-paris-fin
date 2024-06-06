import React, { useState } from 'react';
import { Box, Button, VStack, Heading, Text, Stack, useToast } from '@chakra-ui/react';

const Step1 = () => {
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
    <Box>
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Pourquoi souhaitez-vous mettre de l'argent de côté ?
      </Heading>
      <Text textAlign="center" mb={6} color="orange.500">
        Sélectionnez votre/vos projets par ordre de priorité (3 maximum)
      </Text>
      <VStack spacing={4}>
        {goals.map((goal, index) => (
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
    </Box>
  );
};

export default Step1;
