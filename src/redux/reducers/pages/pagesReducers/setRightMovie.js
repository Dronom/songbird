const setRightMovie = (action, state) => ({
  ...state,
  list: state.list.map((page) => {
    if (action.payload.category === page.name) {
      return { ...page, rightMovie: action.payload.movie };
    }
    return { ...page };
  }),
});

export default setRightMovie;
