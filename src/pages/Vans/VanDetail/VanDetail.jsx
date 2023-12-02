import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import arrow from '../../../images/arrow-left.svg';
import { StyledContainer, StyledLink } from './VanDetails.styled';
import Tag from '../../../components/Tag';

const VanDetail = props => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then(res => res.json())
      .then(data => setData(data.vans));
  }, [id]);

  const { description, imageUrl, name, price, type } = data;

  let bgColor;
  switch (type) {
    case 'simple':
      bgColor = '#E17654';
      break;
    case 'luxury':
      bgColor = '#161616';
      break;
    case 'rugged':
      bgColor = '#115E59';
      break;
    default:
      bgColor = 'red';
  }

  return (
    <>
      <StyledContainer>
        <StyledLink to="/vans">
          <img src={arrow} alt="Arrow left" />
          Back to all vans
        </StyledLink>

        <img src={imageUrl} alt={name} />
        <Tag bgColor={bgColor}>{type}</Tag>
      </StyledContainer>
    </>
  );
};

VanDetail.propTypes = {};

export default VanDetail;
