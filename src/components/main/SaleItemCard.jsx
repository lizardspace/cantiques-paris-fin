import React from 'react';
import { Box, Image, Text, Flex, Badge, IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SaleItemCard = ({ id, imageUrl, title, price, item_description }) => {
  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bg={cardBg}>
      <Box position="relative">
        <Image src={imageUrl} alt={title} borderRadius="lg" borderTopRadius="lg" borderBottomRadius="0" />
      <Box position="absolute" top="2" right="2" display="flex" alignItems="center">
            <IconButton
              aria-label={`Like ${title}`}
              icon={<FaHeart />}
              size="sm"
              colorScheme="teal"
              variant="solid"
              borderRadius="full"
            />
        </Box>
      </Box>

        <Box p="6">
        <Flex direction="column" mt="2">
          <Text fontSize="lg">
            {price} €
          </Text>
        </Flex>
<Link to={`/${id}`} style={{ textDecoration: 'none' }}>
          <Text mt="2" color="blue.400" fontSize="sm" fontWeight="bold">
            View Details
          </Text>
        </Link>
      </Box>
    </Box>
  );
};

export default SaleItemCard;
