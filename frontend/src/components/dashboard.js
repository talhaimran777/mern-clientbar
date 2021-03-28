import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

// import { Route, Redirect } from 'react-router-dom';

const Dashboard = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.login);
  const { loadingUser, requestedUser, showUser } = useSelector(
    (state) => state.dashboard
  );

  const { token } = user;

  useEffect(async () => {
    dispatch({
      type: 'REQUEST_USER',
    });
    let config = {
      headers: {
        'x-auth-token': token,
      },
    };

    try {
      let response = await axios.get('/api/auth', config);

      const { data } = response;
      console.log(data);
      dispatch({
        type: 'REQUEST_USER_SUCCESS',
        payload: data.data,
      });
    } catch (err) {
      console.log(err);
    }

    // axios.get('/api/auth');
  }, []);
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
          <h1>Hello, {requestedUser.name}</h1>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Dashboard;
