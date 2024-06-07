// src/routes/SouscrireSCPI/MultiStepForm.jsx
import React, { useState } from 'react';
import { Box, Button, Flex, Progress, Text } from '@chakra-ui/react';
import Step1 from './etapes/Step1';
// Import other steps
import Step2 from './etapes/Step2';
import Step3 from './etapes/Step3';
import Step4 from './etapes/Step4';
import Step5 from './etapes/Step5';

const steps = [
  { component: Step1, label: 'Projet' },
  { component: Step2, label: 'Souscription' },
  { component: Step3, label: 'Versement Mensuel' },
  { component: Step4, label: 'Horizon de Placement' },
  { component: Step5, label: 'Accès aux Fonds' },
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
      <Flex justifyContent="space-between">
        {currentStep > 0 && <Button onClick={prevStep}>Précédent</Button>}
        {currentStep < steps.length - 1 && <Button onClick={nextStep}>Suivant</Button>}
      </Flex>
    </Box>
  );
};

export default MultiStepForm
