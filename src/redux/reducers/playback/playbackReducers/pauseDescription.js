const pauseDescription = (action, state) => {
  return { ...state, description: { ...state.description, isPlaying: false } };
};

export default pauseDescription;
