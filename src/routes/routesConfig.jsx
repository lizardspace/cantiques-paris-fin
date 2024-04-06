const createDynamicRoutes = (categoriesWithSubs) => {
  const dynamicRoutes = categoriesWithSubs.flatMap(category => [
    { path: `/${encodeURIComponent(category.name.toLowerCase())}`, component: 'CategoryPage', data: category },
    ...category.subcategories.map(sub => ({
      path: `/subcategory/${encodeURIComponent(sub.name.toLowerCase())}`, component: 'SubcategoryPage', data: sub
    }))
  ]);

  return dynamicRoutes;
};

export default createDynamicRoutes;
