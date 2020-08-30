import React from 'react';
import { useSelector } from 'react-redux';
import Speech from 'speak-tts';
import PropTypes from 'prop-types';

import Pause from './Pause';
import Play from './Play';
import Stop from './Stop';

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
          <Pause speech={speech} pauseClick={pauseClick} />
        ) : (
          <Play text={text} speech={speech} onClick={onClick} />
        )}
      </div>
      <Stop stopButton={stopButton} speech={speech} stopClick={stopClick} />
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
  text: '',
  stopButton: false,
  onClick: () => {},
  stopClick: () => {},
  pauseClick: () => {},
};

export default Playback;
