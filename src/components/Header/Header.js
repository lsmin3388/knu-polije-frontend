import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import * as S from './HeaderStyles';

const Header = () => {
  const user = useContext(UserContext);
  const [showHomeDropdown, setShowHomeDropdown] = useState(false);

  const handleMouseEnter = (menu) => {
    if (menu === 'home') setShowHomeDropdown(true);
  };

  const handleMouseLeave = (menu) => {
    if (menu === 'home') setShowHomeDropdown(false);
  };

  const handleGetStartedClick = () => {
    if (!user) {
      window.location.href = '/oauth2/authorization/google';
    }
  };

  return (
    <S.Header>
      <S.Contents>
        <S.Logo href="/">
          <S.SiteName>CW:COWWELL</S.SiteName>
        </S.Logo>
        <S.Navigation>
          <ul>
            <li 
              onMouseEnter={() => handleMouseEnter('home')} 
              onMouseLeave={() => handleMouseLeave('home')}
            >
              <S.NavLink href="/">Home</S.NavLink>
              {showHomeDropdown && (
                <S.DropdownMenu>
                  <S.DropdownItem href="#about">About</S.DropdownItem>
                  <S.DropdownItem href="#members">Introduction</S.DropdownItem>
                </S.DropdownMenu>
              )}
            </li>
            <li>
              <S.NavLink href="/board">Board</S.NavLink>
            </li>
          </ul>
          <S.GetStartedButton onClick={handleGetStartedClick}>
            {user ? `${user.name} Account` : 'Login'}
          </S.GetStartedButton>
        </S.Navigation>
      </S.Contents>
    </S.Header>
  );
}

export default Header;