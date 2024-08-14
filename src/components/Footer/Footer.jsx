import * as S from './Footer.styled';

const Footer = () => {
    return (
        <S.Footer>
            <S.Container>
                <p>© 2024 COWWELL. All rights reserved.</p>
                <S.FooterLinks>
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#terms">Terms of Service</a>
                    <a href="#members">Contact Us</a>
                </S.FooterLinks>
            </S.Container>
        </S.Footer>
    );
}

export default Footer;