import React, { useState } from 'react';
import { Box, Button, VStack, Heading, Text, Stack, Progress, Flex } from '@chakra-ui/react';
import Step1 from './etapes/Step1'; // Import the Step1 component (replace with actual component paths)
// Import other steps similarly

const steps = [
  { component: Step1, label: 'Projet' },
  // Add other steps similarly
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentComponent = steps[currentStep].component;

  return (
    <Box p={5}>
      <Progress value={(currentStep + 1) / steps.length * 100} mb={6} />
      <Flex justifyContent="space-between" mb={4}>
        <Text>{steps[currentStep].label}</Text>
        <Text>Étape {currentStep + 1}/{steps.length}</Text>
      </Flex>
      <CurrentComponent />
      <Flex mt={4} justifyContent="space-between">
        <Button onClick={prevStep} isDisabled={currentStep === 0}>
          Précédent
        </Button>
        <Button onClick={nextStep} isDisabled={currentStep === steps.length - 1}>
          Continuer
        </Button>
      </Flex>
    </Box>
  );
};

export default MultiStepForm;
