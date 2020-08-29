const getOriginalMovies = ({ moviesAmount, movieList }) => {
  if (movieList.length + 1 < moviesAmount || movieList.length + 1 === moviesAmount) {
    return movieList;
  }

  const movieIdList = new Set();
  const originalMovieList = [];

  while (movieIdList.size !== moviesAmount) {
    const currentMovieId = Math.floor(Math.random() * movieList.length);
    if (!movieIdList.has(currentMovieId)) {
      originalMovieList.push(movieList[currentMovieId]);
      movieIdList.add(currentMovieId);
    }
  }

  return originalMovieList;
};

export default getOriginalMovies;
