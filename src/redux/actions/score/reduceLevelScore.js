import { REDUCE_LEVEL_SCORE } from '../../../utils/constants';

const reduceLevelScore = (category) => ({
  type: REDUCE_LEVEL_SCORE,
  payload: {
    category,
  },
});

export default reduceLevelScore;
