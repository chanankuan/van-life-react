import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import VanItem from './VanItem/VanItem';
import { ButtonList, CardList, StyledContainer, Title } from './Vans.styled';

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
          <button>Simple</button>
        </li>
        <li>
          <button>Luxury</button>
        </li>
        <li>
          <button>Rugged</button>
        </li>
        <li>
          <button>Clear filters</button>
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
