import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Board from '../pages/Board';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/board',
    element: <Board />,
  },
  {
    path: '/start',
    element: <Home />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
}

export default AppRouter;