// Navbar.jsx
import React, { useState, useEffect } from 'react';
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
import { supabase } from './../../supabase';

const Navbar = ({ isDrawer }) => {
    const [categories, setCategories] = useState([]);
    const [openMenuId, setOpenMenuId] = useState(null); // State to store the ID of the open menu
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            let { data: categories, error } = await supabase.from('categories').select('*');
            if (error) {
                console.error('error', error);
            } else {
                for (const category of categories) {
                    let { data: subcategories, error: subError } = await supabase
                        .from('subcategories')
                        .select('*')
                        .eq('category_id', category.id);
                    if (subError) {
                        console.error('subError', subError);
                    } else {
                        category.subcategories = subcategories;
                    }
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
        navigate(`/subcategory/${encodeURIComponent(subcategoryName.toLowerCase())}`);
    };

    const openMenu = (categoryId) => {
        setOpenMenuId(categoryId);
    };

    const closeMenu = () => {
        setOpenMenuId(null);
    };

    if (isDrawer) {
        // Drawer mode with Accordion
        return (
            <Accordion allowToggle>
                {categories.map((category) => (
                    <AccordionItem key={category.id}>
                        <AccordionButton>
                            <Box flex="1" textAlign="left" onClick={() => handleCategoryClick(category.name)}>
                                {category.name}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            {category.subcategories?.map((subcategory) => (
                                <Text
                                    key={subcategory.id}
                                    onClick={() => handleSubcategoryClick(subcategory.name)}
                                    cursor="pointer"
                                    _hover={{ textDecoration: 'underline', color: 'blue.600' }}
                                    p={2}
                                >
                                    {subcategory.name}
                                </Text>
                            ))}
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        );
    } else {
        // Regular non-drawer Navbar
        // ...rest of non-drawer Navbar goes here...
        // Placeholder for non-drawer Navbar content.
        return (
            <Flex justifyContent="center" p={4} borderBottom="1px" borderColor="gray.200" bg="white">
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
            </Flex>
        );
    }
};

export default Navbar;
