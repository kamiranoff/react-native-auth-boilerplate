import { combineReducers } from 'redux';
import { createLogger } from 'redux-logger';

import { signinReducer } from '../Auth/redux/signin';
import { signupReducer } from '../Auth/redux/signup';
import { userReducer } from '../Auth/redux/user';

// Root Reducer
const rootReducer = combineReducers({
  signin: signinReducer,
  signup: signupReducer,
  user: userReducer,
});

export default rootReducer;
