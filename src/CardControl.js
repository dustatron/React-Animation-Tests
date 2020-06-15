import React from 'react';
import SampleData from './sampleData';
import Card from './Card';
import './scss/_card-control.scss';
import { animated, useTransition } from 'react-spring';

const CardControl = (props) => {
  const transition = useTransition(SampleData, (SampleData) => SampleData.id, {
    from: { opacity: 0, marginLeft: -100, marginRight: 100 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0 },
    trail: 150,
  }); // returns array, (item, item key, styling)

  console.log('transition', transition);

  return (
    <div className='card-controller'>
      <div className='card-container'>
        {transition.map(({ item, key, props }) => (
          <animated.div
            key={key}
            style={props}
            className='card-container-animated-box'>
            <Card title={item.title} img={item.img} cda={item.cda} />
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default CardControl;
