import { useState } from 'react';
import React from 'react';
import { useCookies } from 'react-cookie';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

// MINI-COMPONENT
import FormGroup from './minicomponents/formGroup';

const Signup = () => {
  const [cookies] = useCookies(['user']);
  const history = useHistory();

  const { user } = cookies;

  if (user) {
    // REDIRECT TO DASHBOARD COMPONENT
    history.push('/');
  }

  let initialState = {
    name: '',
    email: '',
    password: '',
  };

  // const { status, errors, user } = useSelector((state) => state.signup);

  const dispatch = useDispatch();

  const [state, setState] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: 'REGISTRATION_REQUEST',
    });

    const postData = async () => {
      try {
        let res = await axios.post('/api/signup', state);

        if (res.data) {
          dispatch({
            type: 'REGISTRATION_SUCCESS',
            payload: res.data,
          });
        }
      } catch (err) {
        const { errors } = err.response.data;
        dispatch({
          type: 'REGISTRATION_FAILURE',
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
                  <strong>Get Registered</strong>
                </h1>

                <FormGroup
                  state={state}
                  setState={setState}
                  type='text'
                  purpose='name'
                  label='Enter Name: '
                />
                <br />
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

                {/* {status === 'IN_PROCESS' && (
            <div className='d-flex justify-content-center'>
              <div className='spinner-border' role='status'>
                <span className='sr-only'></span>
              </div>
            </div>
          )} */}

                {/* {status === 'IN_PROCESS' ? (
                  <div className='d-flex justify-content-center'>
                    <div className='spinner-border' role='status'>
                      <span className='sr-only'></span>
                    </div>
                  </div>
                ) : (
                  ''
                )}

                {status === 'SUCCESS' ? (
                  <div className='alert alert-success' role='alert'>
                    You have been registered!
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
                  : ''} */}

                <p>
                  Already a user? <Link to='/login'>Login</Link>
                </p>
                <button className='btn btn-primary btn-lg w-100'>Signup</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
