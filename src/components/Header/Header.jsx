import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import * as S from './Header.styled';
import cowTitleIcon from '../../assets/cow_title.svg';

const Header = () => {
  const user = useContext(UserContext);
  const [showHomeDropdown, setShowHomeDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <S.Header>
      <S.Contents>
        <S.Logo href="/">
          <S.SiteNameContainer>
            <S.Icon src={cowTitleIcon} alt="Cow Title Icon" />
            <S.SiteName>COWELL</S.SiteName>
          </S.SiteNameContainer>
        </S.Logo>
        <S.Navigation>
          <S.MenuIcon onClick={toggleMenu} />
          {menuOpen && (
            <S.MobileMenu>
              <S.MobileMenuItem href="/">Home</S.MobileMenuItem>
              {!user ? (
                <S.MobileMenuItem onClick={handleGetStartedClick}>Login</S.MobileMenuItem>
              ) : (
                <>
                  <S.MobileMenuItem href="/board">Board</S.MobileMenuItem>
                  <S.MobileMenuItem href="/history">History</S.MobileMenuItem>
                  <S.MobileMenuItem onClick={handleGetStartedClick}>
                    {`${user.name} Account`}
                  </S.MobileMenuItem>
                </>
              )}
            </S.MobileMenu>
          )}
          <S.DesktopMenu>
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
              {user && (
                <>
                  <li>
                    <S.NavLink href="/board">Board</S.NavLink>
                  </li>
                  <li>
                    <S.NavLink href="/history">History</S.NavLink>
                  </li>
                </>
              )}
            </ul>
            <S.GetStartedButton onClick={handleGetStartedClick}>
              {user ? `${user.name} Account` : 'Login'}
            </S.GetStartedButton>
          </S.DesktopMenu>
        </S.Navigation>
      </S.Contents>
    </S.Header>
  );
};

export default Header;