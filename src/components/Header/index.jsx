import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import MovieQuizIcon from '../../assets/img/quizLogo.png';

const Header = () => {
  const score = useSelector((store) => store.score);

  const [t] = useTranslation();

  return (
    <header>
      <img src={MovieQuizIcon} className="quiz-logo" alt="Movie Quiz icon" />
      <span className="quiz-score">
        {t('Score')}: {score}
      </span>
    </header>
  );
};

export default Header;
