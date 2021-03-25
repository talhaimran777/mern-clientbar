// IMPORT EACH AND EVERY REDUCER AND MAKE A ROOT REDUCER AND EXPORT IT

import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import signupReducer from './signupReducer';

let rootReducer = combineReducers({
  signup: signupReducer,
  counter: counterReducer,
});

export default rootReducer;
