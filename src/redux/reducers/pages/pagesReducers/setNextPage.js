const setNextPage = (action, state) => ({
  ...state,
  pagesPassed: state.pagesPassed + 1,
});

export default setNextPage;
