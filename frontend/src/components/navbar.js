import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { loggedIn } = useSelector((state) => state.login);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          Rapid AID
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            {loggedIn ? (
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Dashboard
                </Link>
              </li>
            ) : (
              ''
            )}

            <li className='nav-item'>
              <Link className='nav-link' to='/login'>
                login
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/signup'>
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
