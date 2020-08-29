import { SET_MOVIES } from '../../../utils/constants';

const setMovies = ({ movies, category }) => ({
  type: SET_MOVIES,
  payload: { movies, category },
});

export default setMovies;
