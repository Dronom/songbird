import addScore from './scoreReducers/addScore';
import { ADD_SCORE } from '../../../utils/constants';

const scoreMap = new Map([[ADD_SCORE, addScore]]);

export default scoreMap;
