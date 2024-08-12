import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import HomeBody from '../components/HomeBody/HomeBody';
import Dashboard from '../components/Dashboard/Dashboard';

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