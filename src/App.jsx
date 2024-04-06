import React, { useEffect, useState } from "react";
import { ChakraProvider, Box, Flex, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FullWidthBanner from "./components/header/FullWidthBanner";
import Headerb from "./components/Headerb";
import HeaderBar from "./components/HeaderBar";
import LazyComponentWrapper from './LazyComponentWrapper';
import createDynamicRoutes from './routes/routesConfig';
import AssuranceVie from './routes/assurancevie/index'; // Importez le composant AssuranceVie

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [categoriesWithSubs, setCategoriesWithSubs] = useState([]);

  // Logique de récupération des catégories avec useEffect, comme précédemment mentionné

  const dynamicRoutes = createDynamicRoutes(categoriesWithSubs);
  const combinedRoutes = [...dynamicRoutes];

  return (
    <ChakraProvider>
      <Router>
        <HeaderBar />
        <Headerb />
        <Box display={{ base: 'none', md: 'block' }}>
          <Navbar />
        </Box>
        <FullWidthBanner />
        <IconButton icon={<HamburgerIcon />} onClick={onOpen} display={{ base: "inline-flex", md: "none" }} aria-label="Open menu" position="absolute" top={4} left={4} />
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Navbar isDrawer={true} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Flex>
          <Box flex="1" p={5}>
            <Routes>
              {combinedRoutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    React.createElement(LazyComponentWrapper(route.component), {
                      ...route.data,
                      key: index,
                    })
                  }
                />
              ))}
              {/* Assurez-vous que la route vers AssuranceVie est correctement définie */}
              <Route path="/assurance vie" element={<AssuranceVie />} />
            </Routes>
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
};

export default App;
