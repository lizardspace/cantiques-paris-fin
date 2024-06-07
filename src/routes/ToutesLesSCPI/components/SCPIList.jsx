import React, { useState } from 'react';
import { Box, Input, Select, Switch, Button, HStack, VStack, Text, Image, Grid, IconButton, Table, Thead, Tbody, Tr, Th, Td, Tooltip, Spacer } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { FaThList, FaTh } from 'react-icons/fa';
import { MdKeyboardArrowRight } from "react-icons/md";

const SCPIList = () => {
  const [view, setView] = useState('grid');

  const scpis = [
    {
      name: 'Activimmo',
      rate: '5,52 %',
      year: '2023',
      label: 'LABEL ISR',
      manager: 'ALDERAN',
      category: 'Logistique',
      capital: '812 Millions €',
      image: '/images/estate.jpg',
    },
    {
      name: 'Aestiam Cap\' Hebergimmo',
      rate: '4,01 %',
      year: '2023',
      label: '',
      manager: 'AESTIAM',
      category: 'Hôtellerie',
      capital: '81 Millions €',
      image: '/images/estate.jpg',
    },
    {
      name: 'Aestiam Pierre Rendement',
      rate: '5,01 %',
      year: '2023',
      label: '',
      manager: 'AESTIAM',
      category: 'Commerce',
      capital: '413 Millions €',
      image: '/images/estate.jpg',
    },
    // Add more SCPI data here
  ];

  return (
    <Box bg="white" py={10} px={6} borderRadius="lg" boxShadow="md" mx={4}>
      <VStack spacing={6} maxW="1200px" mx="auto" align="start">
        <HStack spacing={4} w="100%" justify="space-between">
          <HStack spacing={2}>
            <Input placeholder="Rechercher un SCPI" variant="outline" size="md" />
            <IconButton
              icon={<SearchIcon />}
              colorScheme="orange"
              aria-label="Search SCPI"
              variant="outline"
            />
            <IconButton
              icon={view === 'grid' ? <FaThList /> : <FaTh />}
              colorScheme="orange"
              aria-label="Toggle View"
              variant="outline"
              onClick={() => setView(view === 'grid' ? 'list' : 'grid')}
            />
          </HStack>
          <HStack spacing={4}>
            <Select placeholder="Trier par" variant="outline">
              <option value="name">Nom</option>
              <option value="capitalization">Capitalisation</option>
              <option value="distribution">Taux de distribution</option>
            </Select>
            <HStack spacing={2}>
              <Text>Label ISR</Text>
              <Switch size="lg" />
            </HStack>
            <HStack spacing={2}>
              <Text>Disponible en ligne</Text>
              <Switch size="lg" />
            </HStack>
            <Spacer />
            <Button pl="20px" rightIcon={<MdKeyboardArrowRight />} colorScheme="orange" variant="link">Comparer les SCPI</Button>
          </HStack>
        </HStack>
        {view === 'grid' ? (
          <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6} w="100%">
            {scpis.map((scpi, index) => (
              <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                <Image src={scpi.image} alt={`${scpi.name} Image`} />
                <Box p={4}>
                  <Text fontSize="lg" fontWeight="bold" color="blue.900">{scpi.name}</Text>
                  <Text color="orange.400" fontSize="sm">en {scpi.year} : {scpi.rate}</Text>
                  <HStack spacing={2} mt={2}>
                    {scpi.label && <Button size="xs" variant="outline" colorScheme="blue">{scpi.label}</Button>}
                    <Button size="xs" variant="outline" colorScheme="blue">{scpi.manager}</Button>
                    <Button size="xs" variant="outline" colorScheme="blue">{scpi.category}</Button>
                  </HStack>
                  <Button mt={4} colorScheme="orange" variant="link">En savoir plus</Button>
                </Box>
              </Box>
            ))}
          </Grid>
        ) : (
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>SCPI</Th>
                <Th>Société de gestion</Th>
                <Tooltip label="Le Taux de Distribution mesure le rendement financier annuel d'une SCPI. C'est le dividende brut annuel, avant fiscalité et prélèvement libératoire (y compris les acomptes exceptionnels et quote-part de plus-values) divisé par le prix de souscription au 1er janvier de la même année. Les performances passées ne préjugent pas des performances futures." fontSize="md" placement="top">
                  <Th>Taux de distribution</Th>
                </Tooltip>
                <Th>Catégorie</Th>
                <Th>Capitalisation</Th>
                <Th>Label ISR</Th>
              </Tr>
            </Thead>
            <Tbody>
              {scpis.map((scpi, index) => (
                <Tr key={index}>
                  <Td>{scpi.name}</Td>
                  <Td>{scpi.manager}</Td>
                  <Td>{scpi.rate}</Td>
                  <Td>{scpi.category}</Td>
                  <Td>{scpi.capital}</Td>
                  <Td>{scpi.label && <Image src="/images/estate.jpg" alt="Label ISR" boxSize="20px" />}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </VStack>
    </Box>
  );
};

export default SCPIList;
