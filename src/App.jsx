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
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HeaderTop from "./components/HeaderTop";
import Header from "./components/Header";
import SubcategoriesDisplay from "./components/pages/SubcategoriesDisplay";
import { supabase } from './../supabase';
import ItemsForSaleSupabase from "./components/ItemForSaleSupabase";
import GemstoneAccordion from "./components/GemstoneAccordion";
import SearchAccordion from "./components/SearchAccordion";

const App = () => {
  const [categoriesWithSubs, setCategoriesWithSubs] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sidebarWidth = "250px"; 
  const sidebarComponentWidth = "250px";

  useEffect(() => {
    const fetchSubcategories = async () => {
      let { data: subcategories, error } = await supabase
        .from('subcategories')
        .select('*, categories(*)')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('error', error);
      } else {
        const grouped = subcategories.reduce((acc, subcategory) => {
          const categoryId = subcategory.category_id;
          if (!acc[categoryId]) {
            acc[categoryId] = {
              categoryId,
              categoryName: subcategory.categories.name,
              color: subcategory.categories.color,
              subcategories: []
            };
          }
          acc[categoryId].subcategories.push(subcategory);
          return acc;
        }, {});

        setCategoriesWithSubs(Object.values(grouped));
      }
    };

    fetchSubcategories();
  }, []);

  return (
    <ChakraProvider>
      <Router>
        <HeaderTop />
        <Header />
        <Flex>
          {/* Mobile Nav Drawer */}
          <IconButton
            icon={<HamburgerIcon />}
            onClick={onOpen}
            display={{ sm: "inline-flex", md: "none" }}
            aria-label="Open menu"
          />
          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Gemstones</DrawerHeader>
              <DrawerBody>
                <VStack spacing="24px" align="stretch">
                  <GemstoneAccordion width={sidebarWidth} />
                  <SearchAccordion width={sidebarWidth} />
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          {/* Sidebar for non-mobile */}
          <Box
            display={{ base: 'none', md: 'block' }} // Hide on base, show on md and up
            width={sidebarComponentWidth} // Use the fixed width for the sidebar
            p={4}>
            <VStack spacing={4}>
              <GemstoneAccordion style={{ minWidth: sidebarComponentWidth, maxWidth: sidebarComponentWidth }} />
              <SearchAccordion style={{ minWidth: sidebarComponentWidth, maxWidth: sidebarComponentWidth }} />
            </VStack>
          </Box>
{/* Main Content */}
          <Box flex="1" p={5}>
            <Routes>
              <Route path="/" element={<Navigate to="/art" />} />
              {categoriesWithSubs.map(category => (
                <Route key={category.categoryId} path={`/${category.categoryName.toLowerCase()}`} element={<SubcategoriesDisplay category={category} />} />
              ))}
            </Routes>
            <ItemsForSaleSupabase />
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
};

export default App;
