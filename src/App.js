import React, { Fragment } from 'react';
import CardControl from './components/CardControl';
import './scss/_body.scss';
import Navbar from './components/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />
      <CardControl />
    </Fragment>
  );
}

export default App;
