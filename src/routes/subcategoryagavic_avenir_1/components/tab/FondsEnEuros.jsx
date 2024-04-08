import React from 'react';
import { Box, Text, VStack, Button, useColorModeValue, HStack, Icon } from '@chakra-ui/react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { MdInfoOutline } from 'react-icons/md';

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
      <Box p="2" bg="white" boxShadow="md" borderRadius="md">
        <Text fontWeight="bold">{`${label}`}</Text>
        <Text>{`Rendement : ${payload[0].value}%`}</Text>
        {payload[1] && <Text>{`Bonus : ${payload[1].value}%`}</Text>}
      </Box>
    );
  }
  return null;
};

const FondsEnEuros = () => {
  const textColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <VStack
      p={4}
      bg="white"
      boxShadow="md"
      borderRadius="lg"
      align="center"
      spacing={4}
      width="100%"
      maxWidth="100%"
    >
      <Text fontSize="xl" fontWeight="bold"> {/* Modifié la taille du texte */}
        Objectif 4,50% net de frais de gestion en 2024
      </Text>
      <HStack alignItems="center"> {/* Utilisation de HStack pour placer l'icône et le texte sur la même ligne */}
        <Icon as={MdInfoOutline} color="green.500" />
        <Text color="green.500" fontSize="lg" fontWeight="medium"> {/* Augmenter la taille du texte et changer le poids de la police */}
          +2% sur le rendement du fonds en euros Suravenir Opportunités 2
        </Text>
      </HStack>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis hide={true} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="uv" stackId="a" fill="#FFA500" barSize={300} radius={[0, 0, 0, 0]} />
          <Bar dataKey="bonus" stackId="a" fill="#32CD32" barSize={100} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <Button colorScheme="teal" size="lg"> {/* Augmenter la taille du bouton */}
        Découvrir l'offre
      </Button>
      <Text fontSize="md" textAlign="center" fontWeight="bold" color={textColor}> {/* Augmenter la taille du texte */}
        Du 27/01/2024 au 31/12/2024, Suravenir applique une bonification...
        {/* Insert the rest of the text here */}
      </Text>
    </VStack>
  );
};

export default FondsEnEuros;
