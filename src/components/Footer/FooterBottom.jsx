import React from 'react';
import {
  Box, SimpleGrid, List, ListItem, Link, Container,
} from '@chakra-ui/react';

// Updated data to match the footer structure from the image
const footerData = [
  {
    title: 'ASSURANCE VIE',
    links: [
      { name: 'Le guide de l\'assurance vie', url: '#' },
      { name: 'Linxea Avenir 2', url: '#' },
      { name: 'Linxea Spirit 2', url: '#' },
      { name: 'Linxea Vie', url: '#' },
      { name: 'Linxea Zen', url: '#' },
      { name: 'Comparateur de contrat', url: '#' },
      { name: 'Fonds stars : la sélection Linxea', url: '#' },
    ],
  },
  {
    title: 'SCPI',
    links: [
      { name: 'Le guide Linxea des SCPI', url: '#' },
      { name: 'SCPI à crédit', url: '#' },
      { name: 'SCPI en nue-propriété', url: '#' },
      { name: 'Simulateur SCPI en nue-propriété', url: '#' },
      { name: 'Simulateur de SCPI à crédit', url: '#' },
      { name: 'SCPI de rendement', url: '#' },
    ],
  },
  // ... Add other categories
];

const FooterItem = ({ title, links }) => (
  <Box>
    <Box fontWeight="bold" mb={2}>{title}</Box>
    <List spacing={1}>
      {links.map((link, index) => (
        <ListItem key={index}>
          <Link href={link.url} color="gray.500" _hover={{ textDecoration: 'none', color: 'blue.500' }}>
            {link.name}
          </Link>
        </ListItem>
      ))}
    </List>
  </Box>
);

const FooterBottom = () => {
  return (
    <Box as="footer" bg="white" color="gray.700" py={10} borderTop="1px" borderColor="gray.200">
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={10}>
          {footerData.map((column, index) => (
            <FooterItem key={index} title={column.title} links={column.links} />
          ))}
        </SimpleGrid>
        {/* Add any additional elements such as social media icons or language selector if present in the image */}
      </Container>
    </Box>
  );
};

export default FooterBottom;
