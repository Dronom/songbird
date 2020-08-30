import activeMovieMap from './map';

const initialState = {};

const activeMovie = (state = initialState, action) => {
  const reducer = activeMovieMap.get(action.type);

  if (reducer) {
    return reducer(action, state);
  }

  return state;
};

export default activeMovie;
