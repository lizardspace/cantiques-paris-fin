import React, { useState, useEffect } from 'react';
import { Flex, Box, Text, Menu, MenuButton, MenuItem, MenuList, VStack } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { supabase } from './../../supabase'; // Import the Supabase client

const Navbar = ({ isDrawer }) => {
    const [categories, setCategories] = useState([]);
    const [openMenuId, setOpenMenuId] = useState(null); // State to store the ID of the open menu
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            let { data: categories, error } = await supabase
                .from('categories')
                .select('*');

            if (error) console.error('error', error);
            else {
                for (const category of categories) {
                    let { data: subcategories, error: subError } = await supabase
                        .from('subcategories')
                        .select('*')
                        .eq('category_id', category.id);

                    if (subError) console.error('subError', subError);
                    else category.subcategories = subcategories;
                }

                setCategories(categories);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryClick = (categoryName) => {
        navigate(`/${categoryName.toLowerCase()}`);
    };

    const handleSubcategoryClick = (subcategoryName) => {
        const path = encodeURIComponent(subcategoryName.toLowerCase());
        navigate(`/subcategory/${path}`); // Utilisez une route spécifique pour les sous-catégories
    };

    const openMenu = (categoryId) => {
        setOpenMenuId(categoryId);
    };

    const closeMenu = () => {
        setOpenMenuId(null);
    };
    const Container = isDrawer ? VStack : Flex;

    return (
        <Container
            justifyContent={isDrawer ? "start" : "center"}
            alignItems={isDrawer ? "stretch" : "center"}
            p={4}
            borderBottom="1px"
            borderColor="gray.200"
            bg="white"
            direction={isDrawer ? "column" : "row"} // Flex direction based on isDrawer
            spacing={isDrawer ? 4 : 0} // Spacing for VStack, not needed for Flex
        >
                {categories.map((category) => (
                    <Menu key={category.id} isOpen={openMenuId === category.id} onClose={closeMenu} onMouseLeave={closeMenu}>
                        <MenuButton
                            as={Text}
                            cursor="pointer"
                            mx={2}
                            _hover={{ textDecoration: 'underline' }}
                            onMouseEnter={() => openMenu(category.id)}
                            onClick={() => handleCategoryClick(category.name)}
                        >
                            {category.name} <ChevronDownIcon />
                        </MenuButton>
                        <MenuList>
                            {category.subcategories?.map((subcategory) => (
                                <MenuItem key={subcategory.id} onClick={() => handleSubcategoryClick(subcategory.name)}>
                                    {subcategory.name}
                                </MenuItem>

                            ))}
                        </MenuList>
                    </Menu>
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
        </Container>
    );
};

export default Navbar;
