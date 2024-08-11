import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppRouter from './router/AppRouter';
import { UserContext } from './context/UserContext';
import * as S from './AppStyles';
import Header from './components/Header/Header';

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
      <Header />

      <AppRouter />
      
      <S.Footer>
        <S.Container>
          <p>© 2024 APPNAME. All rights reserved.</p>
          <S.FooterLinks>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#members">Contact Us</a>
          </S.FooterLinks>
        </S.Container>
      </S.Footer>
    </UserContext.Provider>
  );
}

export default App;