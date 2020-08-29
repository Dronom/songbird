import { SET_ACTIVE_MOVIE } from '../../../utils/constants';

const setActiveMovie = (movie) => ({
  type: SET_ACTIVE_MOVIE,
  payload: {
    movie,
  },
});

export default setActiveMovie;
