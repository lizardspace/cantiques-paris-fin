import React, { useEffect, useState } from "react";
import { Flex, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { supabase } from './../../supabase'; // Import the Supabase client

const Header = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      let { data: categories, error } = await supabase
        .from('categories')
        .select('*');

      if (error) console.error('error', error);
      else setCategories(categories);
    };

    fetchCategories();
  }, []);

  return (
    <Flex as="header" width="100%" align="center" justify="center" p="4">
      <Flex gap="2" align="center">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="ghost"
            colorScheme={category.color}
            onClick={() => navigate(category.path)}>
            {category.name}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default Header;
