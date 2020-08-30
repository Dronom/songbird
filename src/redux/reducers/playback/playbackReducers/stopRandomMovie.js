import initialState from '../initialState';

const stopRandomMovie = (action, state) => ({
  ...state,
  randomMovie: { ...initialState.randomMovie },
});

export default stopRandomMovie;
