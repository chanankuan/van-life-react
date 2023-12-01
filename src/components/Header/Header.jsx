import React from 'react';
import {
  HeaderContainer,
  Nav,
  StyledHeader,
  StyledLink,
  StyledLogoLink,
} from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <StyledLogoLink className="site-logo" to="/">
          #VANLIFE
        </StyledLogoLink>
        <Nav>
          <StyledLink to="/host">Host</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/vans">Vans</StyledLink>
        </Nav>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
