import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { authReducer } from '../Auth/redux';

// Root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
});

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const configureStore = (initialState: Object) => {
  const middleware = applyMiddleware(thunk, logger);

  return createStore(rootReducer, initialState, middleware);
};

export default configureStore;
