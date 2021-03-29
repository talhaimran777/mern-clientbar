import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import FormGroup from './minicomponents/formGroup';

const AddClient = () => {
  const { requestedUser } = useSelector((state) => state.dashboard);

  const { _id } = requestedUser;

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
      let response = await axios.post('/api/clients', client);

      console.log(response);
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
