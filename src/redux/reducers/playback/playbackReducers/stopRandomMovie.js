import initialState from '../initialState';

const stopRandomMovie = (action, state) => {
  return { ...state, randomMovie: { ...initialState.randomMovie } };
};

export default stopRandomMovie;
