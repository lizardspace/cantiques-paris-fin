// routes.jsx
import React from 'react';
import AssuranceVie from './routes/subcategoryassurance_vie/index';
import AgavicAvenir1 from './routes/subcategoryagavic_avenir_1/index';
import ProjetObjectif from './routes/projetobjectif/index';
import Subscribe from './routes/subscribe/index';
import NotFound from './routes/NotFound';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: <Subscribe />,
  },
  {
    path: '/subscribe',
    name: 'Subscribe',
    component: <Subscribe />,
  },
  {
    path: '/subcategory/assurance_vie',
    name: 'Assurance Vie',
    component: <AssuranceVie />,
    parent: 'Subcategories'
  },
  {
    path: '/subcategory/agavic_avenir_1',
    name: 'Agavic Avenir 1',
    component: <AgavicAvenir1 />,
    parent: 'Subcategories'
  },
  {
    path: '/projet/objectif',
    name: 'Projet Objectif',
    component: <ProjetObjectif />,
    parent: 'Projects'
  },
  {
    path: '*',
    name: 'NotFound',
    component: <NotFound />,
  },
];

export default routes;
