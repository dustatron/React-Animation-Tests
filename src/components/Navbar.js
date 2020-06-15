import React from 'react';
import '../scss/_navbar.scss';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header>
      <div className='nav-logo'>
        <Link to='/' className='nav-logo-link'>
          Quality Times
        </Link>
      </div>
      <nav>
        <ul className='nav-links'>
          <li>
            <Link to='/about'> About </Link>
          </li>
          <li>
            <Link to='/about'> Learn More </Link>
          </li>
          <li>
            <Link to='/about'> Pricing </Link>
          </li>
        </ul>
      </nav>
      <Link className='cta'>
        <button className='nav-links-button'> Contact </button>
      </Link>
    </header>
  );
};

export default Navbar;
