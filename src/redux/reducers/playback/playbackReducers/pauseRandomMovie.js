const pauseRandomMovie = (action, state) => ({
  ...state,
  randomMovie: { ...state.randomMovie, isPlaying: false },
});

export default pauseRandomMovie;
