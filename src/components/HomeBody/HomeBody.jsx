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
import aboutImage1 from '../../assets/images/AboutImage1.png';
import aboutImage2 from '../../assets/images/AboutImage2.png';
import aboutImage3 from '../../assets/images/AboutImage3.png';
import logos from '../../assets/images/logos.png';
import instaIcon from '../../assets/insta.svg';
import { Link } from 'react-scroll';

const membersLecturers = [
  { name: 'Wahyu Pebrianto, S.Tr.Kom., M.T.', role: 'Project Advisor', image: lecturer, instagram: 'https://instagram.com/wahyu_faith' },
];

const membersPolije = [
  { name: 'Pramudya Putra Pratama', role: 'Project Leader', image: pram, instagram: 'https://instagram.com/prmpertamax_.apk' },
  { name: 'Muhammad Akbar Aldiansyah', role: 'Technical Leader', image: akbar, instagram: 'https://instagram.com/akbaraldi27' },
  { name: 'Davin Aristo Widya Pernama', role: 'Media Leader', image: davin, instagram: 'https://instagram.com/da.ari12' },
  { name: 'Salsabila Juliawardhani Jadid', role: 'Knowledge Leader', image: alinee, instagram: 'https://instagram.com/_aallinnee' },
];

const membersKNU = [
  { name: 'Dongkyu Lee', role: 'Project Leader', image: dongkyu, instagram: 'https://instagram.com/dnkyleee' },
  { name: 'Sangmin Lee', role: 'Technical Leader', image: sangmin, instagram: 'https://instagram.com/minnnmm200' },
  { name: 'Minseo Choi', role: 'Media Leader', image: minseo, instagram: 'https://instagram.com/chxisoei_' },
  { name: 'Hyejin Lee', role: 'Knowledge Leader', image: hyejin, instagram: 'https://instagram.com/hi_gennius' },
];

const HomeBody = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/board');
  };

  return (
    <S.Main>
      <S.Section id="hero" className="hero">
        <S.Container hero>
          <S.Row>
            <S.ColLeft>
              <h1>
                <span style={{ color: '#fff', fontSize: '1.3em' }}>CW: COWWELL</span>
              </h1>
              <h3>
                <span style={{ color: '#EDBCE9', fontSize: '1.0em'}}>C</span>ow 
                <span style={{ color: '#EDBCE9', fontSize: '1.0em', marginLeft: '5px'}}>O</span>bservation and 
                <span style={{ color: '#EDBCE9', fontSize: '1.0em', marginLeft: '5px' }}>W</span>eight
                <span style={{ color: '#EDBCE9', fontSize: '1.0em', marginLeft: '5px' }}>E</span>stimation using 
                <span style={{ color: '#EDBCE9', fontSize: '1.0em', marginLeft: '5px' }}>L</span>atest 
                <span style={{ color: '#EDBCE9', fontSize: '1.0em', marginLeft: '5px' }}>L</span>earning
              </h3>
              <p>
              Cattle farmers struggle with the inefficiency and stress of manual livestock monitoring. CW:COWWELL offers an automated solution using AI, and web applications to improve cattle management. The system employs the YOLOv7 deep learning method for image processing and cattle identification, enhancing the monitoring of cattle weight and types.
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
          <S.CircleText about>About</S.CircleText>
          <S.LogoImage src={logos} alt="Logos" />
          <S.AboutRow>
            <S.AboutImage1 src={aboutImage1} alt="About 1" />
            <S.AboutText1>
              <h3>
                Struggling with Cow Breeds and Weight <br /> Measurement? Easily Measure with Images!
              </h3>
              <p>Upload an image of your cattle, and our model trained with Yolov7 will predict the breed and weight.</p>
            </S.AboutText1>
          </S.AboutRow>
          <S.AboutRow reverse>
            <S.AboutImage2 src={aboutImage2} alt="About 2" />
            <S.AboutText2>
              <h3>
                Not Just Images—Connect a Camera for <br /> Real-Time Measurement!
              </h3>
              <p>You can connect and use not only the built-in camera but also other cameras for measurements.</p>
            </S.AboutText2>
          </S.AboutRow>
          <S.AboutRow center>
            <S.AboutImage3 src={aboutImage3} alt="About 3" />
            <S.AboutText3>
              <h3>User-Friendly Interface for Easily Viewing Predictions!</h3>
              <p>Provides detected areas as images and calculates results for easy viewing.</p>
            </S.AboutText3>
          </S.AboutRow>
        </S.Container>
      </S.Section>

      <S.Section id="members" className="members">
        <S.Container introduction>
          <S.CircleText>Member Introduction</S.CircleText>
          <h3>Lecturer</h3>
          <S.Row>
            {membersLecturers.map((member, index) => (
              <S.ColLecturer key={index}>
                <S.PersonImg src={member.image} alt={member.name} />
                <S.Name>
                  {member.name}
                  <S.InstagramIcon src={instaIcon} alt="Instagram" onClick={() => window.open(member.instagram, '_blank')} />
                </S.Name>
                <p>{member.role}</p>
              </S.ColLecturer>
            ))}
          </S.Row>
          <h3>KYUNGPOOK NATIONAL UNIVERSITY STUDENTS</h3>
          <S.Row>
            {membersKNU.map((member, index) => (
              <S.Col key={index}>
                <S.PersonImg src={member.image} alt={member.name} />
                <S.Name>
                  {member.name}
                  <S.InstagramIcon src={instaIcon} alt="Instagram" onClick={() => window.open(member.instagram, '_blank')} />
                </S.Name>
                <p>{member.role}</p>
              </S.Col>
            ))}
          </S.Row>
          <h3>STATE POLYTECHNIC OF JEMBER STUDENTS</h3>
          <S.Row>
            {membersPolije.map((member, index) => (
              <S.Col key={index}>
                <S.PersonImg src={member.image} alt={member.name} />
                <S.Name>
                  {member.name}
                  <S.InstagramIcon src={instaIcon} alt="Instagram" onClick={() => window.open(member.instagram, '_blank')} />
                </S.Name>
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