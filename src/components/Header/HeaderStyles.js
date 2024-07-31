import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #253F83;
  box-shadow: 0 0px rgba(0, 0, 0, 0);
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

  ul li a.active {
    color: #96B2F8;
  }
`;

export const NavLink = styled.a``;

export const GetStartedButton = styled.button`
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  margin-left: 15px;
`;