import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-top: 70px;
  background-color: #1F387A;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  height: auto;
  box-sizing: border-box;
  overflow: scroll;

  @media (max-width: 768px) {
    padding: 70px 0 0 0;
    height: auto;
  }
`;

export const OuterContainer = styled.div`
  display: flex;
  background-color: #F3D2F1;
  padding: 0;
  border-radius: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 80%;
  min-height: 80vh;
  height: auto;
  flex-grow: 1;

  @media (max-width: 1200px) {
    flex-direction: column;
    width: 95%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`;

export const CheckboxContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;

  input {
    margin-right: 10px;
  }

  label {
    font-size: 16px;
    color: #333;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const RightPanel = styled.div`
  flex: 2;
  display: flex;
  flex-direction: ${({ resultExists }) => (resultExists ? 'row' : 'column')};
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #F3D2F1;
  border-radius: 0 30px 30px 0;
  overflow-y: auto; /* 모든 조건에서 스크롤 가능하도록 변경 */

  @media (max-width: 1200px) {
    border-radius: 0 0 30px 30px;
    padding: 15px 0;
    margin-top: 20px;
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px 0;
    overflow-y: auto; /* 모바일에서도 스크롤 가능하도록 설정 */
  }
`;

export const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 30px 0 0 30px;

  @media (max-width: 1200px) {
    border-radius: 30px 30px 0 0;
    padding: 15px;
  }

  @media (max-width: 768px) {
    padding: 10px 0;
    width: 100%;
  }
`;

export const UploadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

export const ImageLabel = styled.label`
  position: relative;
  width: 300px;
  height: 300px;
  background-color: #F3F3F3;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;

  @media (max-width: 1200px) {
    width: 70%;
    height: auto;
  }

  @media (max-width: 768px) {
    border-radius: 20px;
    height: auto;
  }
`;

export const FileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const Placeholder = styled.div`
  color: #888;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CameraIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
  background-color: #f3f3f3;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 5px;
    margin-top: 15px;
  }
`;

export const Button = styled.button`
  padding: 14px 36px;
  font-size: 18px;
  cursor: pointer;
  background-color: #CC7DC6;
  color: white;
  border: none;
  border-radius: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 1200px) {
    padding: 12px 28px;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    padding: 10px 24px;
    font-size: 14px;
  }
`;

export const ResultImagePanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #FAEDF9;
  height: 90%;

  @media (max-width: 1200px) {
    height: 80%;
  }

  @media (max-width: 768px) {
    height: 90%;
    width: 100%;
  }
`;

export const ResultImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  background-color: #FAEDF9;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const ResultWrapperPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 90%;

  @media (max-width: 1200px) {
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;;
    margin-top: 20px;
  }
`;

export const ResultTextPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: #FAEDF9;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
  width: 80%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 10px 0;
  }
`;

export const ResultTextIcon = styled.img`
  width: 100px;
  margin: 70px 0px;

  @media (max-width: 768px) {
    width: 80px;
    margin: 30px 0px;
  }
`;

export const ResultTextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: center;

  background-color: #FFF;
  padding: 10px;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  height: 40%;
  display: flex;
  margin-top: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ResultIcon = styled.img`
  width: 250px;
  margin: 30px;
  height: auto;

  @media (max-width: 768px) {
    width: 200px;
    margin: 20px;
  }
`;

export const ResultIcon2 = styled.img`
  width: 40px;
  height: auto;
`;

export const ResultTextMessage = styled.p`
  margin-top: 5px;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  color: ${({ isError }) => (isError ? 'red' : '#7D7D7D')};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ResultText = styled.p`
  font-size: 30px;
  color: #333;
  text-align: center;
  font-weight: bold;
`;

export const ResetButton = styled.button`
  padding: 20px 20px;
  font-size: 23px;
  font-weight: bold;
  width: 80%;
  cursor: pointer;
  background-color: #E9E6E9;
  color: #6B6B6B;
  border: none;
  border-radius: 55px;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #D4D2D4;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
    margin-top: 15px;
    width: 100%;
  }
`;