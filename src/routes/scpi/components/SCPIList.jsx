import React from 'react';
import { Box, Image, Text, VStack, HStack, Link, Badge, SimpleGrid } from '@chakra-ui/react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const SCPIList = () => {
  const scpis = [
    {
      image: 'public/images/scpi1.jpg', // Replace with actual image path
      title: 'SCPI ActivImmo',
      td: '5,52 %',
      year: '2023',
      manager: 'Alderan',
      category: 'Logistique',
      capital: 'SCPI à capital variable',
      label: 'Label ISR',
    },
    {
      image: 'public/images/scpi2.jpg', // Replace with actual image path
      title: 'SCPI Pierval Santé',
      td: '5,10 %',
      year: '2023',
      manager: 'Euryale AM',
      category: 'Santé',
      capital: 'SCPI à capital variable',
      label: '',
    },
    {
      image: 'public/images/scpi3.jpg', // Replace with actual image path
      title: 'SCPI Remake Live',
      td: '7,79 %',
      year: '',
      manager: 'Remake AM',
      category: 'Diversifiée',
      capital: 'SCPI à capital variable',
      label: 'Label ISR',
    },
  ];

  return (
    <Box bg="white" py={10} px={6} borderRadius="lg" boxShadow="lg" mx={4}>
      <VStack spacing={8} maxW="1200px" mx="auto">
        <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color="blue.900">
          Toutes les SCPI
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="100%">
          {scpis.map((scpi, index) => (
            <Box
              key={index}
              bg="white"
              p={4}
              borderRadius="lg"
              boxShadow="md"
              overflow="hidden"
              _hover={{ boxShadow: 'lg', transform: 'translateY(-4px)' }}
              transition="all 0.3s ease-in-out"
            >
              <Image
                src={scpi.image}
                alt={scpi.title}
                borderRadius="md"
                boxShadow="md"
                objectFit="cover"
                h="150px"
                w="100%"
              />
              <VStack align="start" spacing={2} mt={4}>
                <Text fontSize="lg" fontWeight="bold" color="blue.900">{scpi.title}</Text>
                <Text fontSize="sm" color="gray.700">TD pour {scpi.year} : <Text as="span" fontWeight="bold" color="orange.400">{scpi.td}</Text></Text>
                <Text fontSize="sm" color="gray.700">{scpi.manager}</Text>
                <HStack spacing={2} wrap="wrap">
                  <Badge colorScheme="gray">{scpi.category}</Badge>
                  <Badge colorScheme="gray">{scpi.capital}</Badge>
                  {scpi.label && <Badge colorScheme="blue">{scpi.label}</Badge>}
                </HStack>
                <HStack align="center">
                  <Link color="orange.400" href="#" fontSize="sm" fontWeight="bold">En savoir plus</Link>
                  <MdKeyboardArrowRight color="orange.400" />
                </HStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
        <HStack align="center" mt={6}>
          <Link color="orange.400" href="#" fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold">
            Voir toutes nos SCPI
          </Link>
          <MdKeyboardArrowRight color="orange.400" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default SCPIList;
