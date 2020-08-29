import playbackMap from './map';
import initialState from './initialState';

const playback = (state = initialState, action) => {
  const reducer = playbackMap.get(action.type);

  if (reducer) {
    return reducer(action, state);
  }

  return state;
};

export default playback;
