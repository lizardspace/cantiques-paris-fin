import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../../supabase';
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Button,
  Link,
  Divider,
  useStyleConfig,
} from '@chakra-ui/react';

const ItemDetail = () => {
  const { itemId } = useParams();
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
  }, [itemId]);

  if (!item) {
    return <Box textAlign="center" py="5">Chargement...</Box>;
  }

  // Imaginons que `item.images` contienne un tableau d'URLs d'images pour l'item
  const images = item.images || [item.image_url]; // Fallback sur image_url si images n'est pas disponible

  return (
    <Flex direction={{ base: "column", md: "row" }} padding="5">
      <VStack flex={{ base: "none", md: "1" }} alignItems="center">
        <Image src={images[0]} boxSize="300px" objectFit="cover" boxShadow="lg" mb="4" />
        <HStack overflowX="auto">
          {images.map((src, index) => (
            <Image key={index} src={src} boxSize="100px" m="2" _hover={{ transform: 'scale(1.1)' }} transition="transform .2s" cursor="pointer" />
          ))}
        </HStack>
      </VStack>
      <VStack flex={{ base: "none", md: "1" }} p="4" spacing="4" alignItems="start">
        <Heading size="lg">{item.title}</Heading>
        <Text fontSize="xl" color="blue.500">{item.current_offer} €</Text>
        <Text>{item.item_description}</Text> {/* Affichez la description de l'item */}
        {/* Incluez ici les autres détails de l'item que vous souhaitez afficher */}
        <Button colorScheme="blue" size="lg">Acheter maintenant</Button>
        <Link color="blue.600" href="#">Plus de détails</Link>
      </VStack>
    </Flex>
  );  
};

export default ItemDetail;
