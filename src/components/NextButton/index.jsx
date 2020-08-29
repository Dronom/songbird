import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { setActiveMovie, setGameOver, setNextPage, resetPlaybacks } from '../../redux/actions';
import onClick from './onClick';

const NextButton = () => {
  const pagesList = useSelector((store) => store.pages.list);
  const pagesPassed = useSelector((store) => store.pages.pagesPassed);
  const isQuessed = useSelector((store) => store.pages.list[pagesPassed].isQuessed);

  const [t] = useTranslation();

  const dispatch = useDispatch();

  return (
    <button
      disabled={!isQuessed}
      type="button"
      className="next-button"
      onClick={onClick({
        isQuessed,
        pagesPassed,
        pagesList,
        dispatch,
        setActiveMovie,
        setGameOver,
        setNextPage,
        resetPlaybacks,
      })}
    >
      {t('Next Level')}
    </button>
  );
};

export default NextButton;
