import axios from 'axios';
import Config from 'react-native-config';

import { SIGNUP_REQUEST, SIGNUP_FAILED, SIGNUP_SUCCEEDED } from './constants';

const SIGNUP_URL = `${Config.AUTH_ROOT_URL}/api/users/signup`;

const initialState = {
  errors: false,
  loading: false,
};

const signupRequested = () => ({
  type: SIGNUP_REQUEST,
});

const signupFailed = (error) => ({
  error,
  type: SIGNUP_FAILED,
});

const signupSucceeded = (response) => {
  console.log(response);
  return {
    type: SIGNUP_SUCCEEDED,
  };
};

export const signup = ({ email, password }: { email: string, password: string }) => {
  return function(dispatch) {
    dispatch(signupRequested());
    axios.post(SIGNUP_URL, { email, password })
      .then(response => {
        dispatch(signupSucceeded(response));
      })
      .catch(error => {
        dispatch(signupFailed(error));
      });
  };
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SIGNUP_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SIGNUP_SUCCEEDED:
      return {
        ...state,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};