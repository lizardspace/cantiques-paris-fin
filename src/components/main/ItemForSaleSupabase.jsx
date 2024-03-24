import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import SaleItemCard from './SaleItemCard'; // Ajustez le chemin d'importation si nécessaire
import { supabase } from '../../../supabase'; // Importez votre client Supabase configuré
import { useParams } from 'react-router-dom'; // Importez useParams

const ItemsForSaleSupabase = ({ category }) => {
  const [items, setItems] = useState([]);
  const { subcat } = useParams(); // Extrait le paramètre de sous-catégorie de l'URL
  const decodedSubcat = subcat ? decodeURIComponent(subcat).toLowerCase() : null;

  useEffect(() => {
    const fetchItems = async () => {
      let { data: fetchedItems, error } = await supabase
        .from('items')
        .select('id, image_url, title, current_offer, closing_time, categories(*), subcategories(*)')
        .order('closing_time', { ascending: true });
  
      if (error) {
        console.error('error', error);
      } else {
        if (category) {
          fetchedItems = fetchedItems.filter(item => item.categories.name.toLowerCase() === category.toLowerCase());
        } else if (decodedSubcat) {
          // Utilisez decodedSubcat pour le filtrage par sous-catégorie
          fetchedItems = fetchedItems.filter(item => item.subcategories.name.toLowerCase() === decodedSubcat);
        }
  
        const itemsWithProps = fetchedItems.map(item => ({
          id: item.id,
          imageUrl: item.image_url,
          title: item.title,
          price: item.current_offer,
          daysLeft: calculateDaysLeft(item.closing_time),
          likes: 0, // Ajustez en fonction de la fonctionnalité de votre application
        }));
  
        setItems(itemsWithProps);
      }
    };
  
    fetchItems();
  }, [category, decodedSubcat]); // Ajoutez decodedSubcat comme dépendance

  const calculateDaysLeft = (closingTime) => {
    const now = new Date();
    const closingDate = new Date(closingTime);
    const differenceInTime = closingDate.getTime() - now.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays >= 0 ? differenceInDays : 0;
  };

  return (
    <Box padding="4">
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 6 }} spacing="4">
        {items.map((item) => (
          <SaleItemCard key={item.id} id={item.id} imageUrl={item.imageUrl} title={item.title} price={item.price} daysLeft={item.daysLeft} likes={item.likes} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ItemsForSaleSupabase;
