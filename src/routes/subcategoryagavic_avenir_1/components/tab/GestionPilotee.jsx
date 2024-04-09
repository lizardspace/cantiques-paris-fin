import { Tab, Tabs, TabList, TabPanel, TabPanels, Box, Flex } from '@chakra-ui/react';
import { FaShieldAlt, FaBalanceScale, FaTachometerAlt } from 'react-icons/fa';

const GestionPilotee = () => {
  // Define tab styles
  const tabStyles = {
    _selected: { bg: 'green.100', color: 'green.700', fontWeight: 'bold' },
    _hover: { bg: 'green.50', cursor: 'pointer' },
    p: 3,
  };

  // Define icon styles
  const iconStyles = { marginRight: '0.5rem', fontSize: '1.2rem' };

  return (
    <Tabs variant="soft-rounded" colorScheme="green">
      <TabList bg="green.200" borderRadius="md" p={2} mb={4}>
        <Tab {...tabStyles}>
          <Flex align="center">
            <FaShieldAlt color="green" style={iconStyles} /> Défensif
          </Flex>
        </Tab>
        <Tab {...tabStyles}>
          <Flex align="center">
            <FaBalanceScale color="blue" style={iconStyles} /> Équilibré
          </Flex>
        </Tab>
        <Tab {...tabStyles}>
          <Flex align="center">
            <FaTachometerAlt color="orange" style={iconStyles} /> Dynamique
          </Flex>
        </Tab>
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
      </TabPanels>
    </Tabs>
  );
};

export default GestionPilotee;
