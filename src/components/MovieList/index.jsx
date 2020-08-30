import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { chooseMovie, setMovies, setRightMovie } from '../../redux/actions';

import loseAudio from '../../assets/audio/lose.mp3';
import winAudio from '../../assets/audio/win.mp3';

import getMovies from '../../helpers/movieAPI/getMovies';
import getOriginalMovies from '../../helpers/movieAPI/getOriginalMovies';
import randomNumber from '../../utils/randomNumber';

const setClassName = ({ movie, rightMovie }) => (movie.id === rightMovie.id ? 'success' : 'error');

const MovieList = () => {
  const pagesList = useSelector((store) => store.pages.list);
  const pagesPassed = useSelector((store) => store.pages.pagesPassed);
  const movies = useSelector((store) => store.pages.list[pagesPassed]?.movies);
  const levelScore = useSelector((store) => store.pages.list[pagesPassed].levelScore);
  const rightMovie = useSelector((store) => store.pages.list[pagesPassed].rightMovie);
  const { language } = useSelector((store) => store.settings);

  const currentCategory = pagesList[pagesPassed].name;
  const { requestSettings } = pagesList[pagesPassed];

  const isQuessed = useSelector((store) => store.pages.list[pagesPassed].isQuessed);
  const selectedMovieIds = useSelector((store) => store.pages.list[pagesPassed].selectedMovieIds);

  const dispatch = useDispatch();

  const winSound = new Audio(winAudio);
  const loseSound = new Audio(loseAudio);

  useEffect(() => {
    const wrapper = async () => {
      if (!movies.length) {
        const movieList = await getMovies({ ...requestSettings, language });

        const moviesAmount = 6;

        const originalMovieList = getOriginalMovies({ moviesAmount, movieList });

        const makeRightMovie = originalMovieList[randomNumber(originalMovieList.length)];

        dispatch(setMovies({ movies: originalMovieList, category: currentCategory }));
        dispatch(setRightMovie(makeRightMovie, currentCategory));
      }
    };
    wrapper();
  }, [pagesPassed]);

  return (
    <section className="movies-section movies-list">
      <ul className="movies-list__ul">
        {movies?.length ? (
          movies.map((movie) => (
            <li
              id={movie.id}
              key={movie.id}
              className={`movies-list__item ${
                selectedMovieIds.has(movie.id) ? setClassName({ movie, rightMovie }) : ''
              }`}
              onClick={() =>
                chooseMovie({
                  dispatch,
                  category: currentCategory,
                  movie,
                  rightMovie,
                  levelScore,
                  isQuessed,
                  selectedMovieIds,
                  loseSound,
                  winSound,
                })
              }
              aria-hidden="true"
            >
              {movie.title || movie.name}
            </li>
          ))
        ) : (
          <li className="movies-list__loading"> Loading...</li>
        )}
      </ul>
    </section>
  );
};

export default MovieList;
