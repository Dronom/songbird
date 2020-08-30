const setQuessed = (action, state) => ({
  ...state,
  list: state.list.map((page) => {
    if (action.payload.category === page.name) {
      return { ...page, isQuessed: action.payload.status };
    }
    return { ...page };
  }),
});

export default setQuessed;
