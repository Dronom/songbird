import initialState from '../initialState';

const stopDescription = (action, state) => {
  return { ...state, description: { ...initialState.description } };
};

export default stopDescription;
