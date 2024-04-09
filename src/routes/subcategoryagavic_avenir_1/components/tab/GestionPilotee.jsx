import { Tab, Tabs, TabList, TabPanel, TabPanels, Box, Grid } from '@chakra-ui/react';
import { FaShieldAlt, FaBalanceScale, FaTachometerAlt, FaFire } from 'react-icons/fa';
import InvestmentManagementComponent from './InvestmentManagementComponent';

const GestionPilotee = () => {
  // Define tab styles
  const tabStyles = {
    _selected: { bg: 'green.100', color: 'green.700', fontWeight: 'bold', height: '3rem' }, // Hauteur de 3rem pour l'onglet sélectionné
    _hover: { bg: 'green.50', cursor: 'pointer' },
    px: 4,
    py: 2,
  };

  // Define icon styles
  const iconStyles = { marginRight: '0.5rem', fontSize: '1.2rem' };

  return (
    <>
    <Tabs variant="soft-rounded" colorScheme="green">
      <TabList bg="green.200" borderRadius="md" mb={4} px={10} p={5}> {/* Ajout de padding horizontal */}
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          <Tab {...tabStyles}>
            <FaShieldAlt color="green" style={iconStyles} /> Défensif
          </Tab>
          <Tab {...tabStyles}>
            <FaBalanceScale color="blue" style={iconStyles} /> Équilibré
          </Tab>
          <Tab {...tabStyles}>
            <FaTachometerAlt color="orange" style={iconStyles} /> Dynamique
          </Tab>
          <Tab {...tabStyles}>
            <FaFire color="red" style={iconStyles} /> Agressif
          </Tab>
        </Grid>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
            <p>4,38% Performance 2023</p>
            <p>Le portefeuille est principalement composé d'actifs sécuritaires (fonds euro ou supports monétaires et obligataires) avec une faible part d'actifs risqués (actions).</p>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
            <p>Information sur la stratégie 'Équilibré'</p>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
            <p>Information sur la stratégie 'Dynamique'</p>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
            <p>Information sur la stratégie 'Agressif'</p>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
    <InvestmentManagementComponent/>
    </>
  );
};

export default GestionPilotee;
