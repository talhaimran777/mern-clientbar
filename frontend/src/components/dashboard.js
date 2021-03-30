import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLoggedInUser, fetchClients } from '../actions/dashboard.actions';
// import AddClient from './addClient';
// import { Route, Redirect } from 'react-router-dom';

const Dashboard = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.login);
  const {
    loadingUser,
    requestedUser,
    showUser,
    loadingClients,
    requestedClients,
  } = useSelector((state) => state.dashboard);

  const { token } = user;

  useEffect(async () => {
    await dispatch(fetchLoggedInUser(token));

    await dispatch(fetchClients(token));
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
            {/* <Link to='/addClient'>Add Client</Link> */}
          </div>
        ) : (
          ''
        )}

        {loadingClients ? (
          <div className='d-flex justify-content-center'>
            <div className='spinner-border' role='status'>
              <span className='sr-only'></span>
            </div>
          </div>
        ) : requestedClients && requestedClients.length ? (
          <h4>Will show your clients here</h4>
        ) : (
          <div>
            <h3>You have not added any clients </h3>
            <Link to='/addClient'>
              Click this link to register your new client!
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
