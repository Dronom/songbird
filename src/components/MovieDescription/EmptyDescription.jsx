import React from 'react';
import PropTypes from 'prop-types';

const EmptyDescription = ({ t }) => {
  return (
    <p className="movie-instruction">
      {t('Listen to the description', 'Listen to the description of the movie.')}
      <br />
      {t('Select a movie from the list')}
    </p>
  );
};

EmptyDescription.propTypes = {
  t: PropTypes.func.isRequired,
};

export default EmptyDescription;
