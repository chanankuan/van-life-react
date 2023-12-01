import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';
import { Container } from '../Container/Container.styled';

export const StyledHeader = styled.header`
  background-color: #fff7ed;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
  padding-top: 36px;
  padding-bottom: 36px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 150px;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: #4d4d4d;
  font-weight: 600;
  line-height: 140%;
  transition: color 100ms ease-in-out;
  &.active {
    color: black;
    border-bottom: 2px solid black;
  }
  &:hover {
    color: black;
  }
`;

export const StyledLogoLink = styled(Link)`
  color: black;
  margin-right: auto;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 25px;
`;
