import { useState } from 'react';
import React from 'react';
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

  console.log('State at early moment, ', state);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send this data to the server
  };

  return (
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
              <button className='btn btn-primary btn-lg w-100'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
