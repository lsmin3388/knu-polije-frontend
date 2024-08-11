import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.js';
import HomeBody from '../components/HomeBody/HomeBody.js';
import Dashboard from '../components/Dashboard/Dashboard.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeBody />,
  },
  {
    path: '/board',
    element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
}

export default AppRouter;