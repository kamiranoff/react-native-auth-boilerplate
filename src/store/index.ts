import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const middleware = [thunk, logger];
const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

const configureStore = (initialState) => {
  return createStore(rootReducer, initialState, enhancer);
};

export default configureStore;
