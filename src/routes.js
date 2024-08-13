// routes.js
import HomeBody from './components/HomeBody/HomeBody';
import Dashboard from './components/Dashboard/Dashboard';
import ProtectedRoute from './router/ProtectedRoute';

const routes = [
  {
    path: '/',
    element: <HomeBody />,
  },
  {
    path: '/board',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
];

export default routes;