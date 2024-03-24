import React, { useState, useEffect } from 'react';
import { Flex, Text, Menu, MenuButton, MenuItem, MenuList, Box } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { supabase } from './../../supabase'; // Import the Supabase client

const Navbar = () => {
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

    const openMenu = (categoryId) => {
        setOpenMenuId(categoryId);
    };

    const closeMenu = () => {
        setOpenMenuId(null);
    };

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
                            <MenuItem
                                key={subcategory.id}
                                onClick={() => navigate(`/${subcategory.name.toLowerCase()}`)}
                            >
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
};

export default Navbar;
