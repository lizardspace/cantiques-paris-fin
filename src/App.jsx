import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import HeaderTop from "./components/HeaderTop";
import Header from "./components/Header";
import SubcategoriesDisplay from "./components/pages/SubcategoriesDisplay"; // Import the SubcategoriesDisplay component
import { supabase } from './../supabase';
import ArtChoices from "./components/pages/ArtChoices";
import IntérieurPage from "./components/pages/IntérieurPage";
import BijouxPage from "./components/pages/BijouxPage";
import CarousselVentePopulaire from "./components/CarousselVentePopulaire";
import ItemForSale from "./components/ItemForSale";
import FooterComponent from "./components/FooterComponent";
import FooterBottom from "./components/FooterBottom";
import Caroussel from "./components/Caroussel";
import HorizontalCarousel from "./components/HorizontalCaroussel";
import HorizontalCarouselBis from "./components/HorizontalCarousselBis";

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

  const generateRoutes = () => {
    return categoriesWithSubs.map(category => (
      <Route key={category.categoryId} path={`/${category.categoryName.toLowerCase()}`} element={<SubcategoriesDisplay category={category} />} />
    ));
  };

  return (
    <ChakraProvider>
      <Router>
        <HeaderTop />
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/art" />} />
          {generateRoutes()}
        </Routes>
        <Heading>Collections populaires</Heading>
        {/* Your other components... */}
      </Router>
    </ChakraProvider>
  );
};

export default App;
