import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 180px;
  height: 60px;
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: #253F83;
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
  background-color: #253F83;
  color: #fff;
  transition: .4s;
  border-radius: 34px;
  display: flex;
  padding: 0px 10px;
  padding-right: 20px;
  justify-content: ${({ mode }) => (mode === 'Photo' ? 'start' : 'end')};
  align-items: center;
  font-weight: bold;
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
  }
`;