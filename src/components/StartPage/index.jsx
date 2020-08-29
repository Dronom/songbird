import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { setLanguage, isStarted } from '../../redux/actions';
import { GAME_DESCRIPTION } from '../../utils/constants';

const languageToggle = ({ language, dispatch, i18n }) => () => {
  if (language === 'en') {
    i18n.changeLanguage('ru');
    return dispatch(setLanguage('ru'));
  }
  i18n.changeLanguage('en');
  return dispatch(setLanguage('en'));
};

const StartPage = () => {
  const { language } = useSelector((store) => store.settings);

  const [t, i18n] = useTranslation();

  const dispatch = useDispatch();

  return (
    <div className="start-page">
      <div className="start-page-container">
        <div className="lang-box">
          <button
            className="lang-button"
            type="button"
            onClick={languageToggle({ dispatch, language, i18n })}
          >
            {language || 'Language'}
          </button>
        </div>
        <h2 className="start-page-title">{t('Welcome to Movie Quiz')}!</h2>
        <p className="quiz-description">{t('full description', GAME_DESCRIPTION)}</p>
        <button
          type="button"
          onClick={() => {
            dispatch(isStarted(true));
          }}
          className="start-page__button"
        >
          {t('Start Quiz')}
        </button>
      </div>
    </div>
  );
};

export default StartPage;
