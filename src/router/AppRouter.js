import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Board from '../pages/Board';
import Test from '../pages/Test';
import ProtectedRoute from './ProtectedRoute.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/board',
    element: <ProtectedRoute><Board /></ProtectedRoute>,
  },
  {
    path: '/start',
    element: <Home />,
  },
  {
    path: '/test',
    element: <Test />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
}

export default AppRouter;