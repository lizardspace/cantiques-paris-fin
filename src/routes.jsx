// src/routes.jsx
import React from 'react';
import AssuranceVie from './routes/subcategoryassurance_vie/index';
import AgavicAvenir1 from './routes/subcategoryagavic_avenir_1/index';
import ProjetObjectif from './routes/projetobjectif/index';
import Subscribe from './routes/subscribe/index';
import NotFound from './routes/NotFound';

const routes = [
  { path: '/', component: <Subscribe /> },
  { path: '/subcategory/assurance_vie', component: <AssuranceVie /> },
  { path: '/subcategory/agavic_avenir_1', component: <AgavicAvenir1 /> },
  { path: '/projet/objectif', component: <ProjetObjectif /> },
  { path: '/subscribe', component: <Subscribe /> },
  { path: '*', component: <NotFound /> }
];

export default routes;
