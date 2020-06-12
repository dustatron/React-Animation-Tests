import React from 'react';
import SampleData from './sampleData';
import Card from './Card';
import './scss/_card-control.scss';

const CardControl = (props) => {
  return (
    <div className='card-controller'>
      <h2>Cards here</h2>
      <div className='card-container'>
        {SampleData.map((data) => (
          <Card title={data.title} img={data.img} cda={data.cda} />
        ))}
      </div>
    </div>
  );
};

export default CardControl;
