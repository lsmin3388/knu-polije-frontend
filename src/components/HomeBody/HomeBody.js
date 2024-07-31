import React from 'react';
import * as S from './HomeBodyStyles';
import cowImage from '../../assets/images/cow.png';

const HomeBody = () => {
  return (
    <S.Main>
      <S.Section id="hero" className="hero">
        <S.Container>
          <S.Row>
            <S.ColLeft>
              <h1>Enhance Your Livestock Productivity with APPNAME</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br/>
                Sed do eiusmod tempor incididunt
              </p>
              <S.Buttons>
                <S.GetStartedButton href="#about">Get Started</S.GetStartedButton>
              </S.Buttons>
            </S.ColLeft>
            <S.ColRight>
              <S.HeroImg src={cowImage} alt="Hero" />
            </S.ColRight>
          </S.Row>
        </S.Container>
      </S.Section>
      <S.Section id="clients" className="clients">
        <S.Container>
          <h2>About</h2>
        </S.Container>
      </S.Section>
    </S.Main>
  );
}

export default HomeBody;