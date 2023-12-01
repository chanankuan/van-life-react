import React from 'react';
import { Copyright, FooterContainer, StyledFooter } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <Copyright>&copy;2022 #VANLIFE</Copyright>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
