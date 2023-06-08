import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Categories from '../pages/Categories';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Categories',
    element: <Categories />,
  },
]);

export default router;
