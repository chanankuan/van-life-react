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
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 55px;
`;

export const Button = styled.button`
  color: #4d4d4d;
  width: 100px;
  height: 37px;
  padding: 0;
  border: none;
`;

export const FilterButton = styled(Button)`
  background-color: #ffead0;
  border-radius: 5px;
  transition: background-color 200ms ease-in-out;
  &:hover {
    background-color: #ffe4c2;
  }
`;

export const ClearButton = styled(Button)`
  position: relative;
  background-color: transparent;
  &:hover {
    font-weight: 600;
  }
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 7px;
    width: 87%;
    height: 2px;
    background-color: #4d4d4d;
  }
`;

export const CardList = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    row-gap: 30px;
    flex-wrap: wrap;
  }
`;
