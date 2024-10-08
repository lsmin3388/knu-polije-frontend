import React, { useEffect, useState } from 'react';
import axios from './api/axios';
import AppRouter from './router/AppRouter';
import { UserContext } from './context/UserContext';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('/member');
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
      <Header />
      <AppRouter />
      <Footer />
    </UserContext.Provider>
  );
}

export default App;