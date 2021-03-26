import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// MINI-COMPONENT
import FormGroup from './minicomponents/formGroup';

const Login = () => {
  let initialState = {
    email: '',
    password: '',
  };

  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();

  // dispatch({
  //   type: 'LOGIN_COMPONENT_REQUEST',
  // });

  const { status, errors, loggedIn } = useSelector((state) => state.login);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send this data to the server
    dispatch({
      type: 'LOGIN_REQUEST',
    });

    const postData = async () => {
      try {
        let res = await axios.post('/api/login', state);

        if (res.data) {
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.data,
          });

          localStorage.setItem('user', res.data);
        }
      } catch (err) {
        const { errors } = err.response.data;
        console.log(errors);
        dispatch({
          type: 'LOGIN_FAILURE',
          payload: errors,
        });
      }
    };

    let { name, email, password } = state;

    // if (name && email && password) {
    // }
    postData();
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto py-5'>
          <div className='card'>
            <div className='card-body'>
              <form onSubmit={handleSubmit}>
                <h1 className='text-center text-primary mb-4'>
                  <strong>Login</strong>
                </h1>

                <FormGroup
                  state={state}
                  setState={setState}
                  type='text'
                  purpose='email'
                  label='Enter Email: '
                />
                <br />
                <FormGroup
                  state={state}
                  setState={setState}
                  classes='mb-4'
                  type='password'
                  purpose='password'
                  label='Enter Password: '
                />

                {status === 'IN_PROCESS' ? (
                  <div className='d-flex justify-content-center my-4'>
                    <div className='spinner-border' role='status'>
                      <span className='sr-only'></span>
                    </div>
                  </div>
                ) : (
                  ''
                )}

                {status === 'SUCCESS' ? (
                  <div className='alert alert-success' role='alert'>
                    Login Successfull!
                  </div>
                ) : (
                  ''
                )}

                {errors
                  ? errors.map((error) => (
                      <div className='alert alert-danger' role='alert'>
                        {error.msg}
                      </div>
                    ))
                  : ''}

                {loggedIn ? (
                  <p>
                    Go to your dashboard <Link to='/'>Dashboard</Link>
                  </p>
                ) : (
                  <p>
                    Not yet registered? <Link to='/signup'>Signup</Link>
                  </p>
                )}

                <button className='btn btn-primary btn-lg w-100'>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
