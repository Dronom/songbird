const startRandomMovie = (action, state) => ({
  ...state,
  canPlay: true,
  randomMovie: {
    ...state.randomMovie,
    isPlaying: true,
    isStarted: true,
    text: action.payload.text,
  },
  description: { ...state.description, isPlaying: false, isStarted: false },
});

export default startRandomMovie;
