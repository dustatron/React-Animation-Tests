import React from 'react';
import '../scss/_card.scss';

const Card = ({ title, cda, img }) => {
  return (
    <div className='card'>
      <img className='card-img' src={img} alt='' />
      <div className='card-title'>{title}</div>
      <div className='card-cda'>{cda}</div>
    </div>
  );
};

export default Card;
