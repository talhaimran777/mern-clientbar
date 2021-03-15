// IMPORT EACH AND EVERY REDUCER AND MAKE A ROOT REDUCER AND EXPORT IT

import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

let rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
