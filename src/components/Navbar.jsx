import React, { useState, useEffect } from 'react';
import { Flex, Text, Menu, MenuButton, MenuItem, MenuList, Box } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { supabase } from './../../supabase'; // Import the Supabase client

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      let { data: categories, error } = await supabase
        .from('categories')
        .select('*');

      if (error) console.error('error', error);
      else {
        // Fetch subcategories for each category
        for (const category of categories) {
          let { data: subcategories, error: subError } = await supabase
            .from('subcategories')
            .select('*')
            .eq('category_id', category.id);

          if (subError) console.error('subError', subError);
          else category.subcategories = subcategories;
        }

        setCategories(categories);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Flex justifyContent="center" p={4} borderBottom="1px" borderColor="gray.200" bg="white">
      {categories.map((category) => (
        <Menu key={category.id}>
          <MenuButton as={Text} cursor="pointer" mx={2} _hover={{ textDecoration: 'underline' }}>
            {category.name} <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            {category.subcategories && category.subcategories.map((subcategory) => (
              <MenuItem key={subcategory.id}>{subcategory.name}</MenuItem>
            ))}
          </MenuList>
        </Menu>
      ))}

      {/* Other menu items */}


      {/* Spacer */}
      <Box flex="1"></Box>

      {/* Align these items to the right */}
      <Text mx={2} cursor="pointer" _hover={{ textDecoration: 'underline' }}>Contactez-Nous</Text>
      <Text mx={2} cursor="pointer" _hover={{ textDecoration: 'underline' }}>Livraison & Retours</Text>
      <Text mx={2} cursor="pointer" _hover={{ textDecoration: 'underline' }}>Estimation Bijou</Text>
    </Flex>
  );
};

export default Navbar;
