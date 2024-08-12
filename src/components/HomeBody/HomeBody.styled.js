import styled from 'styled-components';

export const Main = styled.main`
  padding-top: 30px;
`;

export const Section = styled.section`
  padding: 60px 0;
  background: ${props => props.className === 'hero' ? '#253F83' : props.className === 'members' ? '#F4F4F4' : '#FFF'};
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
  p {
    font-weight: bold;
    color: #AEC4FD;
  }
`;


export const ColRight = styled.div`
  flex: 0.6;
  padding: 20px;
`;

export const Col = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
  max-width: 25%;
`;

export const HeroImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const PersonImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto;
`;

export const Name = styled.p`
  font-weight: bold;
  margin: 10px 0 5px 0;
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