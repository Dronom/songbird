const addInSelectedMovies = (action, state) => ({
  ...state,
  list: state.list.map((page) => {
    if (action.payload.category === page.name) {
      return { ...page, selectedMovieIds: page.selectedMovieIds.add(action.payload.movieId) };
    }
    return { ...page };
  }),
});

export default addInSelectedMovies;
