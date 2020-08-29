import React from 'react';
import PropTypes from 'prop-types';

import SvgPlay from '../../assets/img/play.svg';

const Play = ({ text, speech, onClick }) => (
  <SvgPlay
    onClick={() => {
      speech.speak({ text, queue: false });

      onClick();
    }}
  />
);

Play.propTypes = {
  onClick: PropTypes.func.isRequired,
  speech: PropTypes.shape({ speak: PropTypes.func }).isRequired,
  text: PropTypes.string.isRequired,
};

export default Play;
