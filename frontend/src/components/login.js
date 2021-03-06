import { useState } from 'react';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { useAlert } from 'react-alert';
import axios from 'axios';

// MINI-COMPONENT
import FormGroup from './minicomponents/formGroup';

const Login = () => {
  const [cookies, setCookie] = useCookies(['user']);
  const history = useHistory();
  const alert = useAlert();
  const { user } = cookies;

  if (user) {
    history.push('/');
  }

  let initialState = {
    email: '',
    password: '',
  };

  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();

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

          setCookie('user', res.data, {
            path: '/',
          });

          alert.success('Login SuccessFull!', { timeout: 5000 });
        }
      } catch (err) {
        const { errors } = err.response.data;
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

                {/* {status === 'SUCCESS' ? (
                  <div className='alert alert-success' role='alert'>
                    Login Successfull!
                  </div>
                ) : (
                  ''
                )} */}

                {errors
                  ? errors.map((error) => (
                      <div className='alert alert-danger' role='alert'>
                        {error.msg}
                      </div>
                    ))
                  : ''}

                <p>
                  Not yet registered? <Link to='/signup'>Signup</Link>
                </p>
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
