import React, { Suspense, lazy, useEffect, useState } from "react";
import { ChakraProvider, Box, Flex, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import FullWidthBanner from "./components/header/FullWidthBanner";
import Headerb from "./components/Headerb";
import HeaderBar from "./components/HeaderBar";
import Footer from "./components/Footer/Footer";
import FooterBottom from "./components/Footer/FooterBottom";


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
  const [loadError, setLoadError] = useState(false);

  const currentPath = location.pathname;
  const componentName = currentPath.split('/').filter(Boolean).map(part => part.replace(/%20/g, '_')).join('');
  const componentFilePath = `./routes/${componentName}/index.jsx`;

  const ComponentToRender = lazy(() =>
  import(/* @vite-ignore */ componentFilePath)
    .catch(() => {
      return new Promise((resolve) => setTimeout(resolve, 10000))
        .then(() => import(/* @vite-ignore */ componentFilePath))
        .catch(() => {
          setLoadError(true);
          return import('./NotFound.jsx');
        });
    })
);


  useEffect(() => {
    setLoadError(false); // Réinitialiser l'état d'erreur lors du changement de route
    console.log("Location pathname:", currentPath);
    console.log("Component name:", componentName);
    console.log("Component file path:", componentFilePath);
  }, [currentPath, componentName, componentFilePath]);

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
      <Footer/>
      <FooterBottom/>
    </>
  );
};

export default App;
