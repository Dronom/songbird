import { START_RANDOM_MOVIE } from '../../../utils/constants';

const startRandomMovie = (text) => ({
  type: START_RANDOM_MOVIE,
  payload: { text },
});

export default startRandomMovie;
