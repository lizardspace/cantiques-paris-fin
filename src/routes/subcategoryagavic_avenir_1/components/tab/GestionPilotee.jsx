import { Tab, Tabs, TabList, TabPanel, TabPanels, Box } from '@chakra-ui/react';
import { Shield, Balance, Speed } from '@chakra-ui/icons';

const GestionPilotee = () => {
  // Define tab styles
  const tabStyles = {
    _selected: { bg: 'green.100', color: 'green.700', fontWeight: 'bold' },
    _hover: { bg: 'green.50', cursor: 'pointer' },
    p: 3,
  };

  return (
    <Tabs variant="soft-rounded" colorScheme="green">
      <TabList bg="green.200" borderRadius="md" p={2} mb={4}>
        <Tab {...tabStyles}>
          <Shield /> Défensif
        </Tab>
        <Tab {...tabStyles}>
          <Balance /> Équilibré
        </Tab>
        <Tab {...tabStyles}>
          <Speed /> Dynamique
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
            <p>Information on 'Équilibré' strategy</p>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
            <p>Information on 'Dynamique' strategy</p>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default GestionPilotee;
