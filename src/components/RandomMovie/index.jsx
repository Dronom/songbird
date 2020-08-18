import React from 'react';

import UnknownPoster from '../../assets/img/unknown_movie.jpg';

const RandomMovie = () => {
  return (
    <section className="movies-section random-movie-section">
      <img
        src={UnknownPoster}
        alt="Unknown movie poster"
        className="random-movie-section__poster"
      />
      <div className="random-movie-section__container">
        <p className="random-movie-section__name">******</p>
      </div>
    </section>
  );
};

export default RandomMovie;
