import React from 'react';

const onChangeHandler = (state, setState, e) => {
  setState({ ...state, [e.target.name]: e.target.value });
};
const FormGroup = (props) => {
  const { state, setState, label, purpose, type, classes } = props;

  return (
    <div className={`form-group ${classes}`}>
      <label htmlFor={purpose}>{label}</label>
      <input
        onChange={onChangeHandler.bind(this, state, setState)}
        name={purpose}
        type={type}
        required={true}
        className='form-control'
      />
    </div>
  );
};

export default FormGroup;
