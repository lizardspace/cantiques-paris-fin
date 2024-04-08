import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';

const MyTabsComponent = () => {
  return (
    <Box p={4}>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Fonds en euros</Tab>
          <Tab>Frais / conditions</Tab>
          <Tab>Gestion pilotée</Tab>
          <Tab>Supports en gestion libre</Tab>
          <Tab>Souscrire / documentation</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Content for Fonds en euros</p>
          </TabPanel>
          <TabPanel>
            <p>Content for Frais / conditions</p>
          </TabPanel>
          <TabPanel>
            <p>Content for Gestion pilotée</p>
          </TabPanel>
          <TabPanel>
            <p>Content for Supports en gestion libre</p>
          </TabPanel>
          <TabPanel>
            <p>Content for Souscrire / documentation</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default MyTabsComponent;
