import React from 'react';
import { Box, Image, Text, Flex, Badge, IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SaleItemCard = ({ id, imageUrl, title, price, daysLeft, likes }) => {
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
          <Badge ml="2" colorScheme="blue" borderRadius="full">
            {likes}
          </Badge>
        </Box>
      </Box>

      <Box p="6">
        <Flex direction="column" mt="2">
          <Text fontWeight="bold" textTransform="uppercase" fontSize="sm" letterSpacing="wide">
            {title}
          </Text>

          <Flex justifyContent="space-between" alignItems="center" mt="4">
            <Badge colorScheme="teal" borderRadius="full" px="2">
              OFFRE ACTUELLE
            </Badge>
            <Text fontWeight="bold" fontSize="2xl">
              {price} €
            </Text>
          </Flex>

          <Flex justifyContent="flex-end" mt="4">
            <Badge colorScheme="orange" fontSize="0.8em" borderRadius="full" px="2">
              Il reste {daysLeft} jours
            </Badge>
          </Flex>
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
