/* eslint-disable camelcase */
import axios from 'axios';

const getMovies = async ({
  language = 'en',
  page = 1,
  sortBy = 'popularity.desc',
  with_genres = [],
  without_genres = [],
  type = 'movie',
}) => {
  const request = await axios.get(`${process.env.MOVIE_DB_LINK}/discover/${type}`, {
    params: {
      api_key: process.env.MOVIE_DB_KEY,
      language,
      page,
      sort_by: sortBy,
      with_genres: with_genres.length ? with_genres.join() : '',
      without_genres: without_genres.length ? without_genres.join() : '',
    },
  });

  const movies = request.data.results;
  return movies;
};

export default getMovies;
