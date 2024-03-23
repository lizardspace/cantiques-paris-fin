// ItemDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../../supabase'; // Import your configured Supabase client

const ItemDetail = () => {
  const { itemId } = useParams(); // Get the itemId from route parameters
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const { data: fetchedItem, error } = await supabase
        .from('items')
        .select('*')
        .eq('id', itemId)
        .single();

      if (error) {
        console.error('error', error);
      } else {
        setItem(fetchedItem);
      }
    };

    fetchItem();
  }, [itemId]); // Fetch item details when itemId changes

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      {/* Render other item details */}
    </div>
  );
};

export default ItemDetail;
