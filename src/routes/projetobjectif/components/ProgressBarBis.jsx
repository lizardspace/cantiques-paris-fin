import React from 'react';
import { Progress, Box, Flex, Text } from '@chakra-ui/react';

// Sample component to represent a step
const Step = ({ title, isCurrent }) => (
  <Box minW="100px">
    <Text fontSize="sm" fontWeight={isCurrent ? 'bold' : 'normal'} color={isCurrent ? 'orange.400' : 'gray.500'}>
      {title}
    </Text>
  </Box>
);

const ProgressBar = ({ steps, currentStep }) => {
  // Calculate the percentage of the completed steps
  const progressValue = (currentStep / steps.length) * 100;

  return (
    <Flex direction="column" width="100%" p={4}>
      <Flex justifyContent="space-between" mb={4}>
        {steps.map((step, index) => (
          <Step key={step} title={step} isCurrent={index + 1 === currentStep} />
        ))}
      </Flex>
      <Progress value={progressValue} size="sm" colorScheme="orange" />
    </Flex>
  );
};

const ProgressBarBis = () => {
  // Array of steps
  const steps = ['Project', 'Subscription', 'Signature', 'Step 4', 'Step 5', 'Step 6', 'Step 7', 'Step 8', 'Step 9', 'Step 10', 'Step 11'];

  // Current step index (1-based)
  const currentStep = 3; // Change this to the current step number

  return <ProgressBar steps={steps} currentStep={currentStep} />;
};

export default ProgressBarBis;
