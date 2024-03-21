import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import SaleItemCard from './SaleItemCard'; // Adjust the import path as needed
import { supabase } from './../../supabase'; // Import your configured Supabase client

const ItemsForSaleSupabase = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const { data: fetchedItems, error } = await supabase
        .from('items')
        .select('image_url, title, current_offer, closing_time')
        // Optionally add filters or ordering
        .order('closing_time', { ascending: true });

      if (error) {
        console.error('error', error);
      } else {
        // Transform fetched items for the component's state
        const itemsWithProps = fetchedItems.map(item => ({
          imageUrl: item.image_url,
          title: item.title,
          price: item.current_offer,
          daysLeft: calculateDaysLeft(item.closing_time),
          likes: 0, // This needs to be handled based on your app's functionality
        }));

        setItems(itemsWithProps);
      }
    };

    fetchItems();
  }, []);

  // Helper function to calculate days left from closing_time
  const calculateDaysLeft = (closingTime) => {
    const now = new Date();
    const closingDate = new Date(closingTime);
    const differenceInTime = closingDate.getTime() - now.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays >= 0 ? differenceInDays : 0;
  };

  return (
    <Box>
      {items.map((item, index) => (
        <SaleItemCard key={index} {...item} />
      ))}
    </Box>
  );
};

export default ItemsForSaleSupabase;
