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
  {
    title: 'AUTRES SOLUTIONS',
    links: [
      { name: 'Plan Epargne Retraite', url: '#' },
      { name: 'Défiscalisation', url: '#' },
      { name: 'Produits Structurés', url: '#' },
      { name: 'Epargne', url: '#' },
      { name: 'Moderniser votre contrat Linxea Avenir vers Linxea Avenir 2', url: '#' },
    ],
  },
  {
    title: 'DÉCOUVREZ-NOUS',
    links: [
      { name: 'Qui sommes-nous ?', url: '#' },
      { name: 'Conseil', url: '#' },
      { name: 'Notre équipe', url: '#' },
      { name: 'Nos récompenses', url: '#' },
      { name: 'Nos sponsorings', url: '#' },
      { name: 'Nos partenaires', url: '#' },
      { name: 'Parrainage', url: '#' },
      { name: 'Presse', url: '#' },
      { name: 'Nous rejoindre', url: '#' },
    ],
  },
  {
    title: 'OUTILS',
    links: [
      { name: 'Modifier mes préférences de cookies', url: '#' },
      { name: 'Tous les documents', url: '#' },
      { name: 'Liste des supports', url: '#' },
      { name: 'Simulateur de frais', url: '#' },
      { name: 'Simulateur d’épargne', url: '#' },
    ],
  },
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
