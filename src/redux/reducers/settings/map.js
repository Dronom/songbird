import setGameOver from './settingsReducers/setGameOver';
import isStarted from './settingsReducers/isStarted';
import setLanguage from './settingsReducers/setLanguage';

import { SET_GAME_OVER, SET_LANGUAGE, IS_STARTED } from '../../../utils/constants';

const settingsMap = new Map([
  [SET_GAME_OVER, setGameOver],
  [SET_LANGUAGE, setLanguage],
  [IS_STARTED, isStarted],
]);

export default settingsMap;
