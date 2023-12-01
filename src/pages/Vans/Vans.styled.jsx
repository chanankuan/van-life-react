import styled from '@emotion/styled';
import { Container } from '../../components/Container/Container.styled';

export const StyledContainer = styled(Container)`
  padding-top: 55px;
  padding-bottom: 80px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const ButtonList = styled.ul`
  display: flex;
  margin-bottom: 55px;
`;

export const Filter = styled.button``;

export const CardList = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    row-gap: 30px;
    flex-wrap: wrap;
  }
`;
