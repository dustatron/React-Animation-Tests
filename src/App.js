import React, { useContext } from 'react';
import './scss/_body.scss';
import Navbar from './components/Navbar';
import CardControl from './components/CardControl';
import Show from './components/Show';
import NotFound from './components/NotFound';
import About from './components/About';
import { Switch, Route, useLocation, __RouterContext } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

function App() {
  const { location } = useContext(__RouterContext);
  // const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: {
      opacity: 0,
      top: '-100px',
    },
    enter: [
      {
        opacity: 0.8,
        top: '0',
      },
      {
        opacity: 1,
      },
    ],
    leave: {
      opacity: 0,
      top: '50px',
    },
  });

  return (
    <div>
      <Navbar />
      {transitions.map(({ item: location, props, key }) => (
        <animated.div key={key} style={props} className='content'>
          <Switch location={location}>
            <Route exact path='/show/:id' component={Show} />
            <Route exact path='/' component={CardControl} />
            <Route exact path='/about' component={About} />
            <Route component={NotFound} />
          </Switch>
        </animated.div>
      ))}
    </div>
  );
}

export default App;
