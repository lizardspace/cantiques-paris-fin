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
  const images = item.images || [item.image_url];

  // Affichage des méthodes de paiement comme liste
  const paymentMethods = item.payment_methods ? item.payment_methods.join(', ') : 'Non spécifié';

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
        <Divider />
        <Text><strong>Description :</strong> {item.item_description}</Text>
        <Text><strong>Estimation de la galerie :</strong> {item.estimated_gallery_value}</Text>
        <Text><strong>Sélectionné par :</strong> {item.selected_by}</Text>
        <Text><strong>Méthodes de paiement :</strong> {paymentMethods}</Text>
        <Text><strong>Informations légales :</strong> {item.legal_information}</Text>
        <Text><strong>Marque :</strong> {item.brand}</Text>
        <Text><strong>Poids :</strong> {item.weight}</Text>
        <Text><strong>Dimensions :</strong> {item.dimensions}</Text>
        <Text><strong>Pierre :</strong> {item.pierre}</Text>
        <Text><strong>Métal :</strong> {item.metal}</Text>
        <Text><strong>Genre :</strong> {item.genre}</Text>
        <Button colorScheme="blue" size="lg">Acheter maintenant</Button>
      </VStack>
    </Flex>
  );
};

export default ItemDetail;
