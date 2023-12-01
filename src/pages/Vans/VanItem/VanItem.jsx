import React from 'react';
import PropTypes from 'prop-types';
import {
  CardImage,
  CardInfo,
  CardItem,
  CardTitle,
  Price,
  Type,
} from './VanItrem.styled';

const VanItem = ({ imageUrl, name, price, type }) => {
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
    <CardItem>
      <CardImage src={imageUrl} alt={name} />
      <CardInfo>
        <CardTitle>{name}</CardTitle>
        <Price>
          ${price}
          <br />
          <span>/day</span>
        </Price>
      </CardInfo>
      <Type bgColor={bgColor}>{type}</Type>
    </CardItem>
  );
};

VanItem.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  type: PropTypes.string,
};

export default VanItem;
