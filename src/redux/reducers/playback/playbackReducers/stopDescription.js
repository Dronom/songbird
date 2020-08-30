import initialState from '../initialState';

const stopDescription = (action, state) => ({
  ...state,
  description: { ...initialState.description },
});

export default stopDescription;
