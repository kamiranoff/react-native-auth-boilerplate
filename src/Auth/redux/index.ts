import axios from 'axios';
import Config from 'react-native-config';
// There are three possible states for our login
// process and we need actions for each of them
export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

const SIGN_UP = 'SIGN_UP';
const IS_IN_ERROR = 'IS_IN_ERROR';

const initialState = {
  errors: false,
};

export const signin = ({ email, password }: { email: string, password: string }) => {
  return function(dispatch) {
    const URL = `${Config.AUTH_ROOT_URL}/api/users/login`;
    console.log('here', URL);
    axios.post(URL, { email, password });
  };
};

export const signup = ({ email, password }: { email: string, password: string }) => {
  return function(dispatch) {
    const URL = `${Config.AUTH_ROOT_URL}/api/users/signup`;
    console.log('here', URL);
    axios.post(URL, { email, password });
  };
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_IN_ERROR:
      return {
        ...state,
        withError: action.withError,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
      };
    case SIGN_UP:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};