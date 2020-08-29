import React from 'react';

import Breadcrumbs from '../Breadcrumbs';
import RandomMovie from '../RandomMovie';
import MovieList from '../MovieList';
import MovieDescription from '../MovieDescription';
import NextButton from '../NextButton';

const MovieSection = () => {
  return (
    <main>
      <Breadcrumbs />
      <RandomMovie />
      <MovieList />
      <MovieDescription />
      <NextButton />
    </main>
  );
};

export default MovieSection;
