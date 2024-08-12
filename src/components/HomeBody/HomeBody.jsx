import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './HomeBody.styled';
import cowImage from '../../assets/images/cow.png';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import people4 from '../../assets/images/people4.png';
import people5 from '../../assets/images/people5.png';
import people6 from '../../assets/images/people6.png';
import people7 from '../../assets/images/people7.png';
import people8 from '../../assets/images/people8.png';
import { Link } from 'react-scroll';

const membersPolije = [
  { name: 'Pramudya Putra Pratama', role: 'Project Leader', image: people1 },
  { name: 'Muhammad Akbar Aldiansyah', role: 'Technical Leader', image: people2 },
  { name: 'Davin Aristo Widya Pernama', role: 'Media Leader', image: people3 },
  { name: 'Salsabila Juliawardhani Jadid', role: 'Knowledge Leader', image: people4 },
];

const membersKNU = [
  { name: 'Dongkyu Lee', role: 'Project Leader', image: people5 },
  { name: 'Sangmin Lee', role: 'Technical Leader', image: people6 },
  { name: 'Minseo Choi', role: 'Media Leader', image: people7 },
  { name: 'Hyejin Lee', role: 'Knowledge Leader', image: people8 },
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
        </S.Container>
      </S.Section>
    </S.Main>
  );
}

export default HomeBody;