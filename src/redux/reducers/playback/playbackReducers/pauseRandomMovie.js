const pauseRandomMovie = (action, state) => {
  return { ...state, randomMovie: { ...state.randomMovie, isPlaying: false } };
};

export default pauseRandomMovie;
