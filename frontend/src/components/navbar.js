import React from 'react';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { admin } = useSelector((state) => state.dashboard);

  const [cookies] = useCookies(['user']);

  // USER CONTAINS TOKEN AND A SUCCESS MESSSAGE HERE
  const { user } = cookies;

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
            {user && admin ? (
              <li className='nav-item'>
                {' '}
                <div className='nav-link'>{admin.email}</div>
              </li>
            ) : (
              ''
            )}
            {user && admin ? (
              <li className='nav-item'>
                <Link className='nav-link' to='/addClient'>
                  Add
                </Link>
              </li>
            ) : (
              ''
            )}

            {user && admin ? (
              <li className='nav-item'>
                <Link className='nav-link'>Logout</Link>
              </li>
            ) : (
              ''
            )}
            {/* <li className='nav-item'>
              <Link className='nav-link' to='/login'>
                login
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/signup'>
                Signup
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
