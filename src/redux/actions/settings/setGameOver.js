import { SET_GAME_OVER } from '../../../utils/constants';

const setGameOver = (status) => ({
  type: SET_GAME_OVER,
  payload: { status },
});

export default setGameOver;
