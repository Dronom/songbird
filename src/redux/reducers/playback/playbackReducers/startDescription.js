const startDescription = (action, state) => ({
  ...state,
  canPlay: true,
  description: {
    ...state.description,
    isPlaying: true,
    isStarted: true,
    text: action.payload.text,
  },
  randomMovie: { ...state.randomMovie, isPlaying: false, isStarted: false },
});

export default startDescription;
