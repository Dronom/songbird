const setGameOver = (action, state) => ({
  ...state,
  isGameOver: action.payload.status,
});

export default setGameOver;
