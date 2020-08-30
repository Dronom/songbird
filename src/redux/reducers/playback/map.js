import pauseDescription from './playbackReducers/pauseDescription';
import pauseRandomMovie from './playbackReducers/pauseRandomMovie';
import resetPlaybacks from './playbackReducers/resetPlaybacks';
import startDescription from './playbackReducers/startDescription';
import startRandomMovie from './playbackReducers/startRandomMovie';
import stopDescription from './playbackReducers/stopDescription';
import stopRandomMovie from './playbackReducers/stopRandomMovie';

import {
  PAUSE_DESCRIPTION,
  PAUSE_RANDOM_MOVIE,
  RESET_PLAYBACKS,
  START_DESCRIPTION,
  START_RANDOM_MOVIE,
  STOP_DESCRIPTION,
  STOP_RANDOM_MOVIE,
} from '../../../utils/constants';

const playbackMap = new Map([
  [PAUSE_DESCRIPTION, pauseDescription],
  [PAUSE_RANDOM_MOVIE, pauseRandomMovie],
  [RESET_PLAYBACKS, resetPlaybacks],
  [START_DESCRIPTION, startDescription],
  [START_RANDOM_MOVIE, startRandomMovie],
  [STOP_DESCRIPTION, stopDescription],
  [STOP_RANDOM_MOVIE, stopRandomMovie],
]);

export default playbackMap;
