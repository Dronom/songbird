import { ADD_SCORE } from '../../../utils/constants';

const addScore = (score) => ({
  type: ADD_SCORE,
  payload: {
    score,
  },
});

export default addScore;
