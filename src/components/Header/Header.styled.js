import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';  // 메뉴 아이콘을 위한 추가

export const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: #253F83;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;

  @media (max-width: 768px) {
    height: 60px;
  }

  @media (max-width: 480px) {
    height: 50px;
  }
`;

export const Contents = styled.div`
  display: flex;
  width: 96%;
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled.a`
  text-decoration: none;

  @media (max-width: 480px) {
    margin-bottom: 0;
  }
`;

export const SiteName = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const NavLink = styled.a``;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

export const DesktopMenu = styled.div`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
      display: none;
    }
  }

  ul li {
    position: relative;
    margin-left: 30px;

    @media (max-width: 768px) {
      margin-left: 20px;
    }

    @media (max-width: 480px) {
      margin-left: 0;
    }
  }

  ul li a {
    text-decoration: none;
    padding: 10px 15px;
    color: #fff;

    @media (max-width: 768px) {
      padding: 8px 12px;
    }
  }

  ul li a:hover {
    color: #96B2F8;
  }
`;

export const MenuIcon = styled(FaBars)`
  display: none;
  color: white;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 0;
  background-color: #253F83;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1000;
  width: 200px;

  @media (max-width: 768px) {
    top: 50px;
  }
`;

export const MobileMenuItem = styled.a`
  padding: 12px 20px;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #f0f4f8;
    color: #007bff;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #e6e6e6;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #253F83;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border-radius: 8px;
  padding: 10px 0;
  margin-top: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DropdownItem = styled.a`
  display: block;
  padding: 12px 20px;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #f0f4f8;
    color: #007bff;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #e6e6e6;
  }
`;

export const GetStartedButton = styled.button`
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  border-radius: 5px;
  margin-left: 15px;
  border: none;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};

  &:hover {
    background: ${props => (props.disabled ? '#007bff' : '#0056b3')};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;