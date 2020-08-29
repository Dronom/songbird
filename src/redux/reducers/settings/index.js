import settingsMap from './map';

const settings = (state = { language: 'en', isStarted: false, isGameOver: false }, action) => {
  const reducer = settingsMap.get(action.type);

  if (reducer) {
    return reducer(action, state);
  }

  return state;
};

export default settings;
