import React from 'react';

import RandomMovie from '../RandomMovie';
import MovieList from '../MovieList';
import MovieDescription from '../MovieDescription';
import NextButton from '../NextButton';

const MovieSection = () => {
  return (
    <>
      <main>
        <RandomMovie />
        <MovieList />
        <MovieDescription />
        <NextButton />
      </main>
    </>
  );
};

export default MovieSection;
