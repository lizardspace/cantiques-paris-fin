// App.jsx
import React, { useEffect, useState } from "react";
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
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { supabase } from './../supabase';
import ItemsForSaleSupabase from "./components/main/ItemForSaleSupabase";
import FullWidthBanner from "./components/header/ FullWidthBanner";
import Headerb from "./components/Headerb";
import HeaderBar from "./components/HeaderBar";
import ItemDetail from "./components/main/ItemDetail";

const App = () => {
  const [categoriesWithSubs, setCategoriesWithSubs] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Router>
        <HeaderBar />
        <Headerb />
        <Navbar />
        <FullWidthBanner />
        {/* Mobile Nav Button */}
        <IconButton
          icon={<HamburgerIcon />}
          onClick={onOpen}
          display={{ sm: "inline-flex", md: "none" }}
          aria-label="Open menu"
          position="absolute" // Adjust this as needed
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
              <Navbar />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        {/* Main Content and Static Navbar */}
        <Flex>
          {/* Main Content */}
          <Box flex="1" p={5}>
              <Routes>
                <Route path="/" element={<ItemsForSaleSupabase />} />
                {categoriesWithSubs.map(category => (
                  <Route key={category.categoryId} path={`/${category.categoryName.toLowerCase()}`} element={<ItemsForSaleSupabase category={category.categoryName} />} />
                ))}
                <Route path="/subcategory/:subcat" element={<ItemsForSaleSupabase />} />
                <Route path="/item/:itemId" element={<ItemDetail />} /> {/* Route pour les détails de l'item */}
              </Routes>
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
};

export default App;
