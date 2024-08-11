import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  height: 100vh;
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #253F83;
`;

export const OuterContainer = styled.div`
  display: flex;
  background-color: #F3D2F1;
  padding: 0px;
  border-radius: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 85%;
  height: 75%;
  max-width: 1600px;
  max-height: 750px;
`;

export const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 20px;
  padding-bottom: 10%;
  border-radius: 30px;
  background-color: #f8f9fa;
`;

export const RightPanel = styled.div`
  flex: 2;
  display: flex;
  flex-direction: ${({ resultExists }) => (resultExists ? 'row' : 'column')};
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-left: 20px;
  background-color: #F3D2F1;
  border-bottom-right-radius: 30px;
`;

export const UploadContainer = styled.div`
  margin-bottom: 20px;
`;

export const ImageLabel = styled.label`
  display: inline-block;
  position: relative;
  width: 300px;
  height: 300px;
  background-color: #F3F3F3;
  cursor: pointer;
  overflow: hidden;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  display: block;
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
`;

export const ResultImagePanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
`;

export const ResultWrapperPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ResultTextPannel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FAEDF9;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ResultTextWrapper = styled.div`
  background-color: #FFF;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ResultIcon = styled.img`
  width: 250px;
  margin: 30px;
  height: auto;
  margin-bottom: 10px;
`;

export const ResultTextIcon = styled.img`
  width: 50px;
  margin: 30px;
  height: auto;
  margin-bottom: 10px;
`;

export const ResultTextMessage = styled.p`
  margin-top: 5px;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  color: ${({ isError }) => (isError ? 'red' : '#7D7D7D')};
`;

export const ResultImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 10px;
  background-color: #f3f3f3;
`;

export const ResultText = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: #333;
  text-align: center;
`;

export const ResetButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #E9E6E9;
  color: #6B6B6B;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #D4D2D4;
  }
`;