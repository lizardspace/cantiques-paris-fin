// routesConfig.js
const routesConfig = [
    { path: '/', component: 'ItemsForSaleSupabase' },
    { path: '/item/:itemId', component: 'ItemDetail' },
    // Add more static routes here
  ];
  
  export default routesConfig;

  // Add this function to routesConfig.js
export const createDynamicRoutes = (categoriesWithSubs) => {
    const dynamicRoutes = categoriesWithSubs.flatMap(category => [
      { path: `/${encodeURIComponent(category.name.toLowerCase())}`, component: 'CategoryPage', data: category },
      ...category.subcategories.map(sub => ({
        path: `/subcategory/${encodeURIComponent(sub.name.toLowerCase())}`, component: 'SubcategoryPage', data: sub
      }))
    ]);
  
    return dynamicRoutes;
  };