import axios from 'axios';
import Config from 'react-native-config';
import { SIGNIN_REQUEST, SIGNIN_FAILED, SIGNIN_SUCCEEDED } from './constants';

const SIGNIN_URL = `${Config.AUTH_ROOT_URL}/api/users/login`;

const initialState = {
  errors: false,
  loading: false,
};

const signinRequested = () => ({
  type: SIGNIN_REQUEST,
});

const signinFailed = (error) => ({
  error,
  type: SIGNIN_FAILED,
});

const signinSucceeded = (response) => {
  return {
    type: SIGNIN_SUCCEEDED,
    email: response.data.email,
  };
};

export const signin = ({ email, password }: { email: string, password: string }) => (dispatch) => {
  dispatch(signinRequested());
  axios.post(SIGNIN_URL, { email, password })
    .then(response => {
      dispatch(signinSucceeded(response));
    })
    .catch(error => {
      dispatch(signinFailed(error));
    });
};

export const signinReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SIGNIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SIGNIN_SUCCEEDED:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};