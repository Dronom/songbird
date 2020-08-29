import { ADD_IN_SELECTED_MOVIES } from '../../../utils/constants';

const addInSelectedMovies = (category, movieId) => ({
  type: ADD_IN_SELECTED_MOVIES,
  payload: { category, movieId },
});

export default addInSelectedMovies;
