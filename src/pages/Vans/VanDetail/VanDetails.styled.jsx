import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Container } from '../../../components/Container/Container.styled';

export const StyledContainer = styled(Container)`
  padding-top: 40px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  color: #201f1d;
  font-size: 1rem;
  font-weight: 500;
  line-height: 150%;
  text-decoration-line: underline;
  margin-bottom: 40px;
  & img {
    margin-right: 10px;
  }
`;
