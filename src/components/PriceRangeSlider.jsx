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
  VStack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb
} from '@chakra-ui/react';

const PriceRangeSlider = () => {
  const [range, setRange] = useState([0, 122000]);

  const handleRangeChange = (newRange) => {
    setRange(newRange);
  };

  return (
    <VStack align="stretch" spacing={4}>
      <Box>
        <Text mb={2} fontWeight="semibold">
          PRIX
        </Text>
        <Flex justify="space-between">
          <NumberInput maxW="100px" value={range[0]} onChange={(value) => handleRangeChange([parseInt(value), range[1]])} min={0} max={range[1]}>
            <NumberInputField pl="2" />
          </NumberInput>
          <Text mx={2}>-</Text>
          <NumberInput maxW="100px" value={range[1]} onChange={(value) => handleRangeChange([range[0], parseInt(value)])} min={range[0]} max={122000}>
            <NumberInputField pl="2" />
          </NumberInput>
        </Flex>
      </Box>
      <RangeSlider aria-label={['min', 'max']} defaultValue={[0, 122000]} value={range} onChange={handleRangeChange}>
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
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
