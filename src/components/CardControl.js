import React from 'react';
import SampleData from '../sampleData';
import Card from './Card';
import '../scss/_card-control.scss';
import { animated, useTransition } from 'react-spring';
import { Link, Route } from 'react-router-dom';
import Show from './Show';

const CardControl = ({ match }) => {
  const transition = useTransition(SampleData, (SampleData) => SampleData.id, {
    from: { opacity: 0, marginLeft: -100, marginRight: 100 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0 },
    trail: 150,
  }); // returns array, (item, item key, styling)

  return (
    <div className='card-controller'>
      <h2>test!</h2>
      <div className='card-container'>
        {/* <Route exact path={`${match.url}/show/:id`} component={Show} /> */}
        {transition.map(({ item, key, props }) => (
          <animated.div
            key={key}
            style={props}
            className='card-container-animated-box'>
            <Link to={`/show/${item.id}`}>
              <Card title={item.title} img={item.img} cda={item.cda} />
            </Link>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default CardControl;
