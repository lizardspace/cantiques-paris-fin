import React, { useState } from 'react';
import { Box, Button, Flex, Progress, Text } from '@chakra-ui/react';
import Step1 from './etapes/Step1';
import Step2 from './etapes/Step2';
import Step3 from './etapes/Step3';
import Step4 from './etapes/Step4';
import Step5 from './etapes/Step5';
import Step6 from './etapes/Step6';
import Step7 from './etapes/Step7';
import Step8 from './etapes/Step8';
import Step9 from './etapes/Step9';
import Step10 from './etapes/Step10';
import Step11 from './etapes/Step11';
import Step12 from './etapes/Step12';
import Step13 from './etapes/Step13'; // Import Step13

const steps = [
  { component: Step1, label: 'Projet' },
  { component: Step2, label: 'Souscription' },
  { component: Step3, label: 'Versement Mensuel' },
  { component: Step4, label: 'Horizon de Placement' },
  { component: Step5, label: 'Accès aux Fonds' },
  { component: Step6, label: 'Date de Naissance' },
  { component: Step7, label: 'Nationalité et Résidence Fiscale' },
  { component: Step8, label: 'Protection Juridique' },
  { component: Step9, label: 'Souscription' },
  { component: Step10, label: 'Gestion de l\'Épargne' },
  { component: Step11, label: 'Type d\'Investisseur' },
  { component: Step12, label: 'Conclusion' },
  { component: Step13, label: 'Choix du Contrat' }, // Add Step13
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const chooseDifferentContract = () => {
    // Implement the logic to choose a different contract
  };

  const CurrentComponent = steps[currentStep].component;

  return (
    <Box p={5}>
      <Progress
        value={Math.min((currentStep + 1), 12) / 12 * 100}
        mb={6}
        colorScheme="orange"
      />
      <Flex justifyContent="space-between" mb={6}>
        <Text>{steps[currentStep].label}</Text>
        <Text>Étape {Math.min((currentStep + 1), 12)}/12</Text>
      </Flex>
      <Box mb={6}>
        <CurrentComponent prevStep={prevStep} nextStep={nextStep} chooseDifferentContract={chooseDifferentContract} />
      </Box>
    </Box>
  );
};

export default MultiStepForm;
