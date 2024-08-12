import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Footer = styled.footer`
  background: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

export const FooterLinks = styled.div`
  margin-top: 10px;

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;