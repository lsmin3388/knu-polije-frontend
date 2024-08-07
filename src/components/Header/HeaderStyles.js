import styled from 'styled-components';

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
`;

export const Contents = styled.div`
  display: flex;
  width: 96%;
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  text-decoration: none;
`;

export const SiteName = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul li {
    position: relative;
    margin-left: 30px;
  }

  ul li a {
    text-decoration: none;
    padding: 10px 15px;
    color: #fff;
  }

  ul li a:hover {
    color: #96B2F8;
  }
`;

export const NavLink = styled.a``;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #253F83; /* 하늘색 배경 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border-radius: 8px;
  padding: 10px 0;
  margin-top: 10px;
`;

export const DropdownItem = styled.a`
  display: block;
  padding: 12px 20px;
  color: #fff; /* 흰색 글자 */
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
  text-decoration: none;
  border-radius: 5px;
  margin-left: 15px;
  border: none;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};

  &:hover {
    background: ${props => (props.disabled ? '#007bff' : '#0056b3')};
  }
`;