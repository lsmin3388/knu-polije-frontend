import React, { useState, useCallback, useRef, useEffect, memo } from 'react';
import Webcam from 'react-webcam';
import { handleImageChange, handleDetect } from '../../utils/imageHandlers';
import ToggleButton from '../ToggleButton/ToggleButton';
import * as S from './Dashboard.styled';
import CameraIcon from '../../assets/camera.svg';
import ResultCowIcon from '../../assets/result_cow.svg';
import ResultTextCowIcon from '../../assets/result_text_cow.svg';
import WeightIcon from '../../assets/weight_icon.svg';
import BreedIcon from '../../assets/breed_icon.svg';


const ResultPanel = memo(({ resultImage, resultText, isError, resetResult, resultType }) => (
  <S.RightPanel resultExists={!!resultImage || !!resultText || isError}>
    {isError ? (
      <S.ResultTextMessage isError={isError}>
        {resultText}
      </S.ResultTextMessage>
    ) : !resultImage && !resultText ? (
      <>
        <S.ResultIcon src={ResultCowIcon} alt="Result Icon" />
        <S.ResultTextMessage>
          Add materials to see the result!
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
            <S.ResultTextPanel>
              <S.ResultTextIcon src={ResultTextCowIcon} alt="Result Text Icon" />
              <S.ResultTextWrapper>
                {resultType === 'weight' && <S.ResultIcon2 src={WeightIcon} alt="Weight Icon" />}
                {resultType === 'breed' && <S.ResultIcon2 src={BreedIcon} alt="Breed Icon" />}
                <S.ResultText>{resultText}</S.ResultText>
              </S.ResultTextWrapper>
            </S.ResultTextPanel>
            <S.ResetButton onClick={resetResult}>Reset</S.ResetButton>
          </S.ResultWrapperPanel>
        )}
      </>
    )}
  </S.RightPanel>
));

const Dashboard = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [resultText, setResultText] = useState('');
  const [mode, setMode] = useState('Photo');
  const [webcamActive, setWebcamActive] = useState(false);
  const [useTestMode, setUseTestMode] = useState(false);
  const [resultType, setResultType] = useState('');
  const webcamRef = useRef(null);

  // 컴포넌트가 처음 마운트될 때 상태 초기화
  useEffect(() => {
    setSelectedImage(null);
    setResultImage(null);
    setResultText('');
    setResultType('');
    setMode('Photo');
    setWebcamActive(false);
    setUseTestMode(false);
  }, []);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setSelectedImage(imageSrc);
        return imageSrc;
      }
      console.error("Failed to capture screenshot from webcam.");
    } else {
      console.error("Webcam is not available or not yet initialized.");
    }
    return null;
  }, []);

  const handleWebcamToggle = useCallback(() => {
    setWebcamActive(prev => !prev);
  }, []);

  const handleDetectWithCapture = useCallback(async (type) => {
    const imageToDetect = (mode === 'Real-Time' && webcamActive) ? capture() : selectedImage;
    if (!imageToDetect) {
      console.error("Failed to capture image from webcam.");
      setResultText("Error capturing image from webcam. Please try again.");
      return;
    }
  
    try {
      if (type === 'weight' && useTestMode) {
        await handleDetect('miniature_weight', imageToDetect, setResultImage, setResultText, useTestMode);
        setResultType('weight');
      } else {
        await handleDetect(type, imageToDetect, setResultImage, setResultText, useTestMode);
        setResultType(type); // 'weight' 또는 'breed'가 설정됨
      }
    } catch (error) {
      console.error("Error during detection:", error);
      setResultText("An error occurred during detection. Please try again.");
    }
  }, [mode, webcamActive, selectedImage, useTestMode, capture]);

  const handleImageClick = useCallback(() => {
    setSelectedImage(null);
    if (mode === 'Real-Time') setWebcamActive(true);
  }, [mode]);

  const resetResult = useCallback(() => {
    setSelectedImage(null);
    setResultImage(null);
    setResultText('');
    setResultType(''); // 초기화
    setWebcamActive(false);
  }, []);

  const isError = resultText.includes('[ERROR]');

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
          <S.CheckboxContainer>
            <input 
              type="checkbox" 
              id="testMode" 
              checked={useTestMode} 
              onChange={() => setUseTestMode(prev => !prev)} 
            />
            <label htmlFor="testMode">Use Test Mode</label>
          </S.CheckboxContainer>
        </S.LeftPanel>
        <ResultPanel 
          resultImage={resultImage} 
          resultText={resultText} 
          isError={isError} 
          resetResult={resetResult} 
          resultType={resultType}
        />
      </S.OuterContainer>
    </S.Container>
  );
};

export default Dashboard;