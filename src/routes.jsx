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
    hidden: true, // Cette route ne sera pas affichée dans le Navbar
  },
  {
    path: '/subscribe',
    name: 'Subscribe',
    component: <Subscribe />,
    hidden: true,
  },
  {
    path: '/assurance_vie',
    name: 'Assurance Vie',
    component: <AssuranceVie />,
    parent: 'Assurances Vie'
  },
  {
    path: '/agavic_avenir_1',
    name: 'Agavic Avenir 1',
    component: <AgavicAvenir1 />,
    parent: 'Assurances Vie'
  },
  {
    path: '/projetobjectif',
    name: 'Projet Objectif',
    component: <ProjetObjectif />,
    parent: 'Projet'
  },
  {
    path: '*',
    name: 'NotFound',
    component: <NotFound />,
    hidden: true, // Cette route ne sera pas affichée dans le Navbar
  },
];

export default routes;
