import setActiveMovie from './activeMovieReducers/setActiveMovie';
import { SET_ACTIVE_MOVIE } from '../../../utils/constants';

const cartoonMap = new Map([[SET_ACTIVE_MOVIE, setActiveMovie]]);

export default cartoonMap;
