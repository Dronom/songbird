const setMovies = (action, state) => ({
  ...state,
  list: state.list.map((page) => {
    if (action.payload.category === page.name) {
      return { ...page, movies: action.payload.movies };
    }
    return { ...page };
  }),
});

export default setMovies;
