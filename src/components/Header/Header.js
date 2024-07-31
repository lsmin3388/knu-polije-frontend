import React from 'react';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import * as S from './HeaderStyles';

const Header = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = async () => {
    try {
      const response = await axios.get('/member');
      if (response.status === 200) {
        navigate('/board');
      } else {
        window.location.href = '/oauth2/authorization/google';
      }
    } catch (error) {
      window.location.href = '/oauth2/authorization/google';
    }
  };

  return (
    <S.Header>
      <S.Contents>
        <S.Logo href="#home">
          <S.SiteName>APPNAME</S.SiteName>
        </S.Logo>
        <S.Navigation>
          <ul>
            <li><S.NavLink href="/" className="active">Home</S.NavLink></li>
            <li><S.NavLink href="/about">About</S.NavLink></li>
            <li><S.NavLink href="/contact">Contact</S.NavLink></li>
          </ul>
          <S.GetStartedButton onClick={handleGetStartedClick}>Get Started</S.GetStartedButton>
        </S.Navigation>
      </S.Contents>
    </S.Header>
  );
}

export default Header;