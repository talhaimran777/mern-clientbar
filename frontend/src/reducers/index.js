// IMPORT EACH AND EVERY REDUCER AND MAKE A ROOT REDUCER AND EXPORT IT

import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import signupReducer from './signupReducer';
import loginReducer from './loginReducer';
import dashboardReducer from './dashboard.reducer';

let rootReducer = combineReducers({
  signup: signupReducer,
  counter: counterReducer,
  login: loginReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;
