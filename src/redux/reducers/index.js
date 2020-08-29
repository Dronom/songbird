import { combineReducers } from 'redux';

import activeMovie from './activeMovie';
import score from './score';
import pages from './pages';
import playback from './playback';
import settings from './settings';

import { RESTART_GAME } from '../../utils/constants';

const allReducers = combineReducers({ activeMovie, score, pages, settings, playback });

const rootReducer = (state, action) => {
  let newState = state;

  if (action.type === RESTART_GAME) {
    newState = {};
  }

  return allReducers(newState, action);
};

export default rootReducer;
