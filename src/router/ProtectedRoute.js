// ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('/member');
        if (response.status === 200) {
          setIsAuthenticated(true);
        } else {
          navigate('/oauth2/authorization/google');
        }
      } catch (error) {
        navigate('/oauth2/authorization/google');
      }
    };
    checkAuth();
  }, [navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return children;
};

export default ProtectedRoute;