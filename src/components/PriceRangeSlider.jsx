import React, { useState } from 'react';
import {
  Box,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  NumberInput,
  NumberInputField,
  Text,
  VStack
} from '@chakra-ui/react';

const PriceRangeSlider = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(122000);

  const handleMinPriceChange = (value) => setMinPrice(value);
  const handleMaxPriceChange = (value) => setMaxPrice(value);

  return (
    <VStack align="stretch" spacing={4}>
      <Box>
        <Text mb={2} fontWeight="semibold">
          PRIX
        </Text>
        <Flex justify="space-between">
          <NumberInput maxW="100px" value={minPrice} onChange={handleMinPriceChange} min={0} max={maxPrice}>
            <NumberInputField pl="2" />
          </NumberInput>
          <Text mx={2}>-</Text>
          <NumberInput maxW="100px" value={maxPrice} onChange={handleMaxPriceChange} min={minPrice} max={122000}>
            <NumberInputField pl="2" />
          </NumberInput>
        </Flex>
      </Box>
      <Slider aria-label="slider-ex-4" min={0} max={122000} step={500} defaultValue={[minPrice, maxPrice]} onChangeStart={handleMinPriceChange} onChangeEnd={handleMaxPriceChange}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={6} index={0} />
        <SliderThumb boxSize={6} index={1} />
      </Slider>
      <Flex justify="space-between" px={2}>
        <Text>0</Text>
        <Text>30 500</Text>
        <Text>61 000</Text>
        <Text>91 500</Text>
        <Text>122 000</Text>
      </Flex>
    </VStack>
  );
};

export default PriceRangeSlider;
