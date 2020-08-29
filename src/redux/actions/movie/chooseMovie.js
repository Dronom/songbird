import addInSelectedMovies from './addInSelectedMovies';
import changeIsQuessed from './changeIsQuessed';
import setActiveMovie from './setActiveMovie';
import addScore from '../score/addScore';
import reduceLevelScore from '../score/reduceLevelScore';
import resetPlaybacks from '../playback/resetPlaybacks';

const chooseMovie = ({
  dispatch,
  category,
  movie,
  rightMovie,
  levelScore,
  isQuessed,
  selectedMovieIds,
  loseSound,
  winSound,
}) => {
  dispatch(setActiveMovie(movie));

  if (isQuessed) {
    return;
  }

  const isSelectedBefore = selectedMovieIds.has(movie.id);

  if (!isSelectedBefore) {
    if (movie === rightMovie) {
      dispatch(changeIsQuessed(category, true));
      dispatch(addScore(levelScore));
      dispatch(resetPlaybacks());

      winSound.currentTime = 0;
      winSound.play();
    } else {
      dispatch(reduceLevelScore(category));
      loseSound.volume = 0.3;

      loseSound.currentTime = 0;
      loseSound.play();
    }
    dispatch(addInSelectedMovies(category, movie.id));
  }
};

export default chooseMovie;
