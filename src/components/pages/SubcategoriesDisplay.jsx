// SubcategoriesDisplay.jsx
import React, { useEffect, useState } from "react";
import { Flex, Box, Image, Text, Heading } from "@chakra-ui/react";
import { supabase } from './../../../supabase';

const SubChoiceCard = ({ imageSrc, title }) => {
  return (
    <Box w="300px" h="300px" bg="pink.100" borderRadius="lg" overflow="hidden" position="relative">
      <Image src={imageSrc} alt={title} objectFit="cover" boxSize="100%" />
      <Box position="absolute" bottom="0" left="0" right="0" p="4" bg="rgba(0, 0, 0, 0.5)">
        <Text color="white" fontWeight="bold" fontSize="lg">{title}</Text>
      </Box>
    </Box>
  );
};

const SubcategoriesDisplay = ({ category }) => {
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    const fetchSubcategories = async () => {
      let { data: subcategories, error } = await supabase
        .from('subcategories')
        .select('*')
        .eq('category_id', category.categoryId)
        .order('created_at', { ascending: true });

      if (error) console.error('error', error);
      else {
        setSubcategories(subcategories);
      }
    };

    fetchSubcategories();
  }, [category]);

  return (
    <Flex direction="column" align="center" p="4">
      <Heading mb="6" color={`${category.color}.500`}>{category.categoryName}</Heading>
      <Flex wrap="wrap" justify="center" gap="4">
        {subcategories.map(subcategory => (
          <SubChoiceCard key={subcategory.id} imageSrc={subcategory.image_url} title={subcategory.name} />
        ))}
      </Flex>
    </Flex>
  );
};

export default SubcategoriesDisplay;
