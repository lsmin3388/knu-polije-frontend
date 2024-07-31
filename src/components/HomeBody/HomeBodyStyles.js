import styled from 'styled-components';

export const Main = styled.main`
  padding-top: 80px;
`;

export const Section = styled.section`
  padding: 60px 0;
  background: ${props => props.className === 'hero' ? '#253F83' : '#fff'};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const ColLeft = styled.div`
  flex: 1;
  padding: 20px;
`;

export const ColRight = styled.div`
  flex: 1;
  padding: 20px;
`;

export const HeroImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

export const GetStartedButton = styled.a`
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
`;