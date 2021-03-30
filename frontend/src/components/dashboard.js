import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLoggedInUser } from '../actions/dashboard.actions';
// import AddClient from './addClient';
// import { Route, Redirect } from 'react-router-dom';

const Dashboard = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.login);
  const { loadingUser, requestedUser, showUser } = useSelector(
    (state) => state.dashboard
  );

  const { token } = user;

  useEffect(() => {
    dispatch(fetchLoggedInUser(token));
    // try {
    //   // NOW WE WILL FETCH CLIENTS ADDED BY THIS USER
    //   // WE WILL JUST SEND TOKEN TO THE SERVER
    //   dispatch({
    //     type: 'REQUEST_CLIENTS',
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
    // // axios.get('/api/auth');
  }, [dispatch]);
  return (
    <div className='dashboard'>
      <div className='container'>
        {loadingUser ? (
          <div className='d-flex justify-content-center'>
            <div className='spinner-border' role='status'>
              <span className='sr-only'></span>
            </div>
          </div>
        ) : showUser ? (
          <div>
            <h1>Hello, {requestedUser.name}</h1>
            <Link to='/addClient'>Add Client</Link>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Dashboard;
