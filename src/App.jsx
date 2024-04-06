import React, { useState } from "react";
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
  const [categoriesWithSubs, setCategoriesWithSubs] = useState([]);

  const urlPath = decodeURIComponent(location.pathname);
  
  const normalizeComponentName = (name) => {
    if (typeof name !== 'string') {
      console.error("Expected 'name' to be a string", name);
      name = String(name);
    }
    return name.replace(/\s+/g, '');
  };

  // Définissez `createDynamicRoutes` ici avant de l'utiliser
  const createDynamicRoutes = (urlPath) => {
    const component = urlPath.split('/').pop();
    const normalizedComponent = normalizeComponentName(component);

    const dynamicRoute = {
      path: urlPath,
      component: normalizedComponent, // Assurez-vous que ceci est une chaîne
      data: {} // Des données supplémentaires si nécessaire
    };

    return [dynamicRoute];
  };

  // Initialisez `dynamicRoutes` juste après sa définition
  const dynamicRoutes = createDynamicRoutes(urlPath);

  const LazyComponentWrapper = (componentName) => {
    const normalizedComponentName = normalizeComponentName(componentName);
    const Component = React.lazy(() => import(`./routes/${normalizedComponentName}/index.jsx`));
  
    return (props) => (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </React.Suspense>
    );
  };

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
          <Routes>
            {dynamicRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<LazyComponentWrapper component={route.component} />}
              />
            ))}
          </Routes>
        </Box>
      </Flex>
    </>
  );
};

export default App;
