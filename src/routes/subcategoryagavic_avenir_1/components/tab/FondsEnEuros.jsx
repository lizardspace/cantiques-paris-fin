import React from 'react';
import {
  Box,
  Text,
  VStack,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '2023', uv: 2.5 },
  { name: '2024', uv: 4.5, bonus: 2 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Box p="2" bg="white" boxShadow="md">
        <Text>{`${label} : ${payload[0].value} %`}</Text>
        {payload[1] && <Text>{`Bonus: ${payload[1].value} %`}</Text>}
      </Box>
    );
  }

  return null;
};

const FondsEnEuros = () => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const color = useColorModeValue('black', 'white');

  return (
    <VStack
      p={4}
      bg={bgColor}
      boxShadow="md"
      borderRadius="lg"
      align="center"
      spacing={4}
    >
      <Text fontSize="lg" fontWeight="bold" color={color}>
        Objectif 4,50% net de frais de gestion en 2024
      </Text>
      <Text color="green.500">
        +2% sur le rendement du fonds en euros Suravenir Opportunités 2
      </Text>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="uv" fill="#8884d8" />
          <Bar dataKey="bonus" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      <Button colorScheme="teal" variant="solid">
        Découvrir l'offre
      </Button>
      <Text fontSize="sm" color={color}>
        Du 27/01/2024 au 31/12/2024, Suravenir applique une bonification de 2 % net...
        {/* Insert the rest of the text here */}
      </Text>
    </VStack>
  );
};

export default FondsEnEuros;
