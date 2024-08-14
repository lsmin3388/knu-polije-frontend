import styled from 'styled-components';

export const Main = styled.main`
  padding-top: 30px;
`;

export const Section = styled.section`
  padding: 60px 0;
  background: ${props => props.className === 'hero' ? '#1F387A' : props.className === 'members' ? '#F4F4F4' : '#FFF'};
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: -40px auto;
  padding: ${({ hero }) => (hero ? '80px 20px' : '0 20px')};

  h3 {
    text-align: ${({ introduction }) => (introduction ? 'center' : 'left')};
  }
  
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content horizontally */
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-height: 350px;
`;

export const ColLeft = styled.div`
  flex: 1;
  padding: 20px;
  p {
    font-weight: semi-bold;
    color: #AEC4FD;
    line-height: 1.3;
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
  max-width: 100%;
`;

export const ColLecturer = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const Buttons = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 10px;
`;

// export const GetStartedButton = styled.a`
//   padding: 10px 20px;
//   background: #007bff;
//   color: #fff;
//   text-decoration: none;
//   border-radius: 5px;
// `;

export const GetStartedButton = styled.a`
  padding: 12px 24px;
  background: #3064E9;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  display: inline-block;

  &:hover {
    background: linear-gradient(45deg, #4C5F90, #364B82);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
`;

export const CircleText = styled.h2`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: ${({ about }) => (about ? '#fff' : '#F4F4F4')};
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 18px;
  margin: -60px auto 30px;
  padding: 20px;
  text-align: center;
  z-index: 1; /* Ensure CircleText stays below the LogoImage */
`;

export const LogoImage = styled.img`
  width: 40%;
  border-radius: 10px;
  margin-top: -120px; /* Adjust the margin to position the LogoImage above the CircleText */
  align-self: center; /* Ensure the image is centered horizontally */
  z-index: 2; /* Ensure LogoImage stays above the CircleText */
  position: relative;
`;

export const AboutRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${({ center }) => (center ? 'center' : 'space-between')};
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  margin: 70px 0px;
`;

export const AboutImage1 = styled.img`
  width: 25%;
  border-radius: 10px;
  margin-left: 5%;
`;

export const AboutText1 = styled.div`
  width: 45%;
  padding: 20px;
  margin-right: 5%;
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const AboutImage2 = styled.img`
  width: 25%;
  border-radius: 10px;
  margin-right: 5%;
`;

export const AboutText2 = styled.div`
  width: 45%;
  padding: 20px;
  margin-left: 5%;
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const AboutImage3 = styled.img`
  width: 70%;
  margin-top: 100px;
  border-radius: 10px;
`;

export const AboutText3 = styled.div`
  width: 50%;
  padding: 20px;
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const InstagramIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;