import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { setActiveMovie, setGameOver, setNextPage, resetPlaybacks } from '../../redux/actions';

const NextButton = () => {
  const pagesList = useSelector((store) => store.pages.list);
  const pagesPassed = useSelector((store) => store.pages.pagesPassed);

  const [t] = useTranslation();

  const dispatch = useDispatch();
  const isQuessed = useSelector((store) => store.pages.list[pagesPassed].isQuessed);
  return (
    <button
      disabled={!isQuessed}
      type="button"
      className="next-button"
      onClick={() => {
        if (!isQuessed) {
          return null;
        }
        if (pagesPassed === pagesList.length - 1) {
          dispatch(setGameOver(true));
        } else {
          dispatch(setNextPage());

          dispatch(setActiveMovie({}));
        }
        dispatch(resetPlaybacks());
        return null;
      }}
    >
      {t('Next Level')}
    </button>
  );
};

export default NextButton;
