import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './HomeBody.styled';
import cowImage from '../../assets/images/cow.png';
import lecturer from '../../assets/images/wahyu.jpeg';
import pram from '../../assets/images/pram.jpeg';
import akbar from '../../assets/images/akbar.jpeg';
import davin from '../../assets/images/davin.jpeg';
import alinee from '../../assets/images/alinee.jpeg';
import dongkyu from '../../assets/images/dongkyu.png';
import sangmin from '../../assets/images/sangmin.jpeg';
import minseo from '../../assets/images/minseo.png';
import hyejin from '../../assets/images/hyejin.png';
import { Link } from 'react-scroll';

const membersLecturers = [
  { name: 'Wahyu Pebrianto, S.Tr.Kom., M.T.', role: 'Project Advisor', image: lecturer },
];

const membersPolije = [
  { name: 'Pramudya Putra Pratama', role: 'Project Leader', image: pram },
  { name: 'Muhammad Akbar Aldiansyah', role: 'Technical Leader', image: akbar },
  { name: 'Davin Aristo Widya Pernama', role: 'Media Leader', image: davin },
  { name: 'Salsabila Juliawardhani Jadid', role: 'Knowledge Leader', image: alinee },
];

const membersKNU = [
  { name: 'Dongkyu Lee', role: 'Project Leader', image: dongkyu },
  { name: 'Sangmin Lee', role: 'Technical Leader', image: sangmin },
  { name: 'Minseo Choi', role: 'Media Leader', image: minseo },
  { name: 'Hyejin Lee', role: 'Knowledge Leader', image: hyejin },
];

const HomeBody = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/board');
  };

  return (
    <S.Main>
      <S.Section id="hero" className="hero">
        <S.Container>
          <S.Row>
            <S.ColLeft>
              <h1>
                Enhance Your Livestock<br />
                Productivity with CW:COWWELL
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Sed do eiusmod tempor incididunt
              </p>
              <S.Buttons>
                <Link to="about" smooth={true} duration={500}>
                  <S.GetStartedButton onClick={handleGetStartedClick}>
                  Get Started
                </S.GetStartedButton>
                </Link>
              </S.Buttons>
            </S.ColLeft>
            <S.ColRight>
              <S.HeroImg src={cowImage} alt="Hero" />
            </S.ColRight>
          </S.Row>
        </S.Container>
      </S.Section>

      <S.Section id="about" className="about">
        <S.Container>
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </S.Container>
      </S.Section>

      <S.Section id="members" className="members">
        <S.Container>
        <h2>Member Introduction</h2>
          <h3>Lecturer</h3>
          <S.Row>
            {membersLecturers.map((member, index) => (
              <S.ColLecturer key={index}>
                <S.PersonImg src={member.image} alt={member.name} />
                <S.Name>{member.name}</S.Name>
                <p>{member.role}</p>
              </S.ColLecturer>
            ))}
          </S.Row>
          <h3>KYUNGPOOK NATIONAL UNIVERSITY STUDENTS</h3>
          <S.Row>
            {membersKNU.map((member, index) => (
              <S.Col key={index}>
                <S.PersonImg src={member.image} alt={member.name} />
                <S.Name>{member.name}</S.Name>
                <p>{member.role}</p>
              </S.Col>
            ))}
          </S.Row>
          <h3>POLIJE UNIVERSITY STUDENTS</h3>
          <S.Row>
            {membersPolije.map((member, index) => (
              <S.Col key={index}>
                <S.PersonImg src={member.image} alt={member.name} />
                <S.Name>{member.name}</S.Name>
                <p>{member.role}</p>
              </S.Col>
            ))}
          </S.Row>
        </S.Container>
      </S.Section>
    </S.Main>
  );
}

export default HomeBody;