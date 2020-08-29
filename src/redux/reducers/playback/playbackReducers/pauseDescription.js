const pauseDescription = (action, state) => ({
  ...state,
  description: { ...state.description, isPlaying: false },
});

export default pauseDescription;
