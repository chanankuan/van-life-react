import styled from '@emotion/styled';
import { Container } from '../../components/Container/Container.styled';
import { Link } from 'react-router-dom';

export const Image = styled.img`
  max-width: 100%;
`;

export const PageContent = styled.div`
  margin-bottom: 55px;
`;

export const Section = styled.section``;

export const StyledContainer = styled(Container)`
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  line-height: 120%;
  margin-bottom: 30px;
`;

export const Paragraph = styled.p`
  font-weight: 500;
  line-height: 140%;
`;

export const Wrapper = styled.div`
  background-color: #ffcc8d;
  color: #161616;
  padding: 32px 40px;
  border-radius: 5px;
`;

export const SecondaryTitle = styled.h2`
  margin-bottom: 25px;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  line-height: 150%;
  padding: 12px 22px;
  border-radius: 10px;
  background-color: #161616;
  transition: transform 200ms ease-in-out;
  &:hover {
    transform: translate(1px, 1px);
  }
`;
