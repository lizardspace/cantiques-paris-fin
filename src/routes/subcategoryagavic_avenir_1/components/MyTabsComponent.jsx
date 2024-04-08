import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, useColorModeValue } from '@chakra-ui/react';
import FondsEnEuros from './tabFondsEnEuros';
import FraisConditions from './tabFraisConditions';
import GestionPilotee from './tabGestionPilotee';
import SupportsGestionLibre from './tabSupportsGestionLibre';
import SouscrireDocumentation from './tabSouscrireDocumentation';

const MyTabsComponent = () => {
  // Custom colors based on color mode
  const bg = useColorModeValue('gray.100', 'gray.700');
  const borderColor = useColorModeValue('gray.300', 'gray.600');
  const selectedBg = useColorModeValue('white', 'gray.800');
  const selectedColor = useColorModeValue('blue.600', 'blue.200');

  return (
    <Box p={4} bg={bg} borderRadius="lg" boxShadow="md">
      <Tabs variant="soft-rounded" colorScheme="blue">
        <TabList>
          {['Fonds en euros', 'Frais / conditions', 'Gestion pilotée', 'Supports en gestion libre', 'Souscrire / documentation'].map((tabName, index) => (
            <Tab
              key={index}
              _selected={{ bg: selectedBg, color: selectedColor, borderColor: selectedColor }}
              _focus={{ boxShadow: 'none' }}
            >
              {tabName}
            </Tab>
          ))}
        </TabList>
        <TabPanels mt={4}>
          <TabPanel>
            <FondsEnEuros />
          </TabPanel>
          <TabPanel>
            <FraisConditions />
          </TabPanel>
          <TabPanel>
            <GestionPilotee />
          </TabPanel>
          <TabPanel>
            <SupportsGestionLibre />
          </TabPanel>
          <TabPanel>
            <SouscrireDocumentation />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default MyTabsComponent;
