import addInSelectedMovies from './pagesReducers/addInSelectedMovies';
import setNextPage from './pagesReducers/setNextPage';
import setMovies from './pagesReducers/setMovies';
import setRightMovie from './pagesReducers/setRightMovie';
import setQuessed from './pagesReducers/setQuessed';
import reduceLevelScore from './pagesReducers/reduceLevelScore';

import {
  ADD_IN_SELECTED_MOVIES,
  TO_NEXT_PAGE,
  SET_MOVIES,
  SET_RIGHT_MOVIE,
  IS_QUESSED,
  REDUCE_LEVEL_SCORE,
} from '../../../utils/constants';

const pagesMap = new Map([
  [ADD_IN_SELECTED_MOVIES, addInSelectedMovies],
  [TO_NEXT_PAGE, setNextPage],
  [SET_MOVIES, setMovies],
  [SET_RIGHT_MOVIE, setRightMovie],
  [IS_QUESSED, setQuessed],
  [REDUCE_LEVEL_SCORE, reduceLevelScore],
]);

export default pagesMap;
