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

  // Logique pour récupérer les catégories avec useEffect

  const urlPath = decodeURIComponent(location.pathname);
  const normalizeComponentName = (name) => {
    // Vérifie si 'name' est une chaîne; si ce n'est pas le cas, convertissez-la en chaîne
    if (typeof name !== 'string') {
      console.error("Expected 'name' to be a string", name);
      // Convertissez 'name' en chaîne si possible ou gérez l'erreur différemment
      name = String(name);
    }
    
    // Remplacez les espaces par rien ou un autre caractère valide
    return name.replace(/\s+/g, '');
  };

  const LazyComponentWrapper = (componentName) => {
    const normalizedComponentName = normalizeComponentName(componentName);
    const Component = React.lazy(() => import(`./routes/${normalizedComponentName}/index.jsx`));

    return (props) => (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </React.Suspense>
    );
  };

  const createDynamicRoutes = (urlPath) => {
    const component = urlPath.split('/').pop(); // Utilisez la dernière partie de l'URL comme nom de composant
    const normalizedComponent = normalizeComponentName(component);

    const dynamicRoute = {
      path: urlPath,
      component: normalizedComponent, // Nom de composant normalisé
      data: {} // Vous pouvez ajouter des données supplémentaires ici si nécessaire
    };

    return [dynamicRoute];
  };

  const dynamicRoutes = createDynamicRoutes(urlPath);

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
                element={
                  <LazyComponentWrapper component={route.component} />
                }
              />
            ))}
          </Routes>
        </Box>
      </Flex>
    </>
  );
};

export default App;
