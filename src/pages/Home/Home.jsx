import React from 'react';
import {
  Description,
  Hero,
  HomeContainer,
  StyledLink,
  Title,
} from './Home.styled';

const Home = () => {
  return (
    <Hero>
      <HomeContainer>
        <Title>You got the travel plans, we got the travel vans.</Title>
        <Description>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </Description>
        <StyledLink to="vans">Find your van</StyledLink>
      </HomeContainer>
    </Hero>
  );
};

export default Home;
