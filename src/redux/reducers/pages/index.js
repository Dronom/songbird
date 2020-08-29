import pagesMap from './map';
import initialState from './initialState';

const pages = (state = initialState(), action) => {
  const reducer = pagesMap.get(action.type);

  if (reducer) {
    return reducer(action, state);
  }

  return state;
};

export default pages;
