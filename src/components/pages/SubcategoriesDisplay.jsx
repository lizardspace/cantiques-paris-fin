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

const SubcategoriesDisplay = () => {
  const [categoriesWithSubs, setCategoriesWithSubs] = useState([]);

  useEffect(() => {
    const fetchSubcategories = async () => {
      let { data: subcategories, error } = await supabase
        .from('subcategories')
        .select('*, categories(*)') // Fetches all subcategories along with their parent category
        .order('created_at', { ascending: true });

      if (error) console.error('error', error);
      else {
        // Group subcategories by their category_id
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
    <Flex direction="column" align="center" p="4">
      {categoriesWithSubs.map(category => (
        <Flex key={category.categoryId} direction="column" align="center" mb="8">
          <Heading mb="6" color={`${category.color}.500`}>{category.categoryName}</Heading>
          <Flex wrap="wrap" justify="center" gap="4">
            {category.subcategories.map(subcategory => (
              <SubChoiceCard key={subcategory.id} imageSrc={subcategory.image_url} title={subcategory.name} />
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default SubcategoriesDisplay;
