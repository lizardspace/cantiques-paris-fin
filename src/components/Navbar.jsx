// Navbar.jsx
import React from 'react';
import {
  VStack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Menu, MenuButton, MenuItem, MenuList,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import routes from './../routes'; // Importer les routes depuis routes.jsx

const Navbar = ({ isDrawer }) => {
  const navigate = useNavigate();

  const handleRouteClick = (path) => {
    navigate(path);
  };

  // Filtrer les routes pour exclure celles qui sont marquées comme 'hidden'
  const visibleRoutes = routes.filter(route => !route.hidden);

  // Regrouper les routes par catégories principales et sous-catégories
  const groupedRoutes = visibleRoutes.reduce((acc, route) => {
    if (route.parent) {
      if (!acc[route.parent]) {
        acc[route.parent] = [];
      }
      acc[route.parent].push(route);
    } else {
      acc[route.name] = route;
    }
    return acc;
  }, {});

  if (isDrawer) {
    // Drawer mode with Accordion
    return (
      <Accordion allowToggle>
        {Object.entries(groupedRoutes).map(([category, items]) => (
          Array.isArray(items) ? (
            <AccordionItem key={category}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {category}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                {items.map((route) => (
                  <Text
                    key={route.path}
                    onClick={() => handleRouteClick(route.path)}
                    cursor="pointer"
                    _hover={{ textDecoration: 'underline', color: 'blue.600' }}
                    p={2}
                  >
                    {route.name}
                  </Text>
                ))}
              </AccordionPanel>
            </AccordionItem>
          ) : (
            <AccordionItem key={items.path}>
              <AccordionButton onClick={() => handleRouteClick(items.path)}>
                <Box flex="1" textAlign="left">
                  {items.name}
                </Box>
              </AccordionButton>
            </AccordionItem>
          )
        ))}
      </Accordion>
    );
  } else {
    // Regular non-drawer Navbar
    return (
      <Flex justifyContent="center" p={4} borderBottom="1px" borderColor="gray.200" bg="white">
        {Object.entries(groupedRoutes).map(([category, items]) => (
          Array.isArray(items) ? (
            <Menu key={category}>
              <MenuButton
                as={Text}
                cursor="pointer"
                mx={2}
                _hover={{ textDecoration: 'underline' }}
              >
                {category} <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                {items.map((route) => (
                  <MenuItem key={route.path} onClick={() => handleRouteClick(route.path)}>
                    {route.name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          ) : (
            <Text
              key={items.path}
              cursor="pointer"
              mx={2}
              _hover={{ textDecoration: 'underline' }}
              onClick={() => handleRouteClick(items.path)}
            >
              {items.name}
            </Text>
          )
        ))}

        {/* Other menu items */}
        <Box flex="1"></Box>

        {/* Right-aligned items */}
        <Text mx={2} cursor="pointer" _hover={{ textDecoration: 'underline' }}>
          Contactez-Nous
        </Text>
        <Text mx={2} cursor="pointer" _hover={{ textDecoration: 'underline' }}>
          Livraison & Retours
        </Text>
        <Text mx={2} cursor="pointer" _hover={{ textDecoration: 'underline' }}>
          Estimation Bijou
        </Text>
      </Flex>
    );
  }
};

export default Navbar;
