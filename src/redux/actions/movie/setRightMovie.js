import { SET_RIGHT_MOVIE } from '../../../utils/constants';

const setRightMovie = (movie, category) => ({
  type: SET_RIGHT_MOVIE,
  payload: {
    movie,
    category,
  },
});

export default setRightMovie;
