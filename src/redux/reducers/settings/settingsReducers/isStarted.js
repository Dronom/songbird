const isStarted = (action, state) => ({
  ...state,
  isStarted: action.payload.status,
});

export default isStarted;
