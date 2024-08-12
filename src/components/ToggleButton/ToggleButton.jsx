import React from 'react';
import * as S from './ToggleButton.styled';

const ToggleButton = ({ mode, setMode, setSelectedImage, setWebcamActive }) => {
  const handleToggle = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'Photo' ? 'Real-Time' : 'Photo';
      setSelectedImage(null);
      setWebcamActive(false);
      return newMode;
    });
  };

  return (
    <S.ToggleContainer>
      <S.ToggleSwitch>
        <S.ToggleInput
          type="checkbox"
          checked={mode === 'Photo'}
          onChange={handleToggle}
        />
        <S.ToggleSlider mode={mode}>
          {mode !== 'Photo' ? 'Photo' : 'Real Time'}
        </S.ToggleSlider>
      </S.ToggleSwitch>
    </S.ToggleContainer>
  );
};

export default ToggleButton;