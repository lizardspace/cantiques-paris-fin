// src/routes/SouscrireSCPI/MultiStepForm.jsx
import React, { useState } from 'react';
import { Box, Button, Flex, Progress, Text } from '@chakra-ui/react';
import Step1 from './etapes/Step1';
import Step2 from './etapes/Step2';
import Step3 from './etapes/Step3';
import Step4 from './etapes/Step4';
import Step5 from './etapes/Step5';
import Step6 from './etapes/Step6';  // Import Step6

const steps = [
  { component: Step1, label: 'Projet' },
  { component: Step2, label: 'Souscription' },
  { component: Step3, label: 'Pour qui' },
  { component: Step4, label: 'Date de naissance' },
  { component: Step5, label: 'Nationalité et Résidence Fiscale' },
  { component: Step6, label: 'Statut Américain' },  // Add Step6
  // Add more steps as needed
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const CurrentComponent = steps[currentStep].component;

  return (
    <Box p={5}>
      <Progress
        value={(currentStep + 1) / steps.length * 100}
        mb={6}
        colorScheme="orange"
      />
      <Flex justifyContent="space-between" mb={6}>
        <Text>{steps[currentStep].label}</Text>
        <Text>Étape {currentStep + 1}/{steps.length}</Text>
      </Flex>
      <Box mb={6}>
        <CurrentComponent prevStep={prevStep} nextStep={nextStep} />
      </Box>
    </Box>
  );
};

export default MultiStepForm;
