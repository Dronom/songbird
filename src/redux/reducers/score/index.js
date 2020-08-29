import scoreMap from './map';

const cartoon = (state = 0, action) => {
  const reducer = scoreMap.get(action.type);

  if (reducer) {
    return reducer(action, state);
  }

  return state;
};

export default cartoon;
