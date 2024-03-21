// App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import HeaderTop from "./components/HeaderTop";
import Header from "./components/Header";
import SubcategoriesDisplay from "./components/pages/SubcategoriesDisplay";
import { supabase } from './../supabase';
import CollectionCard from "./components/CollectionCard";
import CollectionPreview from "./components/CollectionPreview";
import ItemForSale from "./components/ItemForSale";
import ItemsForSaleSupabase from "./components/ItemForSaleSupabase";
import GemstoneAccordion from "./components/GemstoneAccordion";

const App = () => {
  const [categoriesWithSubs, setCategoriesWithSubs] = useState([]);

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
        <Routes>
          <Route path="/" element={<Navigate to="/art" />} />
          {categoriesWithSubs.map(category => (
            <Route key={category.categoryId} path={`/${category.categoryName.toLowerCase()}`} element={<SubcategoriesDisplay category={category} />} />
          ))}
        </Routes>
        <ItemsForSaleSupabase/>
        <GemstoneAccordion/>
      </Router>
    </ChakraProvider>
  );
};

export default App;
