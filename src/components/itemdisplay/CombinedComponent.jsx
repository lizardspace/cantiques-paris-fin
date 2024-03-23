import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Select,
  Stack,
  Divider,
  Link,
  Image,
  VStack,
  HStack,
  useRadioGroup,
  useRadio,
  useStyleConfig,
} from '@chakra-ui/react';

function ProductCardWithImageSelector({ images }) {
  const [selectedImg, setSelectedImg] = useState(images[0]);
  
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'scrollableImageSelector',
    defaultValue: selectedImg,
    onChange: setSelectedImg,
  });

  const group = getRootProps();

  const RadioCard = (props) => {
    const { getInputProps, getCheckboxProps } = useRadio(props);
    const input = getInputProps();
    const checkbox = getCheckboxProps();
    const styles = useStyleConfig("Radio", props);

    return (
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
          {...styles}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          _checked={{
            borderColor: 'blue.600',
            boxShadow: 'outline',
          }}
          _focus={{
            boxShadow: 'outline',
          }}
          _hover={{
            boxShadow: 'lg',
          }}
        >
          {props.children}
        </Box>
      </Box>
    );
  };

  return (
    <Box maxW="3xl" borderWidth="1px" borderRadius="lg" p={4} m={4}>
      <Stack direction="row" spacing={4}>
        <VStack>
          <Image
            src={selectedImg}
            boxSize="300px"
            objectFit="cover"
            boxShadow="lg"
            border={selectedImg ? '2px' : 'none'}
            borderColor="blue.600"
          />
          <HStack {...group} overflowX="scroll" padding={4} w="full">
            {images.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard key={value} {...radio}>
                  <Image src={value} boxSize="100px" m={2} />
                </RadioCard>
              );
            })}
          </HStack>
        </VStack>
        <VStack>
          <Heading mb={6}>Solitaire et alliance Or blanc Diamants</Heading>
          <Text fontSize="xl" fontWeight="bold">
            1,290.00 €
          </Text>
          <Text mb={3}>Livraison gratuite sécurisée FR & UE | Expédition sous 1-2 Jours</Text>
          <Text mb={3}>Vendeur professionnel | Avec certificat d'expertise</Text>
          <Text mb={3}>Ou 430 €/mois - 3x sans frais avec alma</Text>
          <Box>
            <Text mb={1}>Taille: 52</Text>
            <Select placeholder="Select size" mb={3}>
              <option value="52">52</option>
              {/* Add more sizes as needed */}
            </Select>
          </Box>
          <Stack direction="row" spacing={4} mb={3}>
            <Button flex={1} colorScheme="black" variant="solid">
              AJOUTER AU PANIER
            </Button>
            <Button flex={1} variant="outline">
              FAIRE UNE OFFRE DE PRIX
            </Button>
          </Stack>
          <Divider mb={3} />
          <Text mb={3}>Ensemble de 2 bagues, un solitaire et une alliance en or blanc 14 carats sertie de diamants d'environ 0.34 cts G / VS taille brillant.</Text>
          <Text mb={3}>Poids: 4.90 grammes</Text>
          <Text mb={3}>Taille de doigt: 52 / 16.5 mm / US 6</Text>
          <Text mb={3}>Poinçons francs coquille.</Text>
          <Text mb={3}>Excellent état.</Text>
          <Text mb={3}>Réf: M89292B2086/</Text>
          <Text mb={3}>Référence 58 Facettes : 8956691579209</Text>
          <Link color="teal.500" href="#" mb={3}>
            PRENDRE RDV
          </Link>
          <Text mb={3}>Livraison & Retours gratuits. Livré depuis...</Text>
        </VStack>
      </Stack>
    </Box>
  );
}

// Usage of ProductCardWithImageSelector component
const CombinedComponent = () => {
  // Replace these with your image sources
  const images = [
    '/images/BijouxPage/bijoux.jpg',
    '/images/BijouxPage/diamant.jpg',
    '/images/BijouxPage/pierresprecieuses.jpg',
    // ...other images
  ];

  return (
    <Box>
      <ProductCardWithImageSelector images={images} />
    </Box>
  );
};

export default CombinedComponent;
