const SIGN_IN = 'SIGN_IN';
const SIGN_UP = 'SIGN_UP';
const IS_IN_ERROR = 'IS_IN_ERROR';

const initialState = {
  errors: false,
};

export const isInError = (withError: boolean) => {
  return {
    withError,
    type: IS_IN_ERROR,
  };
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_IN_ERROR:
      return {
        ...state,
        withError: action.withError,
      };
    case SIGN_IN:
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