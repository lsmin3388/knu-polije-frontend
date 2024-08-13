import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from '../routes';

const router = createBrowserRouter(routes);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;