import React, { useState } from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import FormGroup from './minicomponents/formGroup';

const AddClient = () => {
  const history = useHistory();

  const { admin } = useSelector((state) => state.dashboard);

  const [cookies] = useCookies(['user']);

  const { user } = cookies;

  const { token } = user;

  const { _id } = admin;

  const alert = useAlert();

  const submitHandler = async (state, e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, address } = state;

    let client = {
      firstName,
      lastName,
      email,
      phone,
      address,
      admin: _id,
    };
    try {
      const headers = {
        'x-auth-token': token,
      };
      let response = await axios.post('/api/clients', client, {
        headers,
      });

      const { data } = response;

      if (data) alert.success('Client Added Successfully!', { timeout: 5000 });
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  let initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  };
  const [state, setState] = useState(initialState);

  return (
    <div className='addClient'>
      <div className='container'>
        <div className='row'>
          <div className='col col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto py-5'>
            <div className='card'>
              <div className='card-body'>
                <form onSubmit={submitHandler.bind(this, state)}>
                  <h1 className='text-center text-primary mb-4'>
                    <strong>Add Client</strong>
                  </h1>

                  <FormGroup
                    state={state}
                    setState={setState}
                    type='text'
                    purpose='firstName'
                    label='Enter First Name: '
                  />
                  <FormGroup
                    state={state}
                    setState={setState}
                    type='text'
                    purpose='lastName'
                    label='Enter Last Name: '
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
                    type='text'
                    purpose='phone'
                    label='Enter Phone No: '
                  />
                  <FormGroup
                    state={state}
                    setState={setState}
                    type='text'
                    purpose='address'
                    label='Enter Address: '
                  />
                  <br />
                  <button className='btn btn-primary btn-lg w-100'>
                    Add Client
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClient;
