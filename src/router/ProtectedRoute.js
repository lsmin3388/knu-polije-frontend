import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('/member');
        if (response.status === 200) {
          setIsAuthenticated(true);
        } else {
          window.location.href = '/oauth2/authorization/google';
        }
      } catch (error) {
        window.location.href = '/oauth2/authorization/google';
      }
    };
    checkAuth();
  });

  if (!isAuthenticated) {
    return null;
  }

  return children;
};

export default ProtectedRoute;