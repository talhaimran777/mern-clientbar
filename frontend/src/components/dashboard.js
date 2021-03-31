import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { fetchLoggedInUserAndClients } from '../actions/dashboard.actions';
// import AddClient from './addClient';
// import { Route, Redirect } from 'react-router-dom';

const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [cookies] = useCookies(['user']);
  const { user } = cookies;

  const { loadingData, clients, admin } = useSelector(
    (state) => state.dashboard
  );

  const { token } = user;

  useEffect(async () => {
    dispatch(fetchLoggedInUserAndClients(token, history));
  }, [dispatch]);
  return (
    <div className='dashboard'>
      <div className='container'>
        {loadingData ? (
          <div className='d-flex justify-content-center py-5 my-5'>
            <div className='spinner-border' role='status'>
              <span className='sr-only'></span>
            </div>
          </div>
        ) : admin && clients ? (
          <div>
            <h2 className='mb-3'>Hello, {admin.name}</h2>

            {clients.length ? (
              <div className='table-responsive-lg'>
                <table className='table table-striped mt-3'>
                  <thead className='thead-inverse'>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Phone No</th>
                      <th>Address</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map((client) => (
                      <tr>
                        <td>{client.firstName}</td>
                        <td>{client.lastName}</td>
                        <td>{client.email}</td>
                        <td>{client.phone}</td>
                        <td>{client.address}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              ''
            )}
          </div>
        ) : (
          ''
        )}

        {/* {loadingUser ? (
          <div className='d-flex justify-content-center'>
            <div className='spinner-border' role='status'>
              <span className='sr-only'></span>
            </div>
          </div>
        ) : showUser ? (
          <h1 className='mb-3'>Hello, {requestedUser.name}</h1>
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
          <div className='table-responsive-lg'>
            <table className='table table-striped mt-3'>
              <thead className='thead-inverse'>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone No</th>
                  <th>Address</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {requestedClients.map((client) => (
                  <tr>
                    <td>{client.firstName}</td>
                    <td>{client.lastName}</td>
                    <td>{client.email}</td>
                    <td>{client.phone}</td>
                    <td>{client.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h3>You have not added any clients </h3>
            <Link to='/addClient'>
              Click this link to register your new client!
            </Link>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Dashboard;
