import { Tab, Tabs, TabList, TabPanel, TabPanels } from '@chakra-ui/react';
import { Shield, Balance, Speed } from '@chakra-ui/icons'; // Assuming these icons are suitable for your tab names

const GestionPilotee = () => {
  // Define tab styles
  const tabStyles = {
    _selected: { bg: 'green.100', color: 'green.700' },
    _hover: { bg: 'green.50' },
    p: 3, // padding
  };

  return (
    <Tabs>
      <TabList>
        <Tab {...tabStyles}>
          <Shield /> {/* Icon for Défensif */}
          Défensif
        </Tab>
        <Tab {...tabStyles}>
          <Balance /> {/* Icon for Équilibré */}
          Équilibré
        </Tab>
        <Tab {...tabStyles}>
          <Speed /> {/* Icon for Dynamique */}
          Dynamique
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>4,38% Performance 2023</p>
          <p>Le portefeuille est principalement composé d'actifs sécuritaires (fonds euro ou supports monétaires et obligataires) avec une faible part d'actifs risqués (actions).</p>
          {/* Include more details or components for the "Défensif" strategy */}
        </TabPanel>
        <TabPanel>
          <p>Information on 'Équilibré' strategy</p>
          {/* Include details or components for the "Équilibré" strategy */}
        </TabPanel>
        <TabPanel>
          <p>Information on 'Dynamique' strategy</p>
          {/* Include details or components for the "Dynamique" strategy */}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};


export default GestionPilotee;
