import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const winCongratulation = ({ score, maxScore, t }) => {
  return `${t('Your score')}: ${score}/${maxScore}`;
};

const fullWinCongratulation = ({ maxScore, t }) => {
  return `${t('Wow, you have reached the maximum score')}: ${maxScore}`;
};

const FinishPage = ({ score, maxScore, onClick = () => {} }) => {
  const [t] = useTranslation();

  return (
    <div className="finish-page">
      <div className="finish-page-container">
        <h2 className="finish-page-title">{t('Congratulations')}!!!</h2>
        <p className="finish-page__score">
          {score === maxScore
            ? fullWinCongratulation({ maxScore, t })
            : winCongratulation({ score, maxScore, t })}
        </p>
        <button type="button" onClick={onClick} className="finish-page__button">
          {t('Try again')}
        </button>
      </div>
    </div>
  );
};

FinishPage.propTypes = {
  score: PropTypes.number.isRequired,
  maxScore: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

FinishPage.defaultProps = {
  maxScore: 30,
};

export default FinishPage;
