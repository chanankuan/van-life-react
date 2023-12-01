import styled from '@emotion/styled';
import bgImg from '../../images/home-hero.jpg';
import { Link } from 'react-router-dom';
import { Container } from '../../components/Container/Container.styled';

export const HomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 350px;
  color: white;
`;

export const Hero = styled.section`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),
    url(${bgImg}) no-repeat center center;
  background-size: cover;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 42px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  line-height: 24px;
  margin-bottom: 40px;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  background-color: #ff8c38;
  border: none;
  width: 100%;
  padding-block: 0.75rem;
  color: white;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  &:hover {
    transform: translate(1px, 1px);
  }

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;
