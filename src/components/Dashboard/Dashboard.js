import React, { useState } from 'react';
import { handleImageChange, handleDetect } from '../../utils/imageHandlers';
import * as S from './DashboardStyles';

const Dashboard = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);

  return (
    <S.Container>
      <S.LeftPanel>
        <S.UploadContainer>
          <S.ImageLabel>
            {selectedImage ? (
              <S.Image src={selectedImage} alt="Selected" />
            ) : (
              <S.Placeholder>Choose an image</S.Placeholder>
            )}
            <S.FileInput
              type="file"
              accept="image/*"
              onChange={(event) => handleImageChange(event, setSelectedImage)}
            />
          </S.ImageLabel>
        </S.UploadContainer>
        <S.ButtonsContainer>
          <S.Button onClick={() => handleDetect('breed', selectedImage, setResultImage)}>
            Breed Detect
          </S.Button>
          <S.Button onClick={() => handleDetect('weight', selectedImage, setResultImage)}>
            Weight Detect
          </S.Button>
        </S.ButtonsContainer>
      </S.LeftPanel>
      <S.ResultPanel>
        <S.ResultTitle>Result Image</S.ResultTitle>
        {resultImage && (
          <S.ResultImage src={resultImage} alt="Result" />
        )}
      </S.ResultPanel>
    </S.Container>
  );
};

export default Dashboard;