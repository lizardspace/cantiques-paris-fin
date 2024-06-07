import React from 'react';
import AssuranceVie from './routes/subcategoryassurance_vie/index';
import AgavicAvenir1 from './routes/subcategoryagavic_avenir_1/index';
import ProjetObjectif from './routes/projetobjectif/index';
import Subscribe from './routes/subscribe/index';
import NotFound from './routes/NotFound';
import SCPI from './routes/scpi/index'; // Import the SCPI component
import ToutesLesSCPI from './routes/ToutesLesSCPI/index'; // Import the ToutesLesSCPI component

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
    path: '/scpi',
    name: 'SCPI',
    component: <SCPI />,
    parent: 'SCPI' // Define the parent as 'SCPI'
  },
  {
    path: '/scpi/toutes_les_scpi',
    name: 'Toutes les SCPI',
    component: <ToutesLesSCPI />,
    parent: 'SCPI' // Define the parent as 'SCPI'
  },
  {
    path: '*',
    name: 'NotFound',
    component: <NotFound />,
    hidden: true, // Cette route ne sera pas affichée dans le Navbar
  },
];

export default routes;
