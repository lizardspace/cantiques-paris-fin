// App.jsx
import React from "react";
import {
  ChakraProvider,
  Flex,
  Box,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemsForSaleSupabase from "./components/main/ItemForSaleSupabase";
import FullWidthBanner from "./components/header/FullWidthBanner";
import Headerb from "./components/Headerb";
import HeaderBar from "./components/HeaderBar";
import ItemDetail from "./components/main/ItemDetail";
import routesConfig, { createDynamicRoutes } from './routes/routesConfig';
import LazyComponentWrapper from './LazyComponentWrapper';

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Logic to fetch categories from Supabase can be placed here or inside useEffect
  const categoriesWithSubs = []; // Assume this is fetched and formatted as needed

  const dynamicRoutes = createDynamicRoutes(categoriesWithSubs);
  const combinedRoutes = [...routesConfig, ...dynamicRoutes];

  return (
    <ChakraProvider>
      <Router>
      <HeaderBar />
        <Headerb />
        {/* Navbar only visible on larger screens */}
        <Box display={{ base: 'none', md: 'block' }}>
          <Navbar />
        </Box>
        <FullWidthBanner />
        {/* Mobile Nav Button */}
        <IconButton
          icon={<HamburgerIcon />}
          onClick={onOpen}
          display={{ base: "inline-flex", md: "none" }}
          aria-label="Open menu"
          position="absolute"
          top={4}
          left={4}
        />
        {/* Mobile Drawer */}
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              {/* Navbar for small screens, within the Drawer */}
              <Navbar isDrawer={true} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Flex>
          {/* Main Content */}
          <Box flex="1" p={5}>
        <Routes>
          {combinedRoutes.map((route) => (
            <Route 
              key={route.path} 
              path={route.path} 
              element={LazyComponentWrapper(route.component)({ data: route.data })} 
            />
          ))}
        </Routes>
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
};

export default App;
