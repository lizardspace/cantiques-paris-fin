import React from 'react';
import { Box, Text, VStack, Button } from '@chakra-ui/react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '2023', uv: 2.5 },
  {
    name: '2024',
    uv: 2.5, // Base percentage
    bonus: 2, // Bonus percentage
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <Box p="2" bg="white" boxShadow="md">
        <Text fontWeight="bold">{`${label}`}</Text>
        <Text>{`Rendement : ${payload[0].value}%`}</Text>
        {payload[1] && <Text>{`Bonus : ${payload[1].value}%`}</Text>}
      </Box>
    );
  }

  return null;
};

const FondsEnEuros = () => {
  return (
    <VStack
      p={4}
      bg="white"
      boxShadow="md"
      borderRadius="lg"
      align="center"
      spacing={4}
      maxWidth="400px"
    >
      <Text fontSize="lg" fontWeight="bold">
        Objectif 4,50% net de frais de gestion en 2024
      </Text>
      <Text color="green.500" fontSize="sm" mb={4}>
        +2% sur le rendement du fonds en euros Suravenir Opportunités 2
      </Text>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis hide={true} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="uv" stackId="a" fill="#FFA500" barSize={35} radius={[10, 10, 0, 0]} />
          <Bar dataKey="bonus" stackId="a" fill="#32CD32" barSize={35} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <Button colorScheme="teal" size="sm">
        Découvrir l'offre
      </Button>
      <Text fontSize="xs">
        Du 27/01/2024 au 31/12/2024, Suravenir applique une bonification...
        {/* Insert the rest of the text here */}
      </Text>
    </VStack>
  );
};

export default FondsEnEuros;
