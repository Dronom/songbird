import React from 'react';
import PropTypes from 'prop-types';

import SvgStop from '../../assets/img/stop.svg';

const Stop = ({ stopButton, speech, stopClick }) =>
  stopButton && (
    <div
      className="playback-button stop"
      onClick={() => {
        speech.cancel();

        stopClick();
      }}
      aria-hidden="true"
    >
      <SvgStop />
    </div>
  );

Stop.propTypes = {
  stopButton: PropTypes.bool.isRequired,
  stopClick: PropTypes.func.isRequired,
  speech: PropTypes.shape({ cancel: PropTypes.func }).isRequired,
};

export default Stop;
