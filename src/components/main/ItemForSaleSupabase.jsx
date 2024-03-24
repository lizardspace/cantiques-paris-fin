import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import SaleItemCard from './SaleItemCard'; // Adjust the import path as needed
import { supabase } from '../../../supabase'; // Import your configured Supabase client
import { useParams } from 'react-router-dom'
// Include subcategory as a new prop
const ItemsForSaleSupabase = ({ category, subcategory }) => {
  const [items, setItems] = useState([]);
  const { subcat } = useParams(); // Si vous utilisez 'subcategory/:subcat' comme chemin
  const decodedSubcat = decodeURIComponent(subcat); 

  useEffect(() => {
    const fetchItems = async () => {
      let { data: fetchedItems, error } = await supabase
        .from('items')
        .select('id, image_url, title, current_offer, closing_time, categories(*), subcategories(*)') // Ensure you are selecting subcategories as well
        .order('closing_time', { ascending: true });
  
      if (error) {
        console.error('error', error);
      } else {
        // Adjust filtering to accommodate subcategory if provided
        if (category) {
          fetchedItems = fetchedItems.filter(item => item.categories.name.toLowerCase() === category.toLowerCase());
        } else if (subcategory) {
          // Add a filtering condition for subcategory
          fetchedItems = fetchedItems.filter(item => item.subcategories.name.toLowerCase() === subcategory.toLowerCase());
        }
  
        const itemsWithProps = fetchedItems.map(item => ({
          id: item.id,
          imageUrl: item.image_url,
          title: item.title,
          price: item.current_offer,
          daysLeft: calculateDaysLeft(item.closing_time),
          likes: 0, // Adjust based on your app's functionality
        }));
  
        setItems(itemsWithProps);
      }
    };
  
    fetchItems();
  }, [category, subcategory]); // Add subcategory to the dependency array

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