import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import EmptyDescription from './EmptyDescription';
import FullDescription from './FullDescription';

const MovieDescription = () => {
  const description = useSelector((store) => store.activeMovie);

  const [t] = useTranslation();

  return (
    <section className="movies-section movies-description">
      {description?.id ? (
        <FullDescription description={description} t={t} />
      ) : (
        <EmptyDescription t={t} />
      )}
    </section>
  );
};

export default MovieDescription;
