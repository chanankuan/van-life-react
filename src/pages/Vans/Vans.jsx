import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import VanItem from './VanItem/VanItem';
import {
  ButtonList,
  CardList,
  ClearButton,
  FilterButton,
  StyledContainer,
  Title,
} from './Vans.styled';

const Vans = props => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch('/api/vans')
      .then(res => res.json())
      .then(data => setVans(data.vans));
  }, []);

  return (
    <StyledContainer>
      <Title>Explore our van options</Title>
      <ButtonList>
        <li>
          <FilterButton>Simple</FilterButton>
        </li>
        <li>
          <FilterButton>Luxury</FilterButton>
        </li>
        <li>
          <FilterButton>Rugged</FilterButton>
        </li>
        <li>
          <ClearButton>Clear filters</ClearButton>
        </li>
      </ButtonList>

      <CardList>
        {vans.map(van => (
          <VanItem key={van.id} {...van} />
        ))}
      </CardList>
    </StyledContainer>
  );
};

Vans.propTypes = {};

export default Vans;
