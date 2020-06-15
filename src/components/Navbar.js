import React from 'react';
import '../scss/_navbar.scss';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-container'>
        <div className='nav-logo'>Quality Times</div>
        <div className='nav-menu'>
          <ol>
            <li>Features</li>
            <li>Solutions</li>
            <li>Pricing</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
