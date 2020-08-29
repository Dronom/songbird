import React from 'react';
import { useSelector } from 'react-redux';
import Speech from 'speak-tts';
import PropTypes from 'prop-types';

import SvgPlay from '../../assets/img/play.svg';
import SvgPause from '../../assets/img/pause.svg';
import SvgStop from '../../assets/img/stop.svg';

const setSpeechLang = (lang) => {
  if (lang === 'en') {
    return 'en-GB';
  }
  return lang || 'en';
};

const Playback = ({ text, playback, onClick, pauseClick, stopButton, stopClick }) => {
  const lang = useSelector((store) => store.settings.language);
  const canPlay = useSelector((store) => store.playback.canPlay);

  const speech = new Speech();

  if (!canPlay) {
    speech.pause();
  }

  speech.init({ volume: 1, lang: setSpeechLang(lang), rate: 1, pitch: 1 });

  return (
    <div className="playback-buttons">
      <div className="playback-button" aria-hidden="true">
        {playback.isPlaying ? (
          <SvgPause
            onClick={() => {
              speech.pause();

              pauseClick();
            }}
          />
        ) : (
          <SvgPlay
            onClick={() => {
              speech.speak({ text, queue: false });

              onClick();
            }}
          />
        )}
      </div>
      {stopButton && (
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
      )}
    </div>
  );
};

Playback.propTypes = {
  text: PropTypes.string,
  stopButton: PropTypes.bool,
  onClick: PropTypes.func,
  stopClick: PropTypes.func,
  pauseClick: PropTypes.func,
  playback: PropTypes.shape({ isPlaying: PropTypes.bool }).isRequired,
};

Playback.defaultProps = {
  stopButton: false,
  onClick: () => {},
  stopClick: () => {},
  pauseClick: () => {},
  text: '',
};

export default Playback;
