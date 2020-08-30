import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setStartStatus } from '../../redux/actions';

import Header from '../Header';
import MovieSection from '../MovieSection';
import StartPage from '../StartPage';
import FinishPage from '../FinishPage';

const FinishPageWrapper = () => {
  const score = useSelector((store) => store.score);

  const dispatch = useDispatch();

  return (
    <FinishPage
      score={score}
      onClick={() => {
        dispatch(setStartStatus());
      }}
    />
  );
};

const App = () => {
  const { isStarted, isGameOver } = useSelector((store) => store.settings);

  if (!isStarted) {
    return <StartPage />;
  }

  if (isGameOver) {
    return <FinishPageWrapper />;
  }

  return (
    <>
      <Header />
      <MovieSection />
    </>
  );
};

export default App;
