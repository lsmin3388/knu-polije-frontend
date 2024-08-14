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
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: white;  
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 80%;
  min-height: 80vh;
  height: auto;
  flex-grow: 1;
  overflow-x: auto;  /* 가로 스크롤 가능 */

  @media (max-width: 1200px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export const ImageThumbnail = styled.img`
  flex-shrink: 0;
  width: 150px;
  height: 150px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.8;
  }
`;

export const DateHeader = styled.h2`
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: #333;
`;

export const ImagePopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

export const PopupOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

export const PopupContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  z-index: 1001;
`;

export const PopupImage = styled.img`
  max-width: 90%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 10px;
`;

export const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

export const ErrorWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ErrorImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const ErrorMessage = styled.div`
  color: #000;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;