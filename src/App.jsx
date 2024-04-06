import React, { Suspense, lazy, useState, useEffect } from "react";
import { ChakraProvider, Box, Flex, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import FullWidthBanner from "./components/header/FullWidthBanner";
import Headerb from "./components/Headerb";
import HeaderBar from "./components/HeaderBar";

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <InnerApp />
      </Router>
    </ChakraProvider>
  );
};

const InnerApp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  // Fonction pour nettoyer et normaliser le chemin d'accès
  const getComponentName = (path) => {
    // Exemple: convertit "/assurance-vie" en "AssuranceVie"
    const name = path.split('/').filter(Boolean).map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
    return name;
  };

  const ComponentName = getComponentName(location.pathname);
  // Chargez le composant correspondant de manière paresseuse
  const ComponentToRender = lazy(() => import(`./routes/${ComponentName}/index.jsx`).catch(() => import('./NotFound.jsx')));

  useEffect(() => {
    // Met à jour le composant à rendre chaque fois que l'URL change
    getComponentName(location.pathname);
  }, [location.pathname]);

  return (
    <>
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
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="*" element={<ComponentToRender />} />
            </Routes>
          </Suspense>
        </Box>
      </Flex>
    </>
  );
};

export default App;
