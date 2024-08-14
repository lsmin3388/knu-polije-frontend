import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  justify-content: center;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 180px;
  height: 60px;

  @media (max-width: 768px) {
    width: 140px;
    height: 50px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 40px;
  }
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: #1F387A;
  }
  &:checked + span:before {
    transform: translateX(0px);
    content: 'Photo';
  }
`;

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #1F387A;
  color: #fff;
  transition: .4s;
  border-radius: 34px;
  display: flex;
  padding: 0px 10px;
  padding-right: 20px;
  justify-content: ${({ mode }) => (mode === 'Photo' ? 'start' : 'end')};
  align-items: center;
  font-weight: bold;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding-right: 15px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding-right: 10px;
  }

  &:before {
    position: absolute;
    content: 'Real Time';
    height: 52px;
    width: 84px;
    right: 4px;
    bottom: 4px;
    background-color: #E9ADE4;
    transition: .9s;
    border-radius: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transform: ${({ mode }) => (mode === 'Photo' ? 'translateX(88px)' : 'translateX(-88px)')};

    @media (max-width: 768px) {
      height: 40px;
      width: 60px;
      font-size: 0.9rem;
      text-align: center;
      transform: ${({ mode }) => (mode === 'Photo' ? 'translateX(68px)' : 'translateX(-68px)')};
    }

    @media (max-width: 480px) {
      height: 30px;
      width: 50px;
      font-size: 0.8rem;
      transform: ${({ mode }) => (mode === 'Photo' ? 'translateX(60px)' : 'translateX(-60px)')};
    }
  }
`;