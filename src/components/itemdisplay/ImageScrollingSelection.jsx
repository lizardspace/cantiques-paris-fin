import React, { useState } from 'react';
import {
  Box,
  Image,
  VStack,
  HStack,
  useRadioGroup,
  useRadio,
  useStyleConfig,
} from '@chakra-ui/react';

function ScrollableImageSelector({ images }) {
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
    <VStack>
      <Image
        src={selectedImg}
        boxSize="300px"
        objectFit="cover"
        m={4}
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
  );
}

// Usage of ScrollableImageSelector component
const ImageScrollingSelection = () => {
  // Replace these with your image sources
  const images = [
    'public/images/BijouxPage/bijoux.jpg',
    'public/images/BijouxPage/diamant.jpg',
    'public/images/BijouxPage/pierresprecieuses.jpg',
    // ...other images
  ];

  return (
    <Box>
      <ScrollableImageSelector images={images} />
    </Box>
  );
};

export default ImageScrollingSelection;
