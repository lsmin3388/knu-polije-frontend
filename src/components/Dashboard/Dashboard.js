import React, { useState } from 'react';
import Webcam from 'react-webcam';
import { handleImageChange, handleDetect } from '../../utils/imageHandlers';
import ToggleButton from '../ToggleButton/ToggleButton';
import * as S from './DashboardStyles';
import CameraIcon from '../../assets/camera.svg';
import ResultCowIcon from '../../assets/result_cow.svg';
import ResultTextCowIcon from '../../assets/result_text_cow.svg';

const Dashboard = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [resultText, setResultText] = useState('');
  const [mode, setMode] = useState('Photo');
  const [webcamActive, setWebcamActive] = useState(false);
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setSelectedImage(imageSrc);
        return imageSrc;
      } else {
        console.error("Failed to capture screenshot from webcam.");
        return null;
      }
    } else {
      console.error("Webcam is not available or not yet initialized.");
      return null;
    }
  }, [webcamRef, setSelectedImage]);

  const handleWebcamToggle = () => {
    setWebcamActive((prev) => !prev);
  };

  const handleDetectWithCapture = async (type) => {
    let imageToDetect = selectedImage;

    if (mode === 'Real-Time' && webcamActive) {
      imageToDetect = capture();
    }

    if (imageToDetect) {
      try {
        await handleDetect(type, imageToDetect, setResultImage, setResultText);
      } catch (error) {
        console.error("Error during detection:", error);
        setResultText("An error occurred during detection. Please try again.");
      }
    } else {
      console.error("Failed to capture image from webcam.");
      setResultText("Error capturing image from webcam. Please try again.");
    }
  };

  const handleImageClick = () => {
    setSelectedImage(null);
    if (mode === 'Real-Time') {
      setWebcamActive(true);
    }
  };

  const resetResult = () => {
    setResultImage(null);
    setResultText('');
  };

  const isError = resultText.includes('Unable to detect');

  return (
    <S.Container>
      <S.OuterContainer>
        <S.LeftPanel>
          <ToggleButton mode={mode} setMode={setMode} setSelectedImage={setSelectedImage} setWebcamActive={setWebcamActive} />
          <S.UploadContainer>
            <S.ImageLabel onClick={selectedImage ? handleImageClick : (mode === 'Real-Time' ? handleWebcamToggle : null)}>
              {selectedImage ? (
                <S.Image src={selectedImage} alt="Selected" />
              ) : webcamActive && mode === 'Real-Time' ? (
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  width="100%"
                  height="100%"
                  style={{ display: 'block' }}
                />
              ) : (
                <S.Placeholder>
                  <S.CameraIcon src={CameraIcon} alt="Camera Icon" />
                  {mode === 'Photo' ? 'Choose an image' : 'Connect Web Cam'}
                </S.Placeholder>
              )}
              {mode === 'Photo' && (
                <S.FileInput
                  type="file"
                  accept="image/*"
                  onChange={(event) => handleImageChange(event, setSelectedImage)}
                />
              )}
            </S.ImageLabel>
          </S.UploadContainer>
          <S.ButtonsContainer>
            <S.Button onClick={() => handleDetectWithCapture('breed')}>
              Breed
            </S.Button>
            <S.Button onClick={() => handleDetectWithCapture('weight')}>
              Weight
            </S.Button>
          </S.ButtonsContainer>
        </S.LeftPanel>
        <S.RightPanel resultExists={!!resultImage || !!resultText}>
          {isError ? (
            <S.ResultTextMessage isError={isError}>
              {resultText}
            </S.ResultTextMessage>
          ) : !resultImage && !resultText ? (
            <>
              <S.ResultIcon src={ResultCowIcon} alt="Result Icon" />
              <S.ResultTextMessage>
                If you want to see result, add materials first!
              </S.ResultTextMessage>
            </>
          ) : (
            <>
              {resultImage && (
                <S.ResultImagePanel>
                  <S.ResultImage src={resultImage} alt="Result" />
                </S.ResultImagePanel>
              )}
              {resultText && (
                <S.ResultWrapperPanel>
                  <S.ResultTextPannel>
                    <S.ResultTextIcon src={ResultTextCowIcon} alt="Result Text Icon" />
                    <S.ResultTextWrapper><S.ResultText>{resultText}</S.ResultText></S.ResultTextWrapper>
                  </S.ResultTextPannel>
                  <S.ResetButton onClick={resetResult}>Reset</S.ResetButton>
                </S.ResultWrapperPanel>
              )}
            </>
          )}
        </S.RightPanel>
      </S.OuterContainer>
    </S.Container>
  );
};
export default Dashboard;