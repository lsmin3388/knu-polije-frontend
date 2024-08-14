import HomeBody from './components/HomeBody/HomeBody';
import Dashboard from './components/Dashboard/Dashboard';
import ProtectedRoute from './router/ProtectedRoute';
import History from './components/History/History';

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
  {
    path: '/history',
    element: (
      <ProtectedRoute>
        <History />
      </ProtectedRoute>
    ),
  },
];

export default routes;