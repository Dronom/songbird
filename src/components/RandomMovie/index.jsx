import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import UnknownPoster from '../../assets/img/unknown_movie.jpg';
import Playback from '../Playback';
import { startRandomMovie, pauseRandomMovie, stopRandomMovie } from '../../redux/actions';

const RandomMovie = () => {
  const pagesPassed = useSelector((store) => store.pages.pagesPassed);
  const rightMovie = useSelector((store) => store.pages.list[pagesPassed]?.rightMovie);
  const isQuessed = useSelector((store) => store.pages.list[pagesPassed]?.isQuessed);
  const randomMoviePlayback = useSelector((store) => store.playback.randomMovie, shallowEqual);

  const dispatch = useDispatch();

  return (
    <section className="movies-section random-movie-section">
      <img
        src={
          isQuessed ? `${process.env.MOVIE_POSTER_LINK}${rightMovie.poster_path}` : UnknownPoster
        }
        alt="Unknown movie poster"
        className="random-movie-section__poster"
      />
      <div className="random-movie-section__container">
        <p className="random-movie-section__name">
          {isQuessed ? rightMovie.title || rightMovie.name : '******* *******'}
        </p>
        <Playback
          text={rightMovie.overview}
          stopButton
          playback={randomMoviePlayback}
          onClick={() => {
            dispatch(startRandomMovie(rightMovie.overview));
          }}
          pauseClick={() => {
            dispatch(pauseRandomMovie());
          }}
          stopClick={() => {
            dispatch(stopRandomMovie());
          }}
        />
      </div>
    </section>
  );
};

export default RandomMovie;
