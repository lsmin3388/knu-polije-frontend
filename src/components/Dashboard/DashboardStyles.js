import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #253F83;
`;

export const OuterContainer = styled.div`
  display: flex;
  background-color: #F3D2F1;
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  height: 80%;
  max-width: 1200px;
  max-height: 800px;
`;

export const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 30px;
  background-color: #f8f9fa;
`;

export const UploadContainer = styled.div`
  margin-bottom: 20px;
`;

export const ImageLabel = styled.label`
  display: inline-block;
  position: relative;
  width: 150px;
  height: 150px;
  background-color: #e0e0e0;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
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
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ResultPanel = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 150px;
  margin-left: 20px;
  background-color: #F3D2F1;
  border-bottom-right-radius: 30px;
`;

export const ResultTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  color: #333;
`;

export const ResultImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
`;

export const ResultText = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: #333;
`;