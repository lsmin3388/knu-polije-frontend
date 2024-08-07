// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppRouter from './router/AppRouter';
import { UserContext } from './context/UserContext';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('/api/v1/member');
        if (response.status === 200) {
          setUser(response.data.response);
        }
      } catch (error) {
        console.error('User not authenticated', error);
      }
    };
    checkAuth();
  }, []);

  return (
    <UserContext.Provider value={user}>
      <AppRouter />
    </UserContext.Provider>
  );
}

export default App;