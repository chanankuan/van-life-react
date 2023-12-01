import React from 'react';
import bgImg from '../../images/about-hero.jpg';
import {
  Image,
  PageContent,
  Paragraph,
  SecondaryTitle,
  Section,
  StyledContainer,
  StyledLink,
  Title,
  Wrapper,
} from './About.styled';

const About = () => {
  return (
    <main className="about-page-container">
      <Image src={bgImg} alt="Man sitting on a van" />

      <Section>
        <StyledContainer>
          <PageContent>
            <Title>
              Don’t squeeze in a sedan when you could relax in a van.
            </Title>
            <Paragraph>
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </Paragraph>
            <Paragraph>
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </Paragraph>
          </PageContent>
          <Wrapper>
            <SecondaryTitle>
              Your destination is waiting.
              <br />
              Your van is ready.
            </SecondaryTitle>
            <StyledLink to="/vans">Explore our vans</StyledLink>
          </Wrapper>
        </StyledContainer>
      </Section>
    </main>
  );
};

export default About;
