import { SIGNIN_SUCCEEDED, SIGNUP_SUCCEEDED } from './constants';

const initialState = {
  email: '',
  token: '',
  isSignedIn: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_SUCCEEDED:
    case SIGNUP_SUCCEEDED:
      return {
        ...state,
        isSignedIn: true,
        email: action.email,
      };

    default:
      return {
        ...state,
      };
  }
};