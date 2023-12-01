import styled from '@emotion/styled';

export const CardItem = styled.li`
  border-radius: 5px;
  &:not(:last-child) {
    margin-bottom: 25px;
  }
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 30px) / 2);
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

export const CardImage = styled.img`
  aspect-ratio: 1;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CardTitle = styled.h2`
  color: #161616;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

export const Price = styled.p`
  position: relative;
  color: #161616;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  & span {
    position: absolute;
    right: 0;
    top: 20px;
    color: #161616;
    text-align: right;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
  }
`;

export const Type = styled.div`
  color: #ffead0;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  line-height: 200%;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  background-color: ${props => props.bgColor};
  border-radius: 5px;
`;
