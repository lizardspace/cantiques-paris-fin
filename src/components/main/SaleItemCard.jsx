import React from 'react';
import { Box, Image, Text, Flex, IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';


const SaleItemCard = ({ id, imageUrl, title, price }) => {
  const navigate = useNavigate();
  const handleItemClick = () => {
    navigate(`/item/${id}`); // Navigue vers les détails de l'item
  };
  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <div onClick={handleItemClick} style={{ cursor: 'pointer' }}>
    <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg={cardBg}
        _hover={{ boxShadow: "md" }}
        cursor="pointer"
        transition="all 0.3s"
      >
        <Image src={imageUrl} alt={title} borderTopRadius="lg" minHeight="200px" />
        <Box px="3" pb="3">
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="lg" fontWeight="bold">{price} €</Text>
          </Flex>
        </Box>

        <Flex justifyContent="space-between" alignItems="center" px="3" pb="3">
          <Text fontSize="lg" fontWeight="bold">{title}</Text>
          <IconButton
            aria-label={`Like ${title}`}
            icon={<FaHeart />}
            size="sm"
            colorScheme="blue"
            variant="solid"
            borderRadius="full"
          />
        </Flex>


      </Box>
    </Link>
    </div>
  );
};

export default SaleItemCard;
