import React from 'react';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { AiOutlineClockCircle, AiOutlineSafety, AiOutlineLock } from 'react-icons/ai';
import { FaRegLifeRing } from 'react-icons/fa';
import { BsShieldLockFill } from 'react-icons/bs';

const FeatureCard = ({ icon, title, text }) => {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
    >
      <Flex direction="column" align="center" justify="center">
        <Box as={icon} p={2} fontSize="3xl" color="blue.500" />
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4}>{text}</Text>
      </Flex>
    </Box>
  );
};

const Features = () => {
  return (
    <VStack spacing={4}>
      <Heading>Construisons ensemble votre projet</Heading>
      <Flex wrap="wrap" justify="center" gap={6}>
        <FeatureCard
          icon={AiOutlineClockCircle}
          title="Simple et rapide"
          text="Prenez quelques minutes pour répondre à nos questions"
        />
        <FeatureCard
          icon={FaRegLifeRing}
          title="Assurance vie et PER"
          text="Des produits adaptés à chacun de vos projets"
        />
        <FeatureCard
          icon={BsShieldLockFill}
          title="Vos données sécurisées"
          text="Vos données sont confidentielles et protégées : elles servent à vous délivrer le meilleur conseil"
        />
      </Flex>
    </VStack>
  );
};

export default Features;
