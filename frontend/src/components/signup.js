import { useState } from 'react';
import React from 'react';
import axios from 'axios';

// MINI-COMPONENT
import FormGroup from './minicomponents/formGroup';

const Signup = () => {
  let initialState = {
    name: '',
    email: '',
    password: '',
  };

  const [state, setState] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = async () => {
      try {
        let res = await axios.post('/signup', state);
        console.log(res);
      } catch (err) {
        console.log(err);
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
      <div className='col col-md-6 mx-auto'>
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

          <button className='btn btn-primary btn-lg w-100'>Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
