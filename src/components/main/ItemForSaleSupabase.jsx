// Adjusted ItemsForSaleSupabase.jsx

import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import SaleItemCard from '../SaleItemCard'; // Adjust the import path as needed
import { supabase } from '../../../supabase'; // Import your configured Supabase client

const ItemsForSaleSupabase = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const { data: fetchedItems, error } = await supabase
        .from('items')
        .select('id, image_url, title, current_offer, closing_time')
        .order('closing_time', { ascending: true });

      if (error) {
        console.error('error', error);
      } else {
        const itemsWithProps = fetchedItems.map(item => ({
          id: item.id, // Add id property
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
  }, []);

  const calculateDaysLeft = (closingTime) => {
    const now = new Date();
    const closingDate = new Date(closingTime);
    const differenceInTime = closingDate.getTime() - now.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays >= 0 ? differenceInDays : 0;
  };

  return (
    <Box padding="4">
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="4">
        {items.map((item) => (
          <SaleItemCard key={item.id} id={item.id} imageUrl={item.imageUrl} title={item.title} price={item.price} daysLeft={item.daysLeft} likes={item.likes} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ItemsForSaleSupabase;
