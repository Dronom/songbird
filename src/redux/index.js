import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import allReducers from './reducers';

const configureStore = (initialState = {}) => {
  const middleware = [thunk];

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line
    const { logger } = require('redux-logger');

    middleware.push(logger);
  }

  return createStore(allReducers, initialState, applyMiddleware(...middleware));
};

export default configureStore();
