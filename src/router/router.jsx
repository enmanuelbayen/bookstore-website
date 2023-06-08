import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Categories from '../pages/Categories';
import App from '../App';
import Navigation from '../pages/Navigation';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Navigation>
        <App />
      </Navigation>
    ),
  },
  {
    path: '/Categories',
    element: (
      <Navigation>
        <Categories />
      </Navigation>
    ),
  },
]);

export default router;
