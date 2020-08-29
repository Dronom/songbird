import React from 'react';
import PropTypes from 'prop-types';

import SvgPause from '../../assets/img/pause.svg';

const Pause = ({ speech, pauseClick }) => (
  <SvgPause
    onClick={() => {
      speech.pause();

      pauseClick();
    }}
  />
);

Pause.propTypes = {
  pauseClick: PropTypes.func.isRequired,
  speech: PropTypes.shape({ pause: PropTypes.func }).isRequired,
};

export default Pause;
