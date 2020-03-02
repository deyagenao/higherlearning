import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

function Nav () {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <Link to='/' className='navbar-brand'>
          Higher Learning
        </Link>

        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to='/donate' className='nav-link'>
                Donate
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/apply' className='nav-link'>
                Apply
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/events' className='nav-link'>
                Events
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-link'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;