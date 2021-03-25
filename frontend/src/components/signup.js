import { useState } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// MINI-COMPONENT
import FormGroup from './minicomponents/formGroup';

const Signup = () => {
  let initialState = {
    name: '',
    email: '',
    password: '',
  };

  const { status } = useSelector((state) => state.signup);

  const dispatch = useDispatch();

  const [state, setState] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: 'REGISTRATION_REQUEST',
    });

    const postData = async () => {
      try {
        let res = await axios.post('/signup', state);

        if (res.data) {
          dispatch({
            type: 'REGISTRATION_SUCCESS',
          });
        }
      } catch (err) {
        const { errors } = err.response.data;

        dispatch({
          type: 'REGISTRATION_FAILURE',
          payload: errors,
        });
        console.log(errors);
      }
    };

    let { name, email, password } = state;

    if (name && email && password) {
      // axios.post('/signup');
      postData();
    }
  };

  return (
    <div className='row'>
      <div className='col col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto'>
        <form onSubmit={handleSubmit}>
          <h1 className='text-center'>SIGNUP FORM</h1>

          <FormGroup
            state={state}
            setState={setState}
            type='text'
            purpose='name'
            label='Enter Name: '
          />
          <FormGroup
            state={state}
            setState={setState}
            type='text'
            purpose='email'
            label='Enter Email: '
          />
          <FormGroup
            state={state}
            setState={setState}
            classes='mb-4'
            type='password'
            purpose='password'
            label='Enter Password: '
          />

          {status === 'IN_PROCESS' && (
            <div className='d-flex justify-content-center'>
              <div className='spinner-border' role='status'>
                <span className='sr-only'></span>
              </div>
            </div>
          )}
          <button className='btn btn-primary btn-lg w-100'>Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
