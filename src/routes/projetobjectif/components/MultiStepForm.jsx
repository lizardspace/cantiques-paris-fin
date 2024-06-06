import React, { useState } from 'react';
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
// Import other steps similarly

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
  // Add other steps similarly
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

  return <CurrentComponent prevStep={prevStep} nextStep={nextStep} chooseDifferentContract={chooseDifferentContract} />;
};

export default MultiStepForm;
