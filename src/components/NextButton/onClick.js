const onClick = ({
  isQuessed,
  pagesPassed,
  pagesList,
  dispatch,
  setActiveMovie,
  setGameOver,
  setNextPage,
  resetPlaybacks,
}) => () => {
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
};

export default onClick;
